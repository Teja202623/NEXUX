import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data (optional - comment out if you want to preserve data)
  console.log('🗑️  Clearing existing competitors...');
  await prisma.competitor.deleteMany({});

  // Seed initial competitors with Australian Local SEO agencies
  console.log('📝 Creating competitors...');

  const competitors = [
    {
      name: 'Ignite Search',
      website: 'https://www.ignitesearch.com.au',
      domain: 'ignitesearch.com.au',
      linkedinUrl: 'https://www.linkedin.com/company/ignite-search/',
      facebookPageId: '100064734677419', // Example - replace with actual
      instagramHandle: 'ignitesearchau',
      industry: 'digital-marketing',
      trades: ['Local SEO', 'Google Ads', 'Web Design'],
      status: 'active',
    },
    {
      name: 'Clickthrough Marketing',
      website: 'https://www.clickthrough.com.au',
      domain: 'clickthrough.com.au',
      linkedinUrl: 'https://www.linkedin.com/company/clickthrough-marketing/',
      facebookPageId: '100057123456789', // Example - replace with actual
      instagramHandle: 'clickthroughmarketing',
      industry: 'digital-marketing',
      trades: ['SEO', 'PPC', 'Content Marketing'],
      status: 'active',
    },
    {
      name: 'WebBuzz',
      website: 'https://www.webbuzz.com.au',
      domain: 'webbuzz.com.au',
      linkedinUrl: 'https://www.linkedin.com/company/webbuzz/',
      facebookPageId: '100057987654321', // Example - replace with actual
      instagramHandle: 'webbuzzau',
      industry: 'digital-marketing',
      trades: ['Local SEO', 'Social Media', 'Web Development'],
      status: 'active',
    },
  ];

  for (const competitor of competitors) {
    const created = await prisma.competitor.create({
      data: competitor,
    });
    console.log(`✅ Created competitor: ${created.name}`);
  }

  console.log(`\n✨ Seed completed! ${competitors.length} competitors created.`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
