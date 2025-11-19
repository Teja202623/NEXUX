# PHASE 1: MVP EXECUTION PLAN
**4 Weeks to 10 Customers ($2,000 MRR)**

---

## PHASE 1 OVERVIEW

**Duration:** 4 weeks (Days 1-28)
**Total Time:** ~50 hours
**Goal:** 10 paying customers at $200/month
**Approach:** Manual outreach, zero automation

---

## DAYS 1-5: SETUP (10 hours)

### DAY 1: PROSPECT RESEARCH (3 hours)

**Goal:** Find 20-30 best plumbers in Werribee to contact

**Morning (9am-12pm):**
```
[ ] 9:00am: Create Google Sheet "Werribee Plumbers - Prospects"

    Columns:
    1. Business Name
    2. Owner Name
    3. Phone
    4. Email
    5. Website
    6. Google Rank
    7. Review Count
    8. Rating
    9. Notes
    10. Status (New/Contacted/Called/Customer)

[ ] 9:15am: Google Maps research - "plumber werribee"

    Find top 20-30 results with:
    - 30+ reviews (sign of active business)
    - 4.5+ rating (good service)
    - Recently active (reviews in last 30 days)

    For each, record:
    - Business name
    - Owner name (from GMB)
    - Phone number
    - Email (search website)
    - Website
    - Current Google ranking
    - Review count + rating

[ ] 11:30am: Verify contact info
    - Try to find email on website
    - If no email, use phone + will get email on first call
    - Create priority ranking (best 10 to call first)
```

**Afternoon (12pm-1pm):**
```
Review your list:
- [ ] 20-30 prospects captured
- [ ] All have phone numbers
- [ ] All have emails (or will get from first call)
- [ ] Ranked by quality
```

**TIME: 3 hours**

---

### DAY 2: EMAIL & SENDGRID SETUP (2 hours)

**Goal:** Email infrastructure ready to send first emails

**Morning (9am-11am):**
```
[ ] 9:00am: Set up SendGrid account
    - Go to sendgrid.com
    - Create free account (start with free tier)
    - Verify email
    - Generate API key

[ ] 9:15am: Configure sending domain

    Option A: Use existing domain
    - Go to SendGrid dashboard
    - Add domain: outreach.yourdomain.com.au
    - Set up SPF record (SendGrid provides)
    - Set up DKIM record (SendGrid provides)
    - Verify in SendGrid

    Option B: Buy new domain
    - Go to GoDaddy.com
    - Buy: outreach-plumbing.com.au (~$15/yr)
    - Add nameservers in SendGrid
    - Configure SPF/DKIM
    - Verify

[ ] 9:45am: Add API key to .env file

    In /backend/.env:
    SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

[ ] 10:00am: Test email sending
    - Use SendGrid test (send to yourself)
    - Verify it arrives
    - Check spam folder too
```

**TIME: 2 hours**

---

### DAY 3: CREATE EMAIL TEMPLATES (2 hours)

**Goal:** 3 proven email templates ready to send

**Morning (9am-11am):**

```
Create 3 simple email templates (NOT fancy, personalized):

TEMPLATE 1: "Your Visibility Gap" (Cold outreach)
---
Subject: Plumber in [Suburb] missing out on calls

Hi [Name],

Quick observation: I noticed you're ranking #[X] for "plumber [suburb]"
on Google, but you only service [Y] suburbs.

I help plumbers like you show up in the suburbs where people are
actively searching. Most plumbers we work with add 2-4 additional
suburbs to their service area without any extra effort.

Worth a 15-min call to see if it could work for you?

[Your name]
---

TEMPLATE 2: "Your Review Strategy" (Specific gap)
---
Subject: [Name] - your reviews opportunity

Hi [Name],

Your Google Business Profile is solid (45 reviews), but you're
missing a huge opportunity: service area reviews.

Plumbers in competing suburbs have reviews that mention specific
suburbs ("Fixed our tap in Hoppers Crossing"). This helps them show
up in MORE searches.

I help trade business get their customers to leave location-specific
reviews. Worth a quick chat?

[Your name]
---

TEMPLATE 3: "Competitor Analysis" (Social proof)
---
Subject: How [Competitor Name] is beating you in Werribee

Hi [Name],

I was analyzing plumbers in Werribee and noticed something interesting.

[Competitor Name] is ranking ahead of you in [Suburb], and they're doing
these 3 things you're not:
1. Service area optimization
2. Recent review generation
3. Better Google Business profile

I've helped similar plumbers match and beat competitors. Worth a call
to discuss?

[Your name]
---

[ ] 10:00am: Save all 3 templates to a document
    File: /Phase-1-Email-Templates.md

[ ] 10:15am: Plan which template for each prospect
    - Top 10: Use "Visibility Gap" (general, works for all)
    - Middle 10: Use "Review Strategy" (if they have <50 reviews)
    - Bottom 10: Use "Competitor Analysis" (if competitor is stronger)
```

**TIME: 2 hours**

---

### DAY 4: SALES SCRIPTS & TRACKING (2 hours)

**Goal:** Phone script + discovery questions + tracking system ready

**Morning (9am-11am):**

```
[ ] 9:00am: Write Discovery Call Script

OPENING (first 30 seconds):
"Hi [Name], this is [Your name] from Digital Marketing Genius.
I sent you an email earlier about plumber rankings.
Do you have 15 minutes to chat?"

[If yes, continue. If no, ask for better time.]

DISCOVERY (2-3 minutes):
"Great. So I was looking at your Google presence and have a couple
quick questions:

1. How many new customers are you getting per week from Google search?
2. Are you servicing suburbs beyond [current], or would you like to?
3. What's your biggest challenge in getting new customers right now?"

[Listen. Take notes.]

PAIN IDENTIFICATION (1-2 minutes):
"So it sounds like [repeat their challenge].
We actually work with plumbers to solve exactly that.
We help you show up in more suburbs on Google without extra effort."

CLOSE ATTEMPT (1 minute):
"Here's what I'm thinking. I'd like to do a quick analysis of your
Google presence and show you exactly which suburbs you could be ranking in.
It's free, no obligation.

Could we do a 20-minute call on [tomorrow or Friday]?
I'll show you the data and we can take it from there."

[Get yes/no]

IF NO: "No problem. If things change or you want to explore this later,
just reach out. Take care!"

---

[ ] 9:30am: Write Objection Responses

Objection 1: "I'm too busy right now"
Response: "Totally get it. This is exactly why I call - it's 15 minutes
and could add 2-3 extra customers per month. Worth the time?"

Objection 2: "I already have enough customers"
Response: "That's great you're busy. Most of our best clients said the
same thing. But are they profitable? Are you turning work away?
Can I just show you the data?"

Objection 3: "We tried this before, didn't work"
Response: "I hear that a lot. What specifically didn't work?
[Listen] That's what we do differently - we focus on [specific thing]."

Objection 4: "How much does it cost?"
Response: "First, let me show you what's actually possible.
It's $200/month and we usually see results in 30 days.
But let's talk about your situation first."

---

[ ] 10:00am: Create Tracking Sheet

Google Sheet: "Phase 1 - Outreach Tracking"

Columns:
1. Date
2. Prospect Name
3. Prospect Phone
4. Activity (Email sent / Call made / Meeting / Close)
5. Outcome (Replied / Not replied / Interested / Not interested / Customer)
6. Next Step (Date & action)
7. Notes

Example row:
| 2025-11-18 | Werribee Emergency Plumbing | 03 97XX XXXX | Email sent | - | Follow up in 3 days | Sent "Visibility Gap" template |

[ ] 10:30am: Print scripts
    - Print discovery script (keep by phone)
    - Print objection responses (reference)
    - Print opening line (practice 5x)
```

**TIME: 2 hours**

---

### DAY 5: FIRST 5 EMAILS (1 hour)

**Goal:** First batch of emails sent, measurement starts

**Morning (9am-10am):**

```
[ ] 9:00am: Send 5 personalized emails

Pick your top 5 prospects from Day 1 research.
For each, write PERSONALIZED version of Template 1:

Example:
Subject: You're missing out on Hoppers Crossing calls

Hi John,

Quick observation: I noticed you're ranking #2 for "plumber werribee"
but I only see Werribee and Hoppers Crossing in your service areas.

I help plumbers like you expand to additional suburbs -
Tarneit, Point Cook, Caroline Springs - without extra effort.

Most plumbers we work with add 2-4 suburbs and see an extra
2-3 calls per week.

Worth a 15-min call?

[Your name]

---

[ ] 9:30am: Note exact time sent + prospect details
    - Update tracking sheet with send time
    - Watch for first reply (could be within 1 hour)
    - Note reply time when it arrives

[ ] 10:00am: DONE
    - 5 emails sent
    - You're officially live
    - Day 5 complete
```

**TIME: 1 hour**

---

## DAYS 6-28: EXECUTION (40 hours)

### WEEK 1: LEARN PHASE (12 hours)

**Goal:** Make first sales, understand what works/doesn't

```
Daily Routine (Mon-Fri, 9am-5pm):

MORNING (9am-1pm): 4 hours
[ ] Send 4-5 new emails (personalized, use templates)
[ ] Check for replies to previous emails
[ ] Note which template got response (if any)
[ ] Follow up with interested prospects

AFTERNOON (1pm-5pm): 4 hours
[ ] Make 1-2 discovery calls (from callbacks)
[ ] Take detailed notes on each call
[ ] Try closing ("Want to do 30-day trial?")
[ ] Note: What worked in script? What didn't?
[ ] Update tracking sheet

END OF DAY:
[ ] Update tracking sheet with all activity
[ ] Note: Any patterns emerging?
[ ] Any emails working better than others?
[ ] Any objections coming up repeatedly?
```

**Week 1 Targets:**
- 20 emails sent (accumulate from Day 5 + Week 1)
- 2-3 callbacks
- 5-8 calls made
- 1-2 closes (customers #1-2)
- Know which email template works best

**Week 1 Success Metric:** 1-2 paying customers

---

### WEEK 2: REFINE PHASE (12 hours)

**Goal:** Use winning formula, scale up

```
WHAT CHANGED FROM WEEK 1:
- [ ] Only use the email template that worked
- [ ] Stop experimenting with scripts
- [ ] Only use the close that worked
- [ ] Build on Week 1 learnings
- [ ] Update case study: What did Customer #1 see?

Daily Routine (same, but focused):

MORNING (9am-1pm): 4 hours
[ ] Send 4-5 emails (ONLY winning template)
[ ] Check for callbacks
[ ] Personalize each email (but use same structure)

AFTERNOON (1pm-5pm): 4 hours
[ ] Make 2-3 calls (more calls than Week 1)
[ ] Use refined script
[ ] Take notes on what's working
[ ] Close 1-2 more customers
```

**Week 2 Targets:**
- 20 emails sent (total: 40 sent by end of Week 2)
- 3-4 callbacks
- 8-10 calls made
- Close 2-3 more (customers #3-5)
- Have case study from Customer #1

**Week 2 Success Metric:** 3-5 paying customers total

---

### WEEKS 3-4: SCALE PHASE (16 hours)

**Goal:** Repeat winning formula to reach 10

```
WHAT STAYS THE SAME:
- Use winning email template
- Use winning script
- Follow same routine
- Keep detailed notes

WHAT CHANGES:
- Possibly increase emails (if replies slow down)
- Track which prospects convert best (profile)
- Refine based on customer feedback

Daily Routine (same as Week 2):

MORNING (9am-1pm): 4 hours per day
[ ] Send 4-5 emails (winning template)
[ ] Personalize for each prospect
[ ] Check for callbacks

AFTERNOON (1pm-5pm): 4 hours per day
[ ] Make 2-3 calls
[ ] Close 1-2 more customers
[ ] Get feedback from recent closes
```

**Week 3-4 Targets:**
- 30-40 emails sent (total: 70-80 sent)
- Make 16-20 calls
- Close 4-5 more (customers #6-10)
- Reach 10 customers = $2,000 MRR ✓

**Week 3-4 Success Metric:** 7-10 paying customers

---

## DAILY CHECKLIST (Weeks 1-4)

**Every day, 9am-5pm:**

Morning (9am-1pm):
- [ ] Send 4-5 personalized emails (use winning template)
- [ ] Check email for replies
- [ ] Check phone for missed calls
- [ ] Note any new callbacks in tracking sheet
- [ ] Log all activity

Afternoon (1pm-5pm):
- [ ] Make 1-3 discovery calls
- [ ] Take detailed notes (pain points, budget, timeline)
- [ ] Attempt close ("Want to try 30 days free?")
- [ ] Log outcome in tracking sheet
- [ ] Update contact with next steps if not ready

End of Day:
- [ ] Update tracking sheet
- [ ] Note patterns (which emails working? which scripts?)
- [ ] Plan next day activity

---

## TRACKING METRICS (Daily)

Monitor these numbers:

```
EMAILS:
- Total sent: ___
- Replies received: ___
- Reply rate: __% (replies / sent)

CALLS:
- Calls made: ___
- Calls booked: ___
- Show rate: __% (showed up / booked)

CLOSES:
- Meetings held: ___
- Close attempts: ___
- Customers acquired: ___
- Close rate: __% (close / attempt)

PIPELINE:
- Total prospects contacted: ___
- In conversation: ___
- Ready to close: ___
- Active customers: ___
```

---

## WEEK 4 END: DOCUMENTATION (4 hours)

**Goal:** Capture everything that worked for Phase 2

### What to Document

**1. Winning Email Template**
- Which template generated most replies?
- Why did it work?
- Save exact copy + variations

**2. Winning Phone Script**
- Which opening worked best?
- Which discovery questions generated pain?
- Which close worked most?
- Save exact script + objection responses

**3. Customer Avatar**
- Who converted? (business size, location, reviews, revenue)
- Who didn't convert? (profile of noes)
- What problem motivated them?
- How much were they willing to pay?

**4. Case Studies** (2-3 examples)

For each customer, capture:
- Business name + owner
- What they were doing before
- Main problem they had
- What you did for them
- Results (leads/month, rankings, reviews)
- Quote from them

Example:
```
CASE STUDY: Werribee Emergency Plumbing

Business: Werribee Emergency Plumbing
Owner: John Smith
Contact: 03 97XX XXXX

Before:
- Ranking #3 in Werribee
- Only servicing Werribee
- Getting 5-7 calls/week from Google
- Wanted to expand geographically

Our Solution:
- Optimized service areas on Google My Business
- Added Hoppers Crossing, Tarneit, Point Cook
- Generated 10 new location-specific reviews

Results:
- Now ranking #1-2 in 4 suburbs
- Getting 12-15 calls/week (3x increase)
- Estimated extra $3,000/month revenue
- Signed up for $200/month, after 30-day trial

Quote: "Best decision I made for my business.
More calls than I can handle now." - John Smith
```

**5. Success Metrics Document**
- How many emails sent vs customers acquired?
- What was close rate?
- Average sales cycle (email to close)?
- Which suburbs converted best?
- Which email template worked?
- Which script worked?
- Cost per customer (email credits)?

---

## COMMON ISSUES & SOLUTIONS

**Problem: No replies to emails**
- Solution: Template might be wrong. Try Template 2 or 3 with next batch.
- Or: Email domain not set up right. Check SendGrid setup.

**Problem: Getting calls but not closing**
- Solution: Script might need tweak. What are they saying no to?
- Try offering 30-day free trial instead of paid.
- Try asking what their budget is.

**Problem: Calls aren't picking up**
- Solution: Email them first, say you'll call at [specific time].
- Call when they're likely to answer (not 9am on Monday = staff busy).
- Try calling at 3pm (slow time for plumbers).

**Problem: Slow progress first 2 weeks**
- Solution: This is normal. First customer is hardest.
- Once you get #2-3, momentum builds.
- Don't panic. Stay the course.

---

## PHASE 1 SUCCESS CRITERIA

**You succeed if:**
✅ You send 70-100 emails
✅ You make 30-40 calls
✅ You close 7-10 customers
✅ You reach $1,400-2,000 MRR
✅ You document what works
✅ You have 2-3 case studies
✅ You have confidence to move to Phase 2

**You're ready for Phase 2 when:**
✅ You have 5+ paying customers (proof it works)
✅ You can repeat the sales process (playbook documented)
✅ You have case studies (proof for new prospects)
✅ You know: winning email, winning script, customer profile

---

## Phase 1 → Phase 2 Transition

**Week 5 (after Phase 1 completes):**

Instead of building automation immediately, do this:

```
[ ] Review all tracking data (what really worked?)
[ ] Extract winning email + script
[ ] Write customer avatar description
[ ] Get testimonials from customers #1-3
[ ] Create 2-3 case studies
[ ] Calculate: emails→calls→closes conversion rates
[ ] Identify: which prospects were easiest to close?
[ ] Plan: which suburbs to target in Phase 2?
```

Then, start Phase 2 with confidence.

---

## Summary

**4 weeks. 50 hours. 10 customers. $2,000 MRR.**

That's it for Phase 1.

No complexity. No automation. No perfect system.

Just you, email templates, phone script, and hustle.

Then in Phase 2, you automate what works.

**Phase 1 mindset:** Get to 10 customers however you can.
**Phase 2 mindset:** Build systems to scale beyond 10.

Go get those 10 customers.
