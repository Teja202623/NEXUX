# WEEK 1: ACTION CHECKLIST
**Your step-by-step guide for this week**

**Status:** LIVE RIGHT NOW
**Week:** Monday-Sunday (7 days)
**Goal:** Launch Phase 1 emails + Complete Phase 2 database setup + Research 340 prospects

---

## ✅ COMPLETED (Do This Today)

### Phase 2: Database Setup
- [x] Added 5 Prisma models to schema.prisma
- [x] Ran migration: `npx prisma migrate dev --name add_phase2_content_models`
- [x] Database verified in sync

**Status:** 🟢 DONE - 5 new tables live in your database

---

## 📋 WEEK 1 TASKS (This Week)

### PHASE 1: COLD EMAIL (12-15 hours this week)

#### TODAY (Day 5): Send First Batch
- [ ] Open PHASE-1-PERSONALIZED-EMAILS.md
- [ ] Review Danzer's email as template
- [ ] Decide: Send 5, 10, or 25 emails?
- [ ] Personalize emails using PHASE-1-EMAIL-TEMPLATES.md
- [ ] Open SendGrid dashboard
- [ ] Send first batch
- [ ] Track in spreadsheet:
  - Column A: Prospect name
  - Column B: Email sent (date/time)
  - Column C: Template used
  - Column D: Reply received (Y/N)
  - Column E: Call made (Y/N)
  - Column F: Notes

**Recommendation:** Start with 10 emails
- Enough to test approach
- Manageable to follow up on
- Good feedback loop

#### Monday-Friday: Continue Cold Email
- [ ] Send 3-5 emails per day (Mon-Fri = 15-25 total Week 1)
- [ ] Check email replies twice daily:
  - 9:00am (before work)
  - 6:00pm (after work)
- [ ] Reply quickly to any replies
- [ ] Schedule calls with interested prospects
- [ ] Track everything in spreadsheet

#### Target by Friday:
- [ ] 15-25 emails sent
- [ ] 1-2 replies received
- [ ] 1-3 discovery calls scheduled
- [ ] 0-1 customers (best case)

---

### PHASE 2: PROSPECT RESEARCH (8-10 hours this week)

#### Setup (30 mins - Today)
- [ ] Create Google Sheet or Excel spreadsheet
- [ ] Add column headers (from WEEK-1-PROSPECT-RESEARCH.md)
- [ ] Title: "Prospect Database - 340"

#### Monday-Tuesday (2-3 hours): Plumbers
- [ ] Copy 25 existing plumbers from PHASE-1-PROSPECT-LIST.md
- [ ] Add 95 new plumbers:
  - Google Maps: "plumber werribee"
  - Filter: 30+ reviews, 4.5+ rating
  - Extract: name, email, phone, website, reviews, rating
  - Run grid analysis (your tool) for each
- [ ] Total plumbers: 120
- [ ] Time: 2-3 hours

#### Wednesday-Thursday (2-3 hours): Electricians + Locksmiths
- [ ] Research 100 electricians:
  - Google Maps: "electrician werribee"
  - Filter & extract data
  - Run grid analysis
  - Time: 1.5-2 hours
- [ ] Research 60 locksmiths:
  - Google Maps: "locksmith werribee"
  - Filter & extract data
  - Run grid analysis
  - Time: 1-1.5 hours

#### Friday (2 hours): HVAC + Export
- [ ] Research 60 HVAC:
  - Google Maps: "hvac werribee"
  - Filter & extract data
  - Run grid analysis
  - Time: 1-1.5 hours
- [ ] Quality check all 340:
  - No duplicates
  - All required fields filled
  - Valid email/phone
  - Time: 30 mins
- [ ] Export to CSV: `prospects.csv`

#### Target by Friday:
- [ ] 340 prospects researched and entered
- [ ] All grid analysis complete
- [ ] CSV file created
- [ ] Ready for database seeding Week 2

---

## 📅 DAILY SCHEDULE

### Morning Routine (7am-9am): 1 hour
```
8:00-8:30am: Send 3-5 personalized emails
8:30-9:00am: Check email replies from yesterday
```

### Lunch Routine (12pm-1pm): 30 mins
```
12:00-12:30pm: Check email again, note any new replies
```

### Evening Routine (6pm-11pm): 4-5 hours

**Monday-Thursday Evening:**
```
6:00-7:00pm: Make 1-2 discovery calls (follow up on email replies)
7:00-11pm: Prospect research (4 hours)
```

**Friday Evening:**
```
6:00-7:00pm: Make any final calls
7:00-9pm: Quality check CSV + export
9pm-11pm: Review & organize data
```

---

## 🎯 DAILY TARGETS

### Monday
- [ ] Send 5 emails (Day 5 started)
- [ ] Research 25 plumbers (add to existing 25)
- [ ] **By EOD: 5 emails sent, 50 prospects researched**

### Tuesday
- [ ] Send 5 emails (total: 10)
- [ ] Research 70 plumbers (total: 120)
- [ ] **By EOD: 10 emails sent, 120 plumbers done**

### Wednesday
- [ ] Send 5 emails (total: 15)
- [ ] Research 50 electricians
- [ ] **By EOD: 15 emails sent, 50 electricians done**

### Thursday
- [ ] Send 5 emails (total: 20)
- [ ] Research 50 more electricians + 30 locksmiths
- [ ] **By EOD: 20 emails sent, 140 non-plumber prospects**

### Friday
- [ ] Send 3-5 emails (total: 23-25)
- [ ] Research 30 more locksmiths + 60 HVAC
- [ ] Export CSV + quality check
- [ ] **By EOD: 25 emails sent, 340 prospects complete**

---

## 📊 SPREADSHEET HEADERS

Create Google Sheet with these columns:

```
A: name
B: trade
C: email
D: phone
E: website
F: google_rank
G: review_count
H: rating
I: gridHealth
J: criticalGaps
K: highPriority
L: defendingAreas
M: topCompetitor
N: competitorHealth
O: revenueImpact
P: primarySuburb
Q: suburbs
```

**Total: 17 columns**

---

## 🔄 PHASE 1 & PHASE 2 PARALLEL

**Don't let one distract from the other:**

- **Morning:** Phase 1 emails only (1-2 hours)
- **Day job:** Your regular work
- **Evening:** Phase 1 calls (1 hour) + Phase 2 research (3-4 hours)

This way you're making progress on both.

---

## 📞 DISCOVERY CALL QUICK TIPS

When someone replies to your email:

1. **Reply immediately** (within 1 hour if possible)
2. **Suggest call time:** "Can we hop on a quick call Thursday at 3pm?"
3. **Get on call** (use Zoom, Teams, or just phone)
4. **Use PHASE-1-DISCOVERY-SCRIPT.md** - have it open during call
5. **Take notes** - name, pain point, next steps
6. **Send analysis** - follow up with their grid analysis data
7. **Schedule next call** - "Let me send this over, we'll chat Friday?"

---

## 💾 EXPORT CSV FOR WEEK 2

Once you've finished research Friday:

**In Google Sheets:**
1. File → Download → CSV
2. Save as: `prospects.csv`
3. Move to: `/backend/prisma/prospects.csv`

**Format check:**
```
name,trade,email,phone,website,google_rank,review_count,rating,gridHealth,criticalGaps,highPriority,defendingAreas,topCompetitor,competitorHealth,revenueImpact,primarySuburb,suburbs
Danzer's Plumbing,plumber,daniel@email.com,0401 496 570,...
...
```

**No extra headers, just data rows.**

---

## ⚠️ COMMON MISTAKES TO AVOID

### Phase 1 Email
- ❌ DON'T: Wait for all replies before sending more emails
- ✅ DO: Send consistently 3-5 per day
- ❌ DON'T: Over-personalize (takes too long)
- ✅ DO: Use template + customize 1-2 key facts
- ❌ DON'T: Get discouraged by low reply rate
- ✅ DO: Expect 5-8% reply rate (normal)

### Phase 2 Research
- ❌ DON'T: Research everything perfectly
- ✅ DO: Get "good enough" data (name, email, phone, grid health)
- ❌ DON'T: Spend time on prospects with low reviews
- ✅ DO: Filter aggressively (30+ reviews, 4.5+ rating only)
- ❌ DON'T: Get stuck on one suburb
- ✅ DO: Search multiple suburbs, compile into one list

---

## 🚨 IF YOU GET STUCK

### Email Not Sending?
- Check SendGrid account is active
- Verify email address is correct
- Check spam folder for replies
- Ask: Is the email bouncing?

### Can't Find Email for Prospect?
- Try their website "Contact" page
- Call them: "Can I email your owner about an opportunity?"
- Check LinkedIn
- Use email finder tool (RocketReach, Hunter.io)
- If nothing works, keep phone number (can call instead)

### Grid Analysis Tool Not Working?
- Verify prospect data is complete (name, suburb, service type)
- Make sure you're logged into localrankai
- Try refreshing
- If broken, manually estimate based on reviews/rating

### Running Out of Time?
- Prioritize Phase 1 emails (revenue = priority)
- Phase 2 research can continue into Week 2
- Get CSV done, but no rush to finish all 340 Day 1
- Even 200 prospects is good to start

---

## 📈 SUCCESS LOOKS LIKE

**By end of Week 1:**

Phase 1:
- ✅ 20-25 emails sent
- ✅ 1-2 replies received
- ✅ 0-1 discovery call made
- ✅ Email template refined

Phase 2:
- ✅ 340 prospects researched
- ✅ CSV created
- ✅ Ready to seed into database
- ✅ Prospect research process documented

**Both together:**
- ✅ Phase 1 cold email machine started
- ✅ Phase 2 database foundation complete
- ✅ On track for Week 2

---

## 🎬 START NOW

**Right now:**

1. ✅ Database setup complete (DONE)
2. 📋 Create prospect research spreadsheet (30 mins)
3. 📧 Send first 5-10 emails (1-2 hours)
4. 📊 Start researching plumbers (2-3 hours)

**You've got everything you need. Let's go.**

---

**Week 1 Slogan:**
> "Send emails in the morning. Research prospects at night. By Friday, we're moving."

---

**Status:** READY TO EXECUTE
**Start Time:** NOW
**Next check-in:** Friday EOD (report progress)
