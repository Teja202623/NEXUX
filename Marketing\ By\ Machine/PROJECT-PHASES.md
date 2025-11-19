# Marketing By Machine: 3-Phase Project Structure

**Goal:** Acquire 100+ customers at $200/month ($20,000+ MRR) in 6 months

**Approach:** MVP First (Phase 1) → Automation (Phase 2) → Scale with Team (Phase 3)

---

## PHASE 1: MVP - MANUAL OUTREACH (Weeks 1-4, ~50 hours)

**Goal:** Validate product-market fit + reach 10 customers ($2,000 MRR)

**Status:** Ready to start

### Phase 1 Objectives

✅ **Prove the business works** (3-5 paying customers minimum)
✅ **Document what works** (winning email, winning script, customer profile)
✅ **Build confidence** (you can sell this, plumbers want it)
✅ **Create case studies** (use to sell to customers 4-10)

### What's Included in Phase 1

#### Setup (Days 1-5): 10 hours

**Day 1: Prospect Research (3 hours)**
- Find 20-30 Tier-1 plumbers in Werribee only
- Google Maps search: "plumber werribee"
- Criteria: 30+ reviews, 4.5+ rating, actively getting jobs
- Collect: Name, owner, phone, email, website
- Create simple Google Sheet

**Day 2: Email Setup (2 hours)**
- Create SendGrid account
- Buy/configure domain (or use existing)
- Create 3 email templates (personalized outreach)
- Add SENDGRID_API_KEY to .env

**Day 3: Sales Tools (2 hours)**
- Write discovery call script (understand pain + budget)
- Write close script (remove objections, ask for yes)
- Create tracking Google Sheet (Name | Email | Phone | Status | Notes)
- Create simple database (Prospect table + Customer table only)

**Day 4: Infrastructure Test (2 hours)**
- Test SendGrid (send yourself email)
- Practice phone script (read 5 times)
- Verify prospect contact info
- Ready to start outreach

**Day 5: First 5 Emails (1 hour)**
- Send 5 personalized emails
- Measure response time
- Update tracking sheet
- Begin conversation loop

#### Execution (Weeks 1-4): 40 hours

**Week 1: Learn Phase (12 hours)**
- [ ] Send 20 emails (4-5 per day, personalized)
- [ ] Get 1-2 callbacks
- [ ] Make 5-8 discovery calls
- [ ] Close 1-2 customers (offer 30-day free trial to reduce risk)
- [ ] Document what works + what doesn't

**Week 2: Refine Phase (12 hours)**
- [ ] Stop testing email templates (use winner from Week 1)
- [ ] Stop experimenting with script (use winner)
- [ ] Send 20 more emails (same winning template)
- [ ] Make 8-10 calls
- [ ] Close 2-3 more customers
- [ ] Update case study with results from customer #1

**Week 3-4: Scale Phase (10 hours)**
- [ ] Execute same playbook
- [ ] Send 15-20 more emails
- [ ] Make 8-10 calls
- [ ] Close 2-3 more customers
- [ ] Reach 7-10 total customers
- [ ] Have 2-3 case studies ready

**Week 4 End: Validation Complete**
- Document everything: winning email, winning script, customer profile
- Create case study template (results from first 3 customers)
- Know exactly what works and what doesn't

### Phase 1 Deliverables

✅ **10 customers at $200/month = $2,000 MRR**

✅ **Proof of concept**
- Sales playbook documented
- Winning email template
- Winning phone script
- Customer avatar defined

✅ **Case studies** (2-3 customers, showing:)
- What they were doing before
- What problem they had
- How you solved it
- Results (leads/month, ranking improvement)
- Testimonial/quote

✅ **Simple tracking system**
- Google Sheet: prospects + status
- Simple database: Prospect + Customer tables
- Email logs in SendGrid

### Phase 1 Tools & Costs

| Item | Cost | Purpose |
|------|------|---------|
| SendGrid | $20/mo | Email sending |
| Domain (optional) | $15/yr | Branded sender |
| Canva Pro | $0 | Already have |
| Database | $0 | Use localrankai |
| **Total** | **$20/mo** | **Minimal** |

### Phase 1 Success Metrics

| Metric | Target | Realistic |
|--------|--------|-----------|
| Customers acquired | 10 | 7-10 |
| MRR | $2,000 | $1,400-2,000 |
| Email reply rate | 10-15% | 5-8% |
| Call-to-close rate | 30-50% | 20-30% |
| Average sales cycle | 3 days | 3-5 days |
| Time to first customer | 7-10 days | 7-14 days |
| Time to 10 customers | 30 days | 28-35 days |

### Phase 1 Exit Criteria (When to Move to Phase 2)

✅ You have 5+ paying customers (proof it works)
✅ You can repeat the process (playbook documented)
✅ You have case studies (proof for sales)
✅ You know what works (winning formula)
✅ You're ready to automate (not just manually repeat)

**Minimum:** Hit this after Week 4

---

## PHASE 2: AUTOMATION - SYSTEMS & SCALE (Weeks 5-12, ~40 hours)

**Goal:** Reach 25 customers ($5,000 MRR) using automation

**Status:** Starts after Phase 1 validation

### Phase 2 Objectives

✅ **Build scalable systems** (don't repeat manual work)
✅ **Automate content** (600+ posts/month from prospect analysis)
✅ **Grow social presence** (8,000+ followers)
✅ **Reach 25 customers** (2.5x Phase 1)

### What's Different in Phase 2

**You now have:**
- Winning email template (proven to work)
- Winning phone script (proven to work)
- Case studies (3-5 customers with results)
- Confidence (you can sell this)

**You can now build:**
- Email automation (sequences that use winning template)
- Content generation (turn prospect analysis into 6 content pieces)
- Social media posting (automatic)
- Full CRM (track everything)

### Phase 2 Breakdown

#### Week 5-6: Build Core Systems (15 hours)

**Week 5 (8 hours):**
- [ ] Add 6 CRM tables to database (Prospect, OutreachActivity, SocialContent, ScheduledPost, ContentAnalytics, Customer)
- [ ] Run Prisma migration
- [ ] Seed database with all 50-75 prospects from research
- [ ] Verify in Prisma Studio

**Week 6 (7 hours):**
- [ ] Create content-gen CLI command (reads prospect → generates 6 content pieces)
- [ ] Create content-approve CLI command (interactive review)
- [ ] Test on 1 prospect
- [ ] Output markdown file
- [ ] Save to SocialContent table

#### Week 7-8: Graphics & Scheduling (15 hours)

**Week 7 (8 hours):**
- [ ] Get Canva API token
- [ ] Create 5 Canva templates
- [ ] Create graphics-gen CLI command (Canva API integration)
- [ ] Test image generation
- [ ] Store image URLs in database

**Week 8 (7 hours):**
- [ ] Create schedule-content CLI command
- [ ] Set up posting schedule (optimal times per platform)
- [ ] Create ScheduledPost records
- [ ] Set up automated posting (cron job or scheduler)
- [ ] Test with 5-10 posts

#### Week 9-10: Social & Email Automation (10 hours)

**Week 9 (5 hours):**
- [ ] Set up platform integrations:
  - LinkedIn API
  - Facebook API
  - Instagram API
  - YouTube API
  - TikTok (manual or Zapier)
- [ ] Test posting to each platform
- [ ] Verify analytics sync

**Week 10 (5 hours):**
- [ ] Create email sequence CLI
- [ ] Set up nurture sequence (for prospects who aren't ready)
- [ ] Create follow-up sequence
- [ ] Automate the winning email template
- [ ] Test with 5 prospects

#### Week 11-12: Dashboard & Optimization (10 hours)

**Week 11 (5 hours):**
- [ ] Build basic dashboard (React component)
- [ ] Show pipeline view (prospects by status)
- [ ] Show customer list
- [ ] Show social analytics
- [ ] Show email performance

**Week 12 (5 hours):**
- [ ] Continue Phase 1 outreach (parallel)
- [ ] Use automation to support sales
- [ ] Optimize based on metrics
- [ ] Reach 25 customers goal
- [ ] Document Phase 2 learnings

### Phase 2 Deliverables

✅ **25 customers at $200/month = $5,000 MRR**

✅ **Complete CRM system**
- 6 database tables
- Prospect tracking
- Outreach history
- Customer management

✅ **Content automation**
- CLI tool for content generation
- Content approval workflow (human-in-loop)
- 600+ social posts/month
- Graphics generated via Canva
- Automatic scheduling

✅ **Social media growth**
- 8,000-10,000 followers
- 4-6 posts per day across platforms
- Automated analytics tracking

✅ **Email automation**
- Email sequences
- Follow-up workflows
- Nurture campaigns

✅ **Basic dashboard**
- Pipeline visibility
- Customer metrics
- Social performance

### Phase 2 Tools & Costs

| Item | Cost | Purpose |
|------|------|---------|
| SendGrid | $20/mo | Automation |
| Canva Pro | $0 | Graphics |
| Platform APIs | $0 | Free tier |
| Database | $0 | Extended |
| **Total** | **$20/mo** | **Same** |

### Phase 2 Success Metrics

| Metric | Target |
|--------|--------|
| Customers | 25 |
| MRR | $5,000 |
| Social followers | 8,000+ |
| Daily posts | 4-6 |
| Email sequences | 3 active |
| Close rate | 40-50% |

---

## PHASE 3: SCALE WITH TEAM (Weeks 13+, ongoing)

**Goal:** Reach 100+ customers ($20,000+ MRR)

**Status:** Starts after Phase 2 success

### Phase 3 Objectives

✅ **Hire team** (VA for outreach, Closer for sales)
✅ **Scale outreach** (100+ prospects/month)
✅ **Expand to more niches** (electrical, locksmith, HVAC)
✅ **Reach 100+ customers** ($20,000+ MRR)

### Phase 3 Structure

#### Weeks 13-16: Hire & Train VA

**Who:** Virtual Assistant for email outreach
- **Role:** Send 20-30 personalized emails/day
- **Cost:** $500-800/month
- **Training:** 2 hours (your winning template + script)

**Outcome:**
- 100-150 emails/week (vs your 20)
- More prospects contacted = more calls booked

#### Weeks 17-20: Hire & Train Closer

**Who:** Sales Closer for phone calls
- **Role:** Make discovery calls, close deals
- **Cost:** $1,000-1,500/month (or 20% commission)
- **Training:** 4 hours (your winning script + objection handling)

**Outcome:**
- 30-40 calls/week (vs your 8-10)
- Better close rate (experienced sales person)
- You focus on business only

#### Week 21+: Expand to More Niches

**Week 1 Strategy:** 1 niche (Plumbing) in 1 location (Werribee)
**Phase 2 Strategy:** Same niche, expand to more suburbs
**Phase 3 Strategy:** Add new niches (Electrical, Locksmith, HVAC)

**Each new niche:**
- Research best 30 prospects
- VA sends emails (using proven template)
- Closer makes calls (using proven script)
- Less work = more customers

### Phase 3 Deliverables

✅ **100+ customers at $200/month = $20,000+ MRR**

✅ **Team structure**
- You (business owner + strategy)
- VA (outreach)
- Closer (sales)
- Optional: Content manager

✅ **Multi-niche presence**
- Plumbing (3-4 suburbs)
- Electrical (2-3 suburbs)
- Locksmith (1-2 suburbs)
- HVAC (1-2 suburbs)

✅ **Advanced automation**
- Customer success platform
- Automated reporting
- Advanced analytics
- Customer portal

### Phase 3 Tools & Costs

| Item | Cost | Purpose |
|------|------|---------|
| SendGrid | $20/mo | Email |
| Canva Pro | $0 | Graphics |
| Database | $0 | Extended |
| VA salary | $500-800/mo | Outreach |
| Closer salary | $1,000-1,500/mo | Sales |
| **Total** | **$1,520-2,320/mo** | **Still low** |

---

## 3-PHASE COMPARISON

| Metric | Phase 1 | Phase 2 | Phase 3 |
|--------|--------|--------|---------|
| **Duration** | 4 weeks | 8 weeks | 12+ weeks |
| **Customers** | 10 | 25 | 100+ |
| **MRR** | $2,000 | $5,000 | $20,000+ |
| **Your Time** | 50 hrs | 40 hrs/week | 20 hrs/week |
| **Team Size** | 1 (you) | 1 (you) | 3 (you + VA + Closer) |
| **Tools** | SendGrid | SendGrid + CLI | SendGrid + Dashboard |
| **Costs** | $20/mo | $20/mo | $1,520-2,320/mo |
| **Focus** | Sales | Automation | Leadership |
| **Key Win** | PMF validated | Systems built | Team scaling |

---

## TIMELINE TO $20,000 MRR

```
MONTH 1 (Phase 1 - MVP)
├─ Days 1-5: Setup (10 hours)
├─ Weeks 1-4: Execution (40 hours)
└─ Result: 10 customers, $2,000 MRR ✓

MONTH 2 (Phase 2A - Build Systems)
├─ Weeks 5-6: CRM database + content-gen
├─ Weeks 7-8: Graphics + scheduling
└─ Result: 15-20 customers by end

MONTH 3 (Phase 2B - Automation)
├─ Weeks 9-10: Social + email automation
├─ Weeks 11-12: Dashboard + optimize
└─ Result: 25 customers, $5,000 MRR ✓

MONTHS 4-6 (Phase 3 - Scale with Team)
├─ Weeks 13-16: Hire VA (outreach)
├─ Weeks 17-20: Hire Closer (sales)
├─ Weeks 21+: Expand niches
└─ Result: 100+ customers, $20,000+ MRR ✓
```

---

## NEXT STEPS

### Immediately (Before Phase 1 Starts)

Confirm:
1. ✅ Do you accept Phase 1 as MVP approach? (10 hours setup + 40 hours execution = 50 hours total)
2. ✅ Do you have access to: SendGrid account, domain, database?
3. ✅ Are you ready to start with Werribee plumbers only (not 50-75 prospects across suburbs)?
4. ✅ Can you commit 10-12 hours/week for 4 weeks in Phase 1?

### Phase 1 Start (Day 1)

1. Find 20-30 Tier-1 plumbers in Werribee (3 hours)
2. Set up SendGrid (2 hours)
3. Write 3 email templates (2 hours)
4. Write sales script (2 hours)
5. Send first 5 emails (1 hour)
6. Begin outreach loop

### Phase 1 Success (Week 4)

- Have 7-10 paying customers
- Know exactly what works
- Have case studies ready
- Ready to move to Phase 2 automation

### Phase 2 Start (Week 5)

Build systems with confidence (you know it works)

### Phase 3 Start (Week 13)

Hire team and scale

---

## Why This Structure Works

**Phase 1:** Proves business works (no waste on automation if PMF is wrong)
**Phase 2:** Builds foundation (automation only happens after validation)
**Phase 3:** Scales efficiently (team handles volume)

This is how real startups grow: Sell first, build systems second, scale with team third.

**You're not building a perfect system. You're building a working business.**

---

## One Critical Thing

**During Phase 1, when you get busy and want to "just automate this":**

**Don't.**

Stay manual. Stay scrappy. Learn what really works. Then automate it in Phase 2 with confidence.

The biggest mistake is automating the wrong thing.
