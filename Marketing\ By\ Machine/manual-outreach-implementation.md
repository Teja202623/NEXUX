# Manual Outreach Implementation Plan
**Digital Marketing Genius — Marketing By Machine**

**Document Owner:** Teja Bongu
**Date Created:** November 2025
**Status:** Active Implementation
**Version:** 1.0

---

## Table of Contents
1. [Overview & Goals](#overview--goals)
2. [Phase 1: Manual Outreach (0-10 Customers)](#phase-1-manual-outreach-0-10-customers)
3. [Phase 2: Systematization (10-25 Customers)](#phase-2-systematization-10-25-customers)
4. [Phase 3: Team Scaling (25-100 Customers)](#phase-3-team-scaling-25-100-customers)
5. [Social Media Strategy](#social-media-strategy)
6. [Success Metrics & Tracking](#success-metrics--tracking)
7. [Daily Checklists](#daily-checklists)
8. [Email & Sales Scripts](#email--sales-scripts)
9. [Common Objections & Handling](#common-objections--handling)

---

## Overview & Goals

### Business Objective
Acquire 100+ paying customers at $200/month through a systematic process starting with manual outreach, progressing to automation, and ending with a small team.

### Timeline
- **Phase 1 (Month 1-1.5):** Manual outreach → 10 customers ($2,000 MRR)
- **Phase 2 (Month 1.5-3):** Automation + systems → 25 customers ($5,000 MRR)
- **Phase 3 (Month 3-6):** Team hiring + scaling → 100+ customers ($20,000+ MRR)

### Success Criteria by Phase

| Phase | Customers | MRR | Team | Time/Week | Focus |
|-------|-----------|-----|------|-----------|-------|
| Phase 1 | 10 | $2,000 | You only | 10-12 hrs | Manual outreach |
| Phase 2 | 25 | $5,000 | You + Systems | 12-15 hrs | Automation |
| Phase 3 | 100+ | $20,000+ | You + VA + Closer | 15-20 hrs | Team management |

---

# PHASE 1: MANUAL OUTREACH (0-10 CUSTOMERS)

## Duration: 30-45 Days
## Time Commitment: 10-12 hours/week (4-6am daily + 2-3 evening calls)
## Goal: Get first 10 paying customers + validate product-market fit

---

## 1.1 Week 0: Pre-Launch Setup (Before Day 1)

### Technical Setup

#### A. Email Infrastructure (2-3 hours)

**STEP 1: Choose email provider**
- **Decision: SendGrid** ($20/month)
  - Best for warm-up support + API integration
  - Cost: $20/month
  - Warm-up tools: Built-in

**STEP 2: Purchase sending domain**
- Buy domain: teja-seo.com.au
- Cost: ~$15/year
- Time: 15 mins

**STEP 3: Configure DNS records**
- Add SendGrid SPF record: `v=spf1 sendgrid.net ~all`
- Add SendGrid DKIM record (provided by SendGrid)
- Set DMARC policy: `v=DMARC1; p=reject; rua=mailto:your-email@gmail.com`
- Verify at: https://mxtoolbox.com
- Time: 30 mins

**STEP 4: Create SendGrid API integration**
- Generate API key in SendGrid dashboard
- Add to backend/.env: SENDGRID_API_KEY=xxx
- Create backend/src/services/email.service.ts
- Test: Send yourself 1 test email
- Time: 1.5 hours

**Week 0 Technical Total:** 5-8 hours

---

### Sales Prep

#### A. Niche & Territory Selection (1 hour)

**DECISION: Primary Niche = PLUMBERS**

Why plumbers?
- High search volume for local services
- Strong need for local visibility
- Easier to demonstrate ROI
- Clear competitor differentiation

**DECISION: Primary Territory = WESTERN MELBOURNE**

Target suburbs (15 suburbs):
1. Werribee
2. Hoppers Crossing
3. Tarneit
4. Point Cook
5. Melton
6. Caroline Springs
7. Wyndham Vale
8. Truganina
9. Williamstown
10. Footscray
11. Maribyrnong
12. Essendon
13. Moonee Ponds
14. Brunswick
15. Coburg

---

#### B. Build Prospect List (3-4 hours)

**TASK:** Find 50-75 qualified plumbers in your 15 suburbs

**Method 1: Google Maps (Recommended)**
- Google Maps search: "plumber near [suburb]"
- Extract: Business name, Address, Phone, Website, Reviews, Rating
- Time: 2-3 hours
- Cost: $0

**Output:** Excel file with columns:
- Business Name | Suburb | Phone | Website | Email | Reviews | Rating | Notes

---

#### C. Create 20-25 Sample Geo-Grids (4-6 hours)

**TASK:** Manually create detailed geo-grids for your top prospects

For each prospect:
1. Run geo-grid in your localrankai app
2. Export as PNG
3. Annotate:
   - 3 strong suburbs (GREEN)
   - 3 weak suburbs (RED)
   - Top competitor name
   - Estimated lost revenue

Time: 4-6 hours (20-30 mins per grid)

**Week 0 Sales Total:** 8-11 hours
**Week 0 TOTAL:** 13-19 hours (do this before you start)

---

## 1.2 Week 1: Launch Outreach (Days 1-7)

### Daily Routine (4-6am, ~2 hours)

```
SCHEDULE:
Monday-Friday: 4:00-5:45am (before work)

ACTIVITY BREAKDOWN (per day):
- 40 mins: Create 2-3 geo-grids
- 50 mins: Compose + send 15-20 personalised emails
- 15 mins: Check for replies + respond immediately
- 15 mins: Log activity + update spreadsheet
```

### Weekly Outreach Volume

**TARGET METRICS:**
- Emails sent: 75-100
- Expected replies: 8-15 (10-15% reply rate)
- Calls booked: 4-7
- Customers closed: 1-2

### Email Warm-Up Schedule (Critical)

```
GRADUAL RAMP-UP:
Monday-Tuesday: 10-15 emails/day (test inbox placement)
Wednesday-Friday: 15-20 emails/day
Total Week 1: 75-100 emails

MONITORING:
- Check SendGrid dashboard for bounce rates
- Test 1 email at mail-tester.com
- Check your own Gmail spam folder
- If bounces >5%: PAUSE and investigate DNS records
```

---

## 1.3 Week 2: Scale Volume + Add Channels (Days 8-14)

### Weekly Outreach Volume: 150+ emails

**TARGET METRICS:**
- Emails sent: 150-180
- Expected replies: 20-25 (12-15% reply rate)
- Calls booked: 10-15
- Customers closed: 2-3
- **Total customers to date: 4-5**

### Multi-Channel Approach

#### A. Email (Primary - 80% of effort)
- Continue personalised emails
- Target: 25-30/day
- Reply rate target: 10-15%

#### B. Facebook DMs (Secondary - 15% of effort)
```
WHY Facebook for tradies?
- Plumbers check FB more than email
- Less formal = higher response rate
- 40-60% reply rate vs 10-15% for email

METHOD:
1. Find plumber Facebook pages
2. Visit their page → Send DM (not public message)

TEMPLATE:
"Hey mate, not a salesperson. I ran a quick visibility check for [Business].
You're strong in [Suburb1], but completely invisible in [Suburb2].
Want the map? I'll send it as a DM."

TIME: 15 mins to send 10 DMs
EXPECTED: 5-7 replies per 10 DMs (50-70% response rate)
VOLUME: 10 DMs per day = 70 DMs for the week
```

#### C. Loom Videos (Optional - 5% of effort)
```
What: 90-second screen-recorded video showing their geo-grid
Why: Video increases conversion by 40-70%

SCRIPT:
"Hey [Name], recorded a quick 90-second video showing your visibility.
[Loom link]

Can you check it out? It's just 90 seconds."

TIME: 5 mins per video
FREQUENCY: Create 5-7 per week for hot prospects
EXPECTED: +20-30% conversion rate on these prospects
```

### Daily Checklist - Week 2

```
MONDAY-FRIDAY (Days 8-12):

MORNING (4:00-4:45am):
[ ] Create 2-3 new geo-grids
[ ] Send 25-30 personalised emails
[ ] Update spreadsheet

MID-MORNING (after 9am):
[ ] Check for replies
[ ] Respond immediately to all replies
[ ] Send geo-grids to those who asked
[ ] Invite to call

LUNCH (12pm):
[ ] Send 10 Facebook DMs to plumber pages
[ ] Note responses

EVENING (6-7pm):
[ ] Book calls from replies/DMs
[ ] Prep talking points for calls
[ ] For top 5 prospects: Create Loom video

NIGHT (as needed):
[ ] Make calls (if booked)
[ ] Log outcomes

METRICS TO TRACK:
- Email sent: Target 150
- Email reply rate: Target 12-15%
- Facebook DM sent: Target 70
- Facebook DM reply rate: Target 50%+
- Total replies: Target 20-25
- Calls booked: Target 10-15
- Closes: Target 2-3
```

---

## 1.4 Week 3: Follow-Ups + Phone Calls (Days 15-21)

### Weekly Outreach Volume: 120 new emails + 30+ follow-ups

**TARGET METRICS:**
- New emails sent: 120-150
- Follow-up emails sent: 30-50
- Phone calls made: 15-20
- Calls booked: 8-12
- Customers closed: 2-3
- **Total customers to date: 7-8**

### Follow-Up Sequences for Non-Responders

```
Day 0: Initial email (sent Week 1-2)

Day 3: Follow-up email (if no reply)
Subject: "Quick one, [Name]"
Body: "Just checking if you want that visibility map"

Day 7: Follow-up email (if still no reply)
Subject: "[Name] — you're leaving money on the table"
Body: "Not trying to be pushy, but your visibility gaps represent real revenue"

Day 10: Phone call
"Hi [Name], quick question about your local visibility..."

Day 14: Final email
Subject: "[Name] — last chance to see your geo-grid"
Body: "Final check — want that visibility map?"

If no response by Day 14: Add to "nurture list" for Month 2
```

### Phone Calling Strategy

```
GOAL: Make 15-20 phone calls this week

WHO TO CALL:
1. People who replied to emails but haven't booked call
2. People who viewed Loom video but haven't replied
3. Random prospects (cold call) if time allows

WHEN TO CALL:
- 7:00-8:00am (morning, before they get busy)
- 4:00-5:30pm (afternoon, after job site)
- Monday-Thursday (Friday slower)
- Avoid lunch, avoid weekends

TIME PER CALL: 3-5 minutes
EXPECTED OUTCOME: 40-50% agree to see map, 20-30% book call
VOLUME GOAL: 15-20 calls/week
```

### Case Study Creation (Week 3)

```
TASK: Create 2 simple case studies from early customers

PURPOSE:
- Social proof (show on Facebook/LinkedIn)
- Sales tool (mention in calls: "I just did this for another plumber...")
- Confidence booster (you're getting results)

TEMPLATE:
---
CASE STUDY: [Business Name]

SITUATION:
[Business Name] was strong in [Suburb1] but invisible in [Suburb2-3].

THE GAP:
- Ranking #1 in [Strong]
- Ranking #15+ in [Weak] (where [Competitor] dominates)

IMPACT:
- ~$[X] annual opportunity in lost business

WHAT WE DID:
Generated monthly geo-grid + visibility strategy

RESULTS (30-60 days):
- [Suburb2] improved from #15 to #7
- Phone inquiries from [Suburb3] increased
- Now tracking rankings monthly

---

TIME: 30-45 mins per case study
PUBLISH: Facebook, LinkedIn, email signature
```

### Daily Checklist - Week 3

```
MONDAY-FRIDAY (Days 15-19):

MORNING (4:00-4:45am):
[ ] Create 2-3 new geo-grids
[ ] Send 20-25 new emails
[ ] Send 5-10 follow-up emails

MID-MORNING (9-10am):
[ ] Check/respond to replies
[ ] Send geo-grids to inquiries

LUNCH (12pm):
[ ] Send 10 Facebook DMs

AFTERNOON (3-4pm):
[ ] Make 3-4 phone calls (from list)
[ ] Log outcomes

EVENING (6-7pm):
[ ] Make 3-4 more phone calls
[ ] Book calls from responses
[ ] Create Loom for top prospects

NIGHT (as needed):
[ ] Take calls with prospects
[ ] Log outcomes + next steps

SATURDAY (Day 20):
[ ] Create 1 case study from recent customer
[ ] Post on Facebook/LinkedIn

SUNDAY (Day 21):
[ ] Review Week 3 metrics
[ ] Plan Week 4 push

METRICS TO TRACK:
- Total customers: Should be 7-8 by Friday
```

---

## 1.5 Week 4: Final Push to 10 Customers (Days 22-30)

### Weekly Outreach Volume: 100 new emails + 40+ follow-ups

**TARGET METRICS:**
- New emails sent: 100-120
- Follow-up emails: 40-50
- Phone calls: 15-20
- Customers closed: 2-3
- **TOTAL PHASE 1 CUSTOMERS: 10+**
- **TOTAL PHASE 1 MRR: $2,000+**

### Final Push Strategy

```
THEME: SCARCITY + URGENCY

Email Subject Lines:
- "I'm only taking 3 more clients this month"
- "[Name], final chance to see your visibility"
- "Last spots available: Founder tier"

Call Script:
"Hey [Name], I'm only taking on 3 more founder clients this month.
You're a great fit. Want to jump on a quick call today?"

OFFER:
- Normal: $200/month visibility tracking
- Founder tier: $200/month + priority support + monthly competitor analysis
```

### Referral Push (Week 4)

```
EMAIL TO CUSTOMERS (Week 4 or later):

Subject: Can you do me a favor?

Hi [CustomerName],

You've been getting your monthly visibility reports for [X weeks]
and you're seeing some solid improvements in [Suburb].

Quick question — do you know any other plumber mates who might want
to see their visibility map?

If you refer someone who signs up, I'll give you 1 free month on me.

Just forward their contact info and I'll take it from there.

Thanks!
— Teja

EXPECTED: 1-2 referrals per 10 customers
```

### Social Proof Push (Week 4)

```
TASK: Post case studies on Facebook + LinkedIn

Content:
- 2-3 finished case studies
- Before/after geo-grids
- Customer testimonial (if available)

Posting schedule:
- Monday: Case study #1
- Wednesday: Case study #2
- Friday: Customer quote

Expected: 2-3 DM inquiries from posts
```

### Daily Checklist - Week 4

```
MONDAY-WEDNESDAY (Days 22-24):

MORNING (4:00-4:45am):
[ ] Create 2-3 new geo-grids
[ ] Send 25-30 new emails (urgency angle)
[ ] Send 10-15 follow-up emails

MID-MORNING:
[ ] Check/respond to replies
[ ] Respond to case study inquiries from Facebook

AFTERNOON (3-5pm):
[ ] Make 5-6 phone calls

EVENING (6-8pm):
[ ] Make 5-6 more phone calls
[ ] Close deals (high focus this week)
[ ] Book calls with hesitant prospects

NIGHT:
[ ] Take calls/close conversations

THURSDAY-FRIDAY (Days 25-26):

MORNING + AFTERNOON: Same as M-W, but also:
[ ] Ask customers for referrals
[ ] Post case studies on Facebook/LinkedIn
[ ] Make final calls to booked appointments

SATURDAY (Day 27):
[ ] Final push: Call any hesitant leads
[ ] Offer "this week only" discount if needed

SUNDAY (Day 28):
[ ] Review Week 4
[ ] Confirm customer count
[ ] Celebrate 🎉

METRICS TO TRACK:
- Target end total: 10+ customers
- Target MRR: $2,000+
```

---

## 1.6 Phase 1 Success Metrics & Validation

### Daily Tracking Spreadsheet

```
Columns to track:
1. Date contacted
2. Business name
3. Suburb
4. Email sent? ✅/❌
5. Reply received? ✅/❌ (if yes, date)
6. Call booked? ✅/❌ (if yes, date/time)
7. Call completed? ✅/❌
8. Outcome (interested/not interested/will decide)
9. Closed customer? ✅/❌ (if yes, start date)
10. Customer MRR ($200)
11. Notes

KEY METRICS BY END OF PHASE 1:
- Total prospects contacted: 300-400
- Reply rate: 10-15% (30-60 replies)
- Call booking rate: 40-50% of replies (12-30 calls)
- Close rate: 30-50% of calls (4-15 closes)
- Actual closes: 10+ customers
- MRR: $2,000+

RED FLAGS (if you see these, adjust):
- Reply rate <8%: Your emails aren't personalized enough
  → Action: Increase suburb/competitor mentions

- Call booking rate <30%: Your offer isn't compelling
  → Action: Emphasize $X revenue opportunity

- Close rate <20%: Your sales call isn't working
  → Action: Practice call script, offer trial period

- Total closes <5 by Day 30: Volume not high enough
  → Action: Increase daily email volume to 30-40/day
```

---

# PHASE 2: SYSTEMATIZATION (10-25 CUSTOMERS)

## Duration: 30-45 Days
## Time Commitment: 12-15 hours/week (coding + selling)
## Goal: Get to 25 customers + build automation infrastructure

---

## 2.1 What Changes in Phase 2?

### Key Shift: Automation + Systems

**BEFORE (Phase 1):**
Prospect → Manual email → Manual follow-up → Manual call → Manual close → Manual reporting

**AFTER (Phase 2):**
Prospect → Automated email sequence → Smart follow-ups → Calendar booking → Auto-close → Automated reporting + monthly grids

### Time Freed Up
- Email composition: Reduced by 50%
- Follow-up reminders: Eliminated (automated)
- Report generation: Eliminated (automated)
- Time freed: 3-4 hours/week

---

## 2.2 Systems to Build (Weeks 5-9)

### Task 1: Email Automation Sequences (6-8 hours)
- Auto-send follow-ups at Day 3, 7, 14
- Dashboard to view sent emails + opens/clicks
- Ability to pause sequence if customer engages

### Task 2: CRM Pipeline System (6-8 hours)
- Prospect stages: New → Emailed → Interested → Called → Negotiating → Customer
- Kanban board visualization
- Auto-create tasks (e.g., "Book call")

### Task 3: Basic Customer Portal (5-6 hours)
- Login + dashboard
- View latest geo-grid
- Download as PDF
- See previous months

### Task 4: Automated Monthly Report Generation (6-8 hours)
- Cron job runs on 1st of each month
- Re-run geo-grid for each customer
- Generate PDF
- Email to customer
- Upload to portal

---

## 2.3 Phase 2 Outreach Strategy

### Weekly Volume:
- New emails: 30-40/week (maintained)
- Automated follow-ups: 30-50/week (system handles)
- Phone calls: 10-15/week (still manual, high value)
- **Total weekly emails: 60-90**

### Expected Outcome:
- Close 3-4 new customers/week
- Reach 25 customers by end of Phase 2 (~7 weeks total)

---

## Phase 2 Success Metrics

### By End of Phase 2 (Around Day 60):

**CUSTOMERS:**
- Target: 25 customers
- MRR: $5,000

**SYSTEMS BUILT:**
- ✅ Email automation (sequences)
- ✅ CRM pipeline (kanban board)
- ✅ Customer portal (basic)
- ✅ Automated monthly reports
- ✅ Task management

**DECISION POINT:**
Ready to hire VA?
→ YES: Proceed to Phase 3
→ NO: Continue Phase 2 optimization

---

# PHASE 3: TEAM SCALING (25-100 CUSTOMERS)

## Duration: 60-90 Days
## Time Commitment: 15-20 hours/week (management + strategy)
## Goal: Scale to 100+ customers with small team

---

## 3.1 Hire VA (Week 1-2 of Phase 3)

### What You're Hiring For

**ROLE: Virtual Assistant (Sales + Admin)**

**RESPONSIBILITIES:**
- Send daily prospecting emails (20-30/day)
- Follow up on leads
- Schedule calls in your calendar
- Log data in CRM
- Admin tasks (invoicing, follow-ups)

**TIME COMMITMENT:** 15-20 hours/week
**TIMEZONE:** Australia (ideally same timezone)
**SALARY:** $10-15/hour (20 hours/week = $200-300/week)

**WHERE TO HIRE:**
- Upwork (search "VA Australia")
- LinkedIn
- Local VA services

**EXPECTED RESULTS:**
- VA sends 20-30 emails/day (you send 5-10)
- Total: 25-40/day (175-280/week)
- Close 5-8 customers/week vs 3-4 before
- Reach 50 customers by Month 4

---

## 3.2 Hire Closer/Sales Rep (Week 6-8 of Phase 3)

### What You're Hiring For

**ROLE: Sales Closer / SDR**

**RESPONSIBILITIES:**
- Take all booked calls from VA
- Present product
- Close deals
- Answer objections
- Upsell to higher tiers
- Maintain customer relationships

**TIME COMMITMENT:** 20-30 hours/week
**TIMEZONE:** Australia (ideally same timezone)
**SALARY:** $15-20/hour + commission ($50-100 per close)

**COMMISSION STRUCTURE:**
- $50 for customer signed at $200/month
- Bonus: $100 if customer still active after 3 months

**EXPECTED RESULTS:**
- Closer takes 30-50 calls/week
- Close rate: 30-40% (10-20 customers/week)
- Reach 75-100 customers by Month 5-6

---

## 3.3 Your New Role in Phase 3

### From Executor to Manager

**BEFORE (Phase 2):** You do 100% of everything
**AFTER (Phase 3):**
- VA: 100% prospecting/admin
- Closer: 100% sales calls/closes
- You: Manage both, optimize strategy

**YOUR NEW TASKS:**
- Daily standup with team (15 mins)
- Review CRM pipeline (30 mins)
- Process improvements (1 hour/week)
- Customer success (if issues arise)
- Outreach strategy optimization (2 hours/week)
- Hiring/scaling next layer

---

## 3.4 Phase 3 Success Metrics

### By End of Phase 3 (Around Day 150):

**CUSTOMERS:**
- Target: 100+ customers
- MRR: $20,000+
- Payroll: $3,000-4,000/month (VA + Closer)
- Net: $16,000+/month

**TEAM:**
- ✅ VA onboarded + productive
- ✅ Closer onboarded + closing deals
- ✅ You managing both effectively

---

# SOCIAL MEDIA STRATEGY

## When to Start Social Media by Phase

### ⏸️ PHASE 1 (Days 1-45): MINIMAL Social Media (5% of effort)

**Focus:** 95% outreach, 5% social (case studies only)

**What You DO:**
- ✅ Create case studies from early wins (Week 3-4)
- ✅ Post 2-3 case studies on Facebook (Week 3-4)
- ✅ Post 1-2 case studies on LinkedIn (Week 3-4)
- ✅ Share customer wins in Facebook Groups (2-3 posts)

**What You DON'T do:**
- ❌ Daily posts
- ❌ Content creation campaigns
- ❌ Social media growth tactics
- ❌ Hashtag strategy
- ❌ Engagement/comment reply

**Time Commitment (Phase 1):**
- Week 1-2: 0 hours
- Week 3-4: 2-3 hours (case study creation + posting)

**Why Hold Back?**
- You have only 10-12 hours/week total
- Outreach → customers is proven path
- Social proof is weak (0 customers initially)
- Focus on validation first, growth second

---

### 📈 PHASE 2 (Month 2-3): SYSTEMATIC Social Media (20% of effort)

**Focus:** 70% outreach + systems, 20% social, 10% strategy

**What You Build:**
- ✅ Case study engine (5-8 case studies per month)
- ✅ Automated case study → social post conversion
- ✅ Posting schedule (2x per week minimum)
- ✅ Facebook group presence (5-10 posts/month)
- ✅ LinkedIn strategy (2-3 posts/week)

**Content Types (Phase 2):**

1. **Case Studies (40% of posts)**
   - Before/after geo-grids
   - Results achieved
   - Customer testimonials
   - Frequency: 2-3 per week

2. **Educational Content (40% of posts)**
   - "5 suburbs to focus on" breakdowns
   - "Common ranking mistakes"
   - "Local SEO for plumbers"
   - Frequency: 2-3 per week

3. **Thought Leadership (20% of posts)**
   - Your insights on local visibility
   - Market analysis
   - Industry trends
   - Frequency: 1 per week

**Platforms to Focus On (Phase 2):**

1. **Facebook (Primary)**
   - Join 5-10 plumber groups
   - Post helpful content 2x per week
   - Engage with others' posts
   - Use geo-grid examples
   - DM best prospects from group interactions

2. **LinkedIn (Secondary)**
   - Post 2x per week
   - Repost case studies
   - Thought leadership
   - Tag relevant people/businesses
   - Build network of tradies

3. **Instagram (Nice to Have)**
   - Post geo-grid visuals
   - Before/after images
   - 1-2x per week
   - Use #localSEO, #tradies, #plumbing

4. **TikTok/YouTube Shorts (Optional)**
   - 30-60 second videos
   - "See where you rank" demos
   - 1x per week
   - Reuse existing geo-grid content

**Automation Tools (Phase 2):**
- Buffer or Hootsuite: Schedule posts across platforms
- Canva: Design case study graphics
- Zapier: Auto-post when case study published

**Time Commitment (Phase 2):**
- Content creation: 1-2 hours/week
- Scheduling: 30 mins/week
- Engagement: 1 hour/week
- **Total: 2.5-3.5 hours/week**

---

### 🚀 PHASE 3 (Month 3-6): Aggressive Social Media Growth (30% of effort)

**Focus:** 50% outreach (via team) + 30% social media + 20% strategy

**What Changes:**
- VA handles email outreach (you're free from it)
- Closer handles calls (you're free from it)
- You focus on: Content, strategy, partnerships, team management

**Posting Schedule (Phase 3):**

| Platform | Frequency | Type | Time/Week |
|----------|-----------|------|-----------|
| Facebook | 4x/week | Case studies + educational | 2 hours |
| LinkedIn | 3x/week | Thought leadership + case studies | 1.5 hours |
| Instagram | 3x/week | Visual + case studies | 1 hour |
| TikTok/Shorts | 2x/week | Quick demos | 1 hour |
| Facebook Groups | Daily | Helpful content + engagement | 1.5 hours |

**Content Mix (Phase 3):**

```
50% Case Studies & Results
- Customer wins
- Before/after geo-grids
- Ranking improvements

30% Educational Content
- Local SEO tips
- Ranking factors
- Google Maps optimization

15% Thought Leadership
- Industry insights
- Market trends
- Your unique perspective

5% Promotional
- "Join our client list"
- "Get your free geo-grid"
- Link to landing page
```

**Content Creation System (Phase 3):**

1. **Weekly Content Batch**
   - Monday: Brainstorm + outline 8-10 posts
   - Tuesday-Wednesday: Create all content
   - Thursday: Design graphics
   - Friday: Schedule across platforms

2. **Case Study Pipeline**
   - Every new customer → case study
   - Every 30-day milestone → results update
   - Every milestone achievement → feature post

3. **Engagement System**
   - 30 mins/day: Reply to comments
   - 30 mins/day: Engage with industry content
   - 30 mins/day: Join conversations in groups

4. **Analytics & Optimization**
   - Weekly review: Which posts got most engagement?
   - Monthly review: Which content type converts best?
   - Quarterly: Pivot based on data

**Expected Results (Phase 3):**

| Metric | Month 3 | Month 4 | Month 5 | Month 6 |
|--------|---------|---------|---------|---------|
| Facebook followers | 100 | 300 | 700 | 1,500 |
| LinkedIn followers | 50 | 150 | 400 | 900 |
| Monthly post engagement | 200 | 600 | 1,500 | 3,000 |
| Inbound leads from social | 1-2 | 3-5 | 8-12 | 15-20 |
| % of new customers from social | 5% | 10% | 20% | 25-30% |

**Team Support for Phase 3 Social:**
- VA handles some content curation
- Closer can appear in testimonial videos
- Use team wins as content
- Customer success helps create case studies

---

## Social Media Content Calendar Template

### Phase 1 (Minimal - Week 3-4)
```
WEEK 3:
- Tuesday: Facebook - Case Study #1
- Friday: LinkedIn - Case Study #1

WEEK 4:
- Tuesday: Facebook Group - "5 suburbs most plumbers ignore"
- Friday: LinkedIn - Case Study #2
```

### Phase 2 (Systematic - 2x per week)
```
MONDAY:
- Facebook: Case Study + geo-grid visual
- LinkedIn: Repost case study

WEDNESDAY:
- Facebook: Educational ("5 suburbs to focus on")
- LinkedIn: Thought leadership

FRIDAY:
- Facebook Group: Helpful tip + engagement
- Instagram: Case study visual
```

### Phase 3 (Aggressive - Daily/Multi-daily)
```
DAILY:
- Facebook Group: Reply to 5 posts + share 1 helpful comment
- LinkedIn: Engage with 10 posts + reply to comments

MONDAY-FRIDAY:
- Facebook: 1x case study, 1x educational
- LinkedIn: 1x thought leadership, 1x case study
- Instagram: 1x visual, 1x carousel
- TikTok: 1x demo video

WEEKEND:
- Batch-create content for next week
- Review metrics
- Plan adjustments
```

---

## Why This Phased Social Media Approach?

**Phase 1: No social because...**
- Validation is more important than visibility
- You need proof of concept (paying customers)
- Founder time is more valuable on outreach
- Social proof is weak with 0 customers
- Better to have case studies than to be on social early

**Phase 2: Some social because...**
- You have case studies to share
- Case studies work as social proof
- Helps attract inbound leads
- Systems are in place (less time needed)
- You're not as constrained by time

**Phase 3: Heavy social because...**
- Team handles outreach (you're free)
- Social compounds over time (months 3-6 is when it pays off)
- Content becomes sales asset
- Inbound leads start exceeding outbound
- Your personal brand becomes asset

---

# SUCCESS METRICS & TRACKING

## Real-Time Dashboard (What to Track)

### Daily Metrics
```
METRIC              | TARGET    | WHERE TO TRACK
---                 | ---       | ---
Emails sent         | 20-30     | CRM
Replies received    | 2-5       | Spreadsheet
Calls booked        | 1-2       | Calendar
Calls completed     | 1-2       | Notes
Customers closed    | 0.3-0.5   | CRM
MRR (running total) | +$200     | Spreadsheet
```

### Weekly Metrics
```
METRIC              | PHASE 1 TARGET | PHASE 2 TARGET | PHASE 3 TARGET
---                 | ---            | ---            | ---
Emails sent         | 100-150        | 150-200        | 200-300 (with team)
Reply rate          | 10-15%         | 10-15%         | 10-15%
Calls booked        | 5-10           | 8-15           | 15-30
Customers closed    | 2-4            | 3-5            | 10-15
MRR gained          | $400-800       | $600-1000      | $2000-3000
```

### Monthly Metrics
```
METRIC              | PHASE 1 | PHASE 2 | PHASE 3
---                 | ---     | ---     | ---
New customers       | 8-12    | 12-15   | 25-40
Total customers     | 8-12    | 20-27   | 75-115
MRR                 | $1,600-2,400 | $4,000-5,400 | $15,000-23,000
Churn               | 0-1%    | 0-2%    | 1-3%
CAC (approx)        | $100-150 | $80-120 | $60-100
Social followers    | 0 | 100 | 2,000+
Social-sourced leads | 0 | 1-2 | 15-20
```

---

# DAILY CHECKLISTS

## Phase 1 Daily Checklist (4-6am)

### ✅ Morning Routine (2 hours)

```
MONDAY-FRIDAY (4:00-5:45am):

[ ] 4:00-4:10am: Review overnight replies
    - Check email inbox
    - Check Facebook DMs
    - Respond to "YES" replies immediately
    - Log in spreadsheet

[ ] 4:10-4:50am: Create new geo-grids (2-3)
    - Pick 2-3 new prospects
    - Run geo-grid tool
    - Annotate key findings
    - Export as PNG
    - Store file with prospect name

[ ] 4:50-5:40am: Compose + send emails (15-20)
    - Pick top prospects (by reviews/rating)
    - Personalize email (see templates below)
    - Include suburb name (2-3x)
    - Include competitor name (1-2x)
    - Include ranking numbers
    - Send
    - Update spreadsheet with date/time

[ ] 5:40-5:45am: Log activity
    - Emails sent: _____
    - Replies received: ____
    - Mark completed in task manager

EVENING (5-7pm, as needed):

[ ] Check for new replies (5:00pm)
    - Respond to all
    - Send geo-grids
    - Schedule calls

[ ] Make phone calls (5:30-7:00pm)
    - 3-4 calls max
    - Use script (see section below)
    - Log outcomes
    - Book calls in calendar

WEEKEND (Saturday, optional):

[ ] Saturday 5:00-6:00am: Small batch emails (10-15)
    - Lighter volume
    - Reuse best templates from week

[ ] Sunday: REST + Planning
    - Review week metrics
    - Update metrics spreadsheet
    - Plan adjustments for next week
    - Celebrate wins
```

---

# EMAIL & SALES SCRIPTS

## Email Template 1: Initial High-Urgency Email

```
Subject: [BusinessName] is invisible in [Suburb] — quick check

Hi [FirstName],

Quick question — do you want your plumbing business showing up when
people search in [Suburb]?

I just ran a suburb-level visibility check for [BusinessName] and found
something:

📍 WHERE YOU'RE STRONG:
• #1 in [Strong Suburb 1]
• #3 in [Strong Suburb 2]

📍 WHERE YOU'RE INVISIBLE:
• #15+ in [Weak Suburb 1]
• Not in top 20 in [Weak Suburb 2]
• #18 in [Weak Suburb 3]

Your main competitor [CompetitorName] dominates the top 3 positions in
8 suburbs you service.

If you want the full visibility map (shows exactly where you rank vs
competitors), just reply "yes" and I'll send it over.

No obligation — just thought you should see it.

— Teja
Digital Marketing Genius
teja@digitalmarketinggenius.com.au
```

**REPLY RATE:** 12-18%

---

## Email Template 2: Follow-Up (Day 3)

```
Subject: Your [Suburb] visibility map

Hey [FirstName],

Checking in — did you want that visibility map I mentioned?

Your [ServiceType] business is strong in [StrongSuburb], but
[CompetitorName] is dominating in [WeakSuburb] where there's
~400-600 searches/month for "plumber near [WeakSuburb]".

Just reply "yes" and I'll send the full breakdown.

— Teja
```

**REPLY RATE:** 8-12%

---

## Email Template 3: Aggressive Follow-Up (Day 7)

```
Subject: [FirstName] — you're leaving money on the table

[FirstName],

Not trying to be pushy, but your visibility gaps in [Weak Suburb 1],
[Weak Suburb 2], [Weak Suburb 3] represent ~$15,000-25,000 per year
in lost business.

I mapped it out. Reply "yes" if you want to see it.

— Teja
```

**REPLY RATE:** 5-8%

---

## Email Template 4: Facebook DM

```
Hey [FirstName]!

Not a salesperson — just ran a quick visibility check for [BusinessName].

You're strong in [Strong Suburb], but completely invisible in [Weak Suburb]
where people are searching.

Want the map? I'll send it as a DM.
```

**REPLY RATE:** 40-60%

---

## Sales Call Script (Opening)

```
[Prospect picks up]

"Hey [FirstName], it's Teja from Digital Marketing Genius.
Do you have 30 seconds?"

[Pause for response]

"I ran a visibility check for [BusinessName] yesterday and found
something interesting.

You're ranking #1 in [Strong Suburb], which is great, but you're
invisible in [Weak Suburb] where [CompetitorName] dominates.

That's about $X per year in lost revenue.

I put together a quick geo-grid showing exactly where you rank.
Would you want to see it?"

[If YES:]
"Perfect. I'll send it over right now. Can I grab your email?"
[Send grid]
"Got it sent. Quick question — if I could show you specifically
which 2-3 suburbs to focus on to improve your visibility, would
that be worth $200 per month?"

[If HESITANT:]
"I get it. Look, I've done this analysis for 15+ plumbers in your area.
Most see it takes about 60 days to move the needle, but the ones who
track it monthly see consistent improvements. Want to try it for one month?"

[If STILL NO:]
"Fair enough. If you ever want to revisit this, just reach out.
Happy to help."
[HANG UP — don't hard sell]
```

---

# COMMON OBJECTIONS & HANDLING

## Objection #1: "It's too expensive"

**Root Cause:**
- They might not see the value
- $200 is outside their budget
- They don't trust you yet

**Response:**
"I understand. What if we did a trial month at half price ($100)?
See if the data is useful. Then if you want to keep going, it's $200."

---

## Objection #2: "I want to think about it"

**Response:**
"Smart to think it through. Here's the thing though — thinking about it
usually means it doesn't happen. How about this: let's do ONE month at $200.
You'll see your data, the recommendations, and you'll KNOW if it works for you.
If not, we stop. Deal?"

---

## Objection #3: "Too busy to work on this"

**Response:**
"I get it. You run a business. This is exactly why I do the work for you.

YOU don't have to do anything. I:
- Run the visibility checks
- Create the strategy
- Provide the recommendations

All you do is look at the report once a month (10 minutes) and decide
if you want to implement recommendations."

---

# TROUBLESHOOTING GUIDE

## If Reply Rate is Low (<8%)

**ROOT CAUSES:**
1. Email going to spam folder (wrong domain)
2. Subject line not compelling
3. Not enough personalization
4. Sending to wrong list (unqualified prospects)

**FIXES:**
1. Check spam folder yourself
2. Test different subject lines
3. Increase personalization (add 3-4 suburb names)
4. Qualify your list (25+ reviews minimum)

---

## If You're Burning Out

**SOLUTIONS:**
1. Protect sleep (7+ hours)
2. Embrace "good enough"
3. Batch similar tasks
4. Remember the goal is validation, not perfection
5. Drop to 1-2 evening calls/week if needed

---

## If Close Rate is Low (<20% of calls)

**ROOT CAUSES:**
1. Sales script isn't connecting
2. You're talking too much (not listening)
3. Price objection not handled well
4. You're not asking for the sale

**FIXES:**
1. Practice your opening (should feel natural)
2. Listen more than you talk
3. Handle price objection with trial offer
4. Always ask for the sale (don't end with "let me know")

---

# FINAL CHECKLIST: Ready to Start Phase 1?

```
[ ] Email domain purchased + DNS configured
[ ] SendGrid account created + tested
[ ] Prospect list created (50-75 names)
[ ] 20 geo-grids created + reviewed
[ ] Email templates written + reviewed
[ ] Phone scripts practiced (out loud, at least 3x)
[ ] Google Sheet tracker set up + shared
[ ] Calendar ready for scheduling calls
[ ] First 5 emails queued for Monday morning
[ ] Celebration plan ready (for when you hit 10 customers 🎉)

FINAL CHECK:
- Am I committed to 10-12 hours/week for 4-6 weeks? YES/NO
- Am I ready to have 30+ conversations about my business? YES/NO
- Am I prepared to handle rejection (80% will say no)? YES/NO
- Do I understand the goal is validation, not perfection? YES/NO

If YES to all 4: ✅ You're ready. Start Monday.
```

---

## Document Version Control

```
Version 1.0 (Nov 2025):
- Initial creation
- Phase 1, 2, 3 overview
- Social media strategy by phase
- Daily checklists, email templates, scripts
- Success metrics, troubleshooting guide

Next update:
- After Phase 1 completion (add what actually worked)
- After first VA hire (add team processes)
- After Phase 2 completion (document automation systems)
```

---

**DOCUMENT LOCATION:**
`/Volumes/Teja MAC Home Folder/Mac Home/Documents/1 Projects/DMG-LOCAL-SEO/Marketing By Machine/manual-outreach-implementation.md`

**Document Owner:** Teja Bongu
**Email:** teja@digitalmarketinggenius.com.au
**Status:** Active - Being implemented live

**LAST UPDATED:** November 2025
**NEXT REVIEW:** After Phase 1 completion
**STATUS:** Ready for implementation ✅
