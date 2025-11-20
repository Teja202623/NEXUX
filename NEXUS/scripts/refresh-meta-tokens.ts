#!/usr/bin/env ts-node
/**
 * Meta API Token Refresh Script
 *
 * This script:
 * 1. Exchanges short-lived user tokens for long-lived tokens (60 days)
 * 2. Gets never-expiring page access tokens
 * 3. Updates the .env file with new tokens
 *
 * Usage: npm run refresh-tokens
 */

import axios from 'axios';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const GRAPH_API_URL = 'https://graph.facebook.com/v18.0';

interface TokenExchangeResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

interface PageTokenResponse {
  data: Array<{
    access_token: string;
    category: string;
    name: string;
    id: string;
  }>;
}

async function exchangeForLongLivedToken(
  shortLivedToken: string,
  appId: string,
  appSecret: string
): Promise<string> {
  console.log('🔄 Exchanging for long-lived user token...');

  try {
    const response = await axios.get<TokenExchangeResponse>(
      `${GRAPH_API_URL}/oauth/access_token`,
      {
        params: {
          grant_type: 'fb_exchange_token',
          client_id: appId,
          client_secret: appSecret,
          fb_exchange_token: shortLivedToken,
        },
      }
    );

    const expiresInDays = response.data.expires_in ? Math.floor(response.data.expires_in / 86400) : 60;
    console.log(`✅ Long-lived token obtained (expires in ~${expiresInDays} days)`);

    return response.data.access_token;
  } catch (error: any) {
    console.error('❌ Error exchanging token:', error.response?.data || error.message);
    throw error;
  }
}

async function getNeverExpiringPageToken(
  userAccessToken: string
): Promise<{ token: string; pageId: string; pageName: string }> {
  console.log('🔄 Getting never-expiring page token...');

  try {
    const response = await axios.get<PageTokenResponse>(
      `${GRAPH_API_URL}/me/accounts`,
      {
        params: {
          access_token: userAccessToken,
        },
      }
    );

    if (!response.data.data || response.data.data.length === 0) {
      throw new Error('No Facebook pages found for this user');
    }

    // Get the first page (or you can let user choose)
    const page = response.data.data[0];
    console.log(`✅ Never-expiring page token obtained for: ${page.name} (ID: ${page.id})`);

    return {
      token: page.access_token,
      pageId: page.id,
      pageName: page.name,
    };
  } catch (error: any) {
    console.error('❌ Error getting page token:', error.response?.data || error.message);
    throw error;
  }
}

async function getInstagramBusinessAccount(
  pageAccessToken: string,
  pageId: string
): Promise<{ igUserId: string; igUsername: string; token: string }> {
  console.log('🔄 Getting Instagram Business Account...');

  try {
    const response = await axios.get(
      `${GRAPH_API_URL}/${pageId}`,
      {
        params: {
          fields: 'instagram_business_account',
          access_token: pageAccessToken,
        },
      }
    );

    const igAccountId = response.data.instagram_business_account?.id;

    if (!igAccountId) {
      console.warn('⚠️  No Instagram Business Account linked to this page');
      return { igUserId: '', igUsername: '', token: pageAccessToken };
    }

    // Get Instagram username
    const igResponse = await axios.get(
      `${GRAPH_API_URL}/${igAccountId}`,
      {
        params: {
          fields: 'username',
          access_token: pageAccessToken,
        },
      }
    );

    console.log(`✅ Instagram Business Account found: @${igResponse.data.username}`);

    return {
      igUserId: igAccountId,
      igUsername: igResponse.data.username,
      token: pageAccessToken, // Same token works for Instagram
    };
  } catch (error: any) {
    console.error('⚠️  Error getting Instagram account:', error.response?.data || error.message);
    return { igUserId: '', igUsername: '', token: pageAccessToken };
  }
}

function updateEnvFile(updates: Record<string, string>) {
  console.log('📝 Updating .env file...');

  const envPath = path.resolve(process.cwd(), '.env');
  let envContent = fs.readFileSync(envPath, 'utf-8');

  for (const [key, value] of Object.entries(updates)) {
    const regex = new RegExp(`^${key}=.*$`, 'm');
    if (regex.test(envContent)) {
      envContent = envContent.replace(regex, `${key}=${value}`);
      console.log(`  ✓ Updated ${key}`);
    } else {
      envContent += `\n${key}=${value}`;
      console.log(`  ✓ Added ${key}`);
    }
  }

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file updated successfully');
}

async function main() {
  console.log('\n============================================================');
  console.log('🔐 META API TOKEN REFRESH SCRIPT');
  console.log('============================================================\n');

  const appId = process.env.FACEBOOK_APP_ID;
  const appSecret = process.env.FACEBOOK_APP_SECRET;

  if (!appId || !appSecret) {
    console.error('❌ Missing FACEBOOK_APP_ID or FACEBOOK_APP_SECRET in .env file');
    process.exit(1);
  }

  console.log(`📱 App ID: ${appId}\n`);

  // Step 1: Prompt user to get a short-lived token
  console.log('📋 STEP 1: Get a short-lived User Access Token');
  console.log('   1. Visit: https://developers.facebook.com/tools/explorer/');
  console.log(`   2. Select your app (App ID: ${appId})`);
  console.log('   3. Click "Generate Access Token"');
  console.log('   4. Select these permissions:');
  console.log('      - pages_read_engagement');
  console.log('      - pages_manage_posts  ');
  console.log('      - pages_show_list');
  console.log('      - instagram_basic');
  console.log('      - instagram_manage_insights');
  console.log('   5. Copy the token and paste it here\n');

  // Read from command line argument or prompt
  const shortLivedToken = process.argv[2];

  if (!shortLivedToken) {
    console.error('❌ Usage: npm run refresh-tokens <SHORT_LIVED_TOKEN>');
    console.error('   Or: ts-node scripts/refresh-meta-tokens.ts <SHORT_LIVED_TOKEN>');
    process.exit(1);
  }

  try {
    // Step 2: Exchange for long-lived user token
    const longLivedUserToken = await exchangeForLongLivedToken(
      shortLivedToken,
      appId,
      appSecret
    );

    // Step 3: Get never-expiring page token
    const pageData = await getNeverExpiringPageToken(longLivedUserToken);

    // Step 4: Get Instagram Business Account
    const igData = await getInstagramBusinessAccount(
      pageData.token,
      pageData.pageId
    );

    // Step 5: Update .env file
    const updates: Record<string, string> = {
      FACEBOOK_AD_LIBRARY_TOKEN: longLivedUserToken,
      FACEBOOK_PAGE_ACCESS_TOKEN: pageData.token,
      INSTAGRAM_ACCESS_TOKEN: igData.token,
      INSTAGRAM_BUSINESS_ACCOUNT_TOKEN: igData.token,
    };

    updateEnvFile(updates);

    console.log('\n============================================================');
    console.log('✨ TOKEN REFRESH COMPLETE!');
    console.log('============================================================');
    console.log('\n📊 Summary:');
    console.log(`   • User Token (60 days): ${longLivedUserToken.substring(0, 30)}...`);
    console.log(`   • Page Token (never expires): ${pageData.token.substring(0, 30)}...`);
    console.log(`   • Facebook Page: ${pageData.pageName} (${pageData.pageId})`);
    if (igData.igUsername) {
      console.log(`   • Instagram Account: @${igData.igUsername} (${igData.igUserId})`);
    }
    console.log('\n⏰ Next Refresh: ~60 days (User token)');
    console.log('   Page & Instagram tokens will never expire!\n');
    console.log('🚀 You can now run: npm run scraper:test\n');

  } catch (error: any) {
    console.error('\n❌ Token refresh failed:', error.message);
    process.exit(1);
  }
}

main();
