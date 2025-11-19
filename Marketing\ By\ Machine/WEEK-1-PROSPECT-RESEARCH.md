# WEEK 1: PROSPECT RESEARCH GUIDE
**Research 340 prospects across 4 trades (8-9 hours)**

**Status:** Ready to execute
**Target:** Complete by end of Week 1
**Output:** CSV file with 340 prospects ready to seed into database

---

## RESEARCH BREAKDOWN

**Total: 340 prospects**
- Plumbers: 120 (25 existing + 95 new)
- Electricians: 100
- Locksmiths: 60
- HVAC: 60

**Estimated Time:**
- Plumbers (95 new): 2-3 hours
- Electricians (100): 2-3 hours
- Locksmiths (60): 1.5-2 hours
- HVAC (60): 1.5-2 hours
- **Total: 8-10 hours**

---

## RESEARCH PROCESS

### For Each Trade:

**Step 1: Google Maps Search**
```
Go to: https://www.google.com.au/maps
Search: "[trade] [suburb]"

Examples:
- "plumber werribee"
- "electrician werribee"
- "locksmith werribee"
- "hvac werribee"
```

**Step 2: Filter & Select Top Prospects**
- Reviews: 30+
- Rating: 4.5+
- Status: Active (recent reviews)
- Geographic focus: Werribee area

**Step 3: Extract Data For Each Prospect**

For each business, record:
```
name              | Business name (e.g., "Danzer's Plumbing")
trade             | plumber / electrician / locksmith / hvac
email             | From website or contact form
phone             | From Google Maps listing
website           | From Google Maps
google_rank       | Position in search results (1, 2, 3, etc.)
review_count      | Number of reviews
rating            | Star rating (4.5, 5.0, etc.)
gridHealth        | Run through your tool (0-100%)
criticalGaps      | Number from your analysis
highPriority      | Number from your analysis
defendingAreas    | Number from your analysis
topCompetitor     | Competitor name
competitorHealth  | Their grid health %
revenueImpact     | Estimated $/week they're losing
primarySuburb     | Main suburb (e.g., "Werribee")
suburbs           | JSON: ["Hoppers Crossing", "Tarneit", "Point Cook"]
```

**Step 4: Run Grid Analysis**
- Use your existing tool in localrankai
- Get grid health % for prospect
- Get grid health % for top competitor
- Extract gaps, high-priority areas, defending areas

---

## SPREADSHEET TEMPLATE

Create a Google Sheet or Excel with these columns:

```
name | trade | email | phone | website | google_rank | review_count | rating | gridHealth | criticalGaps | highPriority | defendingAreas | topCompetitor | competitorHealth | revenueImpact | primarySuburb | suburbs
```

**Example rows:**

| name | trade | email | phone | review_count | rating | gridHealth | criticalGaps | topCompetitor | competitorHealth |
|------|-------|-------|-------|-------------|--------|-----------|------------|---------------|------------------|
| Danzer's Plumbing | plumber | daniel@email.com | 0401 496 570 | 636 | 5.0 | 40 | 8 | Titan Plumbing | 68 |
| ABC Electrician | electrician | abc@email.com | 0400 123 456 | 245 | 4.8 | 38 | 7 | PowerTech | 65 |
| Quick Locksmith | locksmith | locks@email.com | 0412 345 678 | 89 | 4.9 | 35 | 6 | FastLock | 62 |
| Climate HVAC | hvac | climate@email.com | 0418 567 890 | 156 | 4.7 | 42 | 9 | CoolCorp | 70 |

---

## DETAILED RESEARCH BY TRADE

### PLUMBERS (120 total: 25 existing + 95 new)

**You already have 25 Tier-1 plumbers from PHASE-1-PROSPECT-LIST.md:**
- Danzer's Plumbing & Gas Services
- Hobsons Bay Plumbing Services
- Elite Trades Australia
- ... (19 more)

**Add 95 more plumbers:**

1. **Google Maps search:** "plumber werribee"
2. **Scroll through:** Top 50-100 results
3. **Filter:** 30+ reviews, 4.5+ rating
4. **Extract:** Name, email, phone, website, reviews, rating
5. **Add to grid:** Run grid analysis for each
6. **Time estimate:** 2-3 hours for 95 prospects

**Quality check:**
- No franchises (Titan, ASPIRE, Mr. Plumber) - too big
- No new businesses (<10 reviews)
- No low ratings (<4.5)
- Focus on independent/small teams

---

### ELECTRICIANS (100 total)

**Search terms:**
- "electrician werribee"
- "electrician hoppers crossing"
- "electrician point cook"
- "electrician tarneit"

**Search strategy:**
- Start with "electrician werribee"
- Then search surrounding suburbs
- Combine into master list
- Remove duplicates

**Time estimate:** 2-3 hours for 100 prospects

**Sample businesses to find:**
- Local independent electricians
- Small teams (3-10 employees)
- 30+ reviews, 4.5+ rating
- Mix of emergency and regular services

---

### LOCKSMITHS (60 total)

**Search terms:**
- "locksmith werribee"
- "locksmith hoppers crossing"
- "24 hour locksmith"
- "emergency locksmith"

**Time estimate:** 1.5-2 hours for 60 prospects

**Note:** Locksmiths are more varied. Some are one-person operations. Focus on ones with 30+ reviews (indicates success).

---

### HVAC (60 total)

**Search terms:**
- "hvac werribee"
- "air conditioning werribee"
- "heating cooling werribee"
- "air con specialist"

**Time estimate:** 1.5-2 hours for 60 prospects

**Note:** HVAC businesses tend to have strong seasonal patterns. Look for ones with diverse review timestamps.

---

## HOW TO GET EMAIL ADDRESSES

**Method 1: Website (Best)**
```
Go to business website → Contact page
Find email or contact form
Extract email
```

**Method 2: Google Maps**
```
Google Maps listing → "Website" button
Often has contact info
```

**Method 3: Phone Call (Last Resort)**
```
Call business: "Hi, who's the owner/manager?"
"I'd like to send them an opportunity email"
"What's their email?" Usually they'll tell you
Takes 30 seconds
```

**Method 4: LinkedIn**
```
Search business name on LinkedIn
Find owner/manager profile
Check for email or message option
```

**Success rate expectations:**
- 70-80% will have email on website
- 15-20% will require phone call
- 5-10% won't have email (use phone only)

---

## DATA QUALITY CHECKLIST

Before importing into database, verify:

- [ ] Name: Exact business name (no typos)
- [ ] Trade: One of [plumber, electrician, locksmith, hvac]
- [ ] Email: Valid format (if available)
- [ ] Phone: Valid Australian format (04xx xxx xxx)
- [ ] Reviews: 30+ (minimum quality threshold)
- [ ] Rating: 4.5+ (quality threshold)
- [ ] gridHealth: 0-100 (from your tool)
- [ ] Duplicates: No two identical names
- [ ] Suburbs: JSON format if multiple

---

## CSV FORMAT FOR DATABASE IMPORT

Once you've completed the spreadsheet, export to CSV:

**File:** `prospects.csv`

```csv
name,trade,email,phone,website,google_rank,review_count,rating,gridHealth,criticalGaps,highPriority,defendingAreas,topCompetitor,competitorHealth,revenueImpact,primarySuburb,suburbs
Danzer's Plumbing,plumber,daniel@email.com,0401 496 570,www.danzerplumbing.com.au,1,636,5.0,40,8,6,11,Titan Plumbing,68,750,Werribee,"[""Hoppers Crossing"",""Tarneit"",""Point Cook""]"
ABC Electrician,electrician,abc@email.com,0400 123 456,www.abcelectrician.com.au,2,245,4.8,38,7,5,10,PowerTech,65,600,Werribee,"[""Caroline Springs"",""Laverton""]"
```

**Important:**
- No header row needed (Prisma seed script will map)
- Trade must be exactly: plumber, electrician, locksmith, or hvac
- Suburbs should be JSON array string (see example)
- All rows must be present (no skipping columns)

---

## TRACKING YOUR PROGRESS

**Make a checklist:**

```
PLUMBERS (120 total)
☐ 25 existing (from PHASE-1-PROSPECT-LIST.md)
☐ 95 new from Google Maps
☐ Total: 120
Time spent: ___ hours

ELECTRICIANS (100 total)
☐ 100 from Google Maps
☐ Total: 100
Time spent: ___ hours

LOCKSMITHS (60 total)
☐ 60 from Google Maps
☐ Total: 60
Time spent: ___ hours

HVAC (60 total)
☐ 60 from Google Maps
☐ Total: 60
Time spent: ___ hours

GRAND TOTAL: 340 prospects
Total time: ___ hours
CSV created: Yes ☐
Ready to seed: Yes ☐
```

---

## WEEK 1 TIMELINE

**Monday-Tuesday (4-5 hours):**
- Plumbers: Add 95 new to existing 25
- Electricians: Start research (50)

**Wednesday-Thursday (4-5 hours):**
- Electricians: Complete 100
- Locksmiths: 60

**Friday (2 hours):**
- HVAC: 60
- Create CSV file
- Quality check all 340

**By Friday EOD:**
- ✅ 340 prospects researched
- ✅ CSV file ready
- ✅ Ready to seed into database Week 2

---

## PARALLEL WITH PHASE 1

**Don't let research distract from Phase 1 emails:**

**Morning (1-2 hours):**
- 8:00-8:30am: Send emails
- 8:30-9:00am: Check replies

**Lunch (30 mins):**
- 12:00-12:30pm: Check email

**Evening (4-5 hours):**
- 6:00-7:00pm: Make 1-2 discovery calls
- 7:00-11pm: Prospect research (3-4 hours)

This way, you're doing both Phase 1 and Phase 2 without conflict.

---

## NEXT STEP

**Right now:**
1. Create new spreadsheet (Google Sheets recommended)
2. Add column headers from template above
3. Start researching plumbers
4. Copy the 25 existing from PHASE-1-PROSPECT-LIST.md first
5. Then add 95 new

**You've got this. Let's go!**

---

## QUICK REFERENCE: Google Maps Search Tips

**Search operators:**
```
"plumber werribee" - exact search
"plumber near werribee" - nearby areas
"emergency plumber werribee" - specific service
```

**Filters to use:**
- Scroll to see all results (not just top 10)
- Sort by rating (highest first)
- Look for "Verified" badge (more trustworthy)
- Check recent reviews (activity indicator)

**Extract email efficiently:**
- Click "Website" link first
- Scan website for "Contact" page
- Look for email in footer
- Check LinkedIn if website doesn't have email

**Save time:**
- Open 5 tabs at once (5 businesses)
- Extract info in batches
- Copy-paste into spreadsheet
- Move to next batch

---

**Status:** READY TO START
**Estimated completion:** Friday EOD (Week 1)
**Next step:** Create spreadsheet and start with plumbers
