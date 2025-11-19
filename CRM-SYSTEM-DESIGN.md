# CRM SYSTEM DESIGN: Phase 1 Prospect & Sales Tracking

**Status:** Design phase (not yet built)
**Purpose:** Track everything from prospect research through customer acquisition
**Scope:** Week 1-4 (Phase 1 MVP execution)

---

## 🎯 THE PROBLEM

Currently, you have:
✅ Phase 2: Content generation (automated, no customer tracking)
❌ Phase 1: Manual sales process (no tracking system)

You need to track:
- 340 prospects researched
- 25-100 emails sent
- Email open rates
- Email reply rates
- Calls scheduled
- Calls completed
- Objections encountered
- Deals closed
- Customer details

Without CRM, you'll have:
- ❌ Spreadsheet chaos (multiple copies, version conflicts)
- ❌ Lost emails (not tracking opens/replies)
- ❌ Missed follow-ups (no reminder system)
- ❌ No sales funnel visibility
- ❌ Can't measure what works

---

## 📊 WHAT A CRM DOES

A CRM (Customer Relationship Management) system is basically a database that tracks:

```
PROSPECT → EMAIL → REPLY → CALL → OBJECTION → CLOSE → CUSTOMER
   │         │        │       │        │         │        │
   └─────────┴────────┴───────┴────────┴─────────┴────────┘
          CRM TRACKS EVERY STEP
```

---

## 🏗️ YOUR CRM ARCHITECTURE

You already have most of the database structure. You just need to connect Phase 1 (sales) with Phase 2 (content).

### **Current Database (Phase 2 only):**

```
Prospect Table
├─ id, name, trade, email, phone
├─ gridHealth, criticalGaps, gaps
├─ topCompetitor, competitorHealth
└─ status: "active" (but no sales status)

GeneratedPost Table
├─ prospectId
├─ caption, hashtags, cta
├─ imageUrl, videoScript
└─ status: "draft" or "scheduled"
```

### **Missing: Sales Tracking**

You need to add tracking for:
- Emails sent
- Email opens/clicks
- Replies received
- Calls made
- Call outcomes
- Customer status
- Deal value

---

## 💾 PROPOSED CRM SCHEMA

Add these tables to your database:

### **Table 1: OutreachActivity** (Already in schema!)

```sql
CREATE TABLE OutreachActivity {
  id: String (unique)
  prospectId: String (FK → Prospect)
  type: String (email|call|sms|follow_up)
  status: String (pending|sent|opened|clicked|replied|scheduled|completed)
  details: Json (flexible data)
  createdAt: DateTime
  updatedAt: DateTime
}

Example:
{
  id: "activity_001",
  prospectId: "royal_plumbing",
  type: "email",
  status: "sent",
  details: {
    emailId: "sendgrid_123",
    template: "pain_point",
    subject: "Royal Plumbing: Your $1,200 Opportunity",
    sentAt: "2025-11-15T08:30:00Z",
    openedAt: null,
    clickedAt: null,
    repliedAt: "2025-11-15T14:00:00Z",
    reply: "Interested! Can we talk this week?"
  }
}
```

### **Table 2: EmailActivity** (New)

```sql
CREATE TABLE EmailActivity {
  id: String (unique)
  prospectId: String (FK)
  outreachActivityId: String (FK)
  sendgridId: String
  emailType: String (pain_point|solution|competitor_threat)
  subject: String
  sentAt: DateTime
  openedAt: DateTime?
  clickedAt: DateTime?
  clickCount: Int
  repliedAt: DateTime?
  replyText: String?
  status: String (pending|sent|opened|clicked|replied|bounced|failed)
}

Example:
{
  id: "email_001",
  prospectId: "royal_plumbing",
  sendgridId: "sg_20251115_123",
  emailType: "pain_point",
  subject: "Royal Plumbing: Your $1,200/week visibility opportunity",
  sentAt: "2025-11-15T08:30:00Z",
  openedAt: "2025-11-15T12:00:00Z",
  clickedAt: "2025-11-15T12:05:00Z",
  clickCount: 2,
  repliedAt: "2025-11-15T14:00:00Z",
  replyText: "Interested! Can we discuss on Friday?",
  status: "replied"
}
```

### **Table 3: CallActivity** (New)

```sql
CREATE TABLE CallActivity {
  id: String (unique)
  prospectId: String (FK)
  outreachActivityId: String (FK)
  scheduledAt: DateTime
  completedAt: DateTime?
  duration: Int (seconds)?
  notes: String?
  objections: String[] (array of objections raised)
  nextSteps: String?
  outcome: String (interested|not_interested|follow_up|proposal_sent|closed_won)
  recordingUrl: String? (if you record calls)
}

Example:
{
  id: "call_001",
  prospectId: "royal_plumbing",
  scheduledAt: "2025-11-15T15:00:00Z",
  completedAt: "2025-11-15T15:25:00Z",
  duration: 1500,
  notes: "Daniel was very interested. Grid health 48% is major pain point.",
  objections: [
    "How much will this cost?",
    "Do you have case studies?",
    "What's the timeline?"
  ],
  nextSteps: "Send ROI proposal + case studies",
  outcome: "interested",
  recordingUrl: null
}
```

### **Table 4: ProspectStatus** (Enhanced Prospect)

Extend your existing Prospect table:

```sql
ALTER TABLE Prospect ADD COLUMN:
  salesStatus: String (new|contacted|replied|scheduled|proposal|closed_won|closed_lost)
  lastContactAt: DateTime?
  nextFollowUpAt: DateTime?
  emailsSentCount: Int (default: 0)
  emailsOpenedCount: Int (default: 0)
  callsScheduledCount: Int (default: 0)
  callsCompletedCount: Int (default: 0)
  dealValue: Float? (estimated revenue)
  closeDate: DateTime? (when they became customer)
```

### **Table 5: Customer** (New - Final stage)

```sql
CREATE TABLE Customer {
  id: String (unique)
  prospectId: String (FK)
  companyName: String
  contactName: String
  email: String
  phone: String
  website: String
  
  // Service details
  serviceType: String (grid_health_analysis|content_generation|paid_ads)
  monthlyFee: Float
  startDate: DateTime
  endDate: DateTime?
  
  // Contract
  contractUrl: String?
  signedAt: DateTime
  
  // Communication
  primaryContact: String
  slackChannel: String?
  googleDriveFolder: String?
  
  // Performance
  initialGridHealth: Float
  currentGridHealth: Float?
  impressionsGenerated: Int?
  leadsGenerated: Int?
  
  status: String (active|paused|churned)
  
  createdAt: DateTime
  updatedAt: DateTime
}
```

---

## 🔄 DATA FLOW: Week 1 MVP Sales Process

```
WEEK 1: PROSPECT RESEARCH
        ↓
        Prospect Table populated (340 records)
        salesStatus: "new"
        ↓
WEEK 1: SEND EMAILS
        ↓
        EmailActivity created for each sent email
        OutreachActivity created (type: "email", status: "sent")
        ↓
REAL-TIME: EMAIL OPENS/CLICKS (via SendGrid webhook)
        ↓
        EmailActivity updated:
        - openedAt: [timestamp]
        - clickCount: [incremented]
        - status: "opened"
        ↓
REAL-TIME: EMAIL REPLIES (manual or automated via SendGrid)
        ↓
        EmailActivity updated:
        - repliedAt: [timestamp]
        - replyText: [captured]
        - status: "replied"
        ↓
        Prospect updated:
        - salesStatus: "replied"
        - lastContactAt: [now]
        ↓
WEEK 1-2: SCHEDULE CALLS
        ↓
        CallActivity created
        - scheduledAt: [time]
        - outcome: "pending"
        ↓
        Prospect updated:
        - nextFollowUpAt: [scheduled time]
        - callsScheduledCount: [incremented]
        ↓
WEEK 1-2: COMPLETE CALLS
        ↓
        CallActivity updated:
        - completedAt: [timestamp]
        - notes: [what discussed]
        - objections: [list of objections]
        - outcome: "interested" or "not_interested"
        ↓
        Prospect updated:
        - salesStatus: "interested"
        - callsCompletedCount: [incremented]
        ↓
WEEK 2-4: SEND PROPOSAL
        ↓
        EmailActivity created (type: "proposal")
        OutreachActivity created
        ↓
WEEK 2-4: CLOSE DEAL
        ↓
        Customer record created
        Prospect updated:
        - salesStatus: "closed_won"
        ↓
        Contract signed, payment received
        ↓
        Customer becomes active
```

---

## 📊 DASHBOARD: What You'll See

### **Real-time CRM Dashboard**

```
WEEK 1 SALES METRICS
════════════════════════════════════

Total Prospects: 340
├─ Tier-1 (analyzed first): 25
├─ Tier-2 (this week): 100
└─ Tier-3 (next): 215

OUTREACH STATUS:
├─ Emails Sent: 25 (this week)
│  ├─ Delivered: 24 (96%)
│  ├─ Bounced: 1 (4%)
│  └─ Failed: 0
│
├─ Email Engagement:
│  ├─ Opened: 8 (32% open rate)
│  ├─ Clicked: 3 (12% click rate)
│  └─ Replied: 2 (8% reply rate)
│
├─ Calls Scheduled: 2
├─ Calls Completed: 1 (avg duration: 25 mins)
└─ Calls Pending: 1

SALES PIPELINE:
├─ New (not contacted): 315
├─ Contacted (email sent): 25
├─ Replied (replied to email): 2
├─ Scheduled (call booked): 2
├─ Called (completed): 1
├─ Proposal (sent proposal): 0
└─ Closed (customers): 0

ENGAGEMENT BY PROSPECT:
┌─────────────────────────────────────────┐
│ Royal Plumbing Co                       │
├─────────────────────────────────────────┤
│ Status: replied                         │
│ Emails sent: 2                          │
│ Emails opened: 1                        │
│ Last contact: Today at 2:00 PM         │
│ Next follow-up: Friday at 3:00 PM      │
│ Objections: Cost, timeline             │
│ Value: $2,400/month (if closed)         │
└─────────────────────────────────────────┘

KEY METRICS:
├─ Email send rate: 25/day (on track for 100+)
├─ Email open rate: 32% (good, 20%+ is healthy)
├─ Email reply rate: 8% (good, 5-8% is normal)
├─ Call conversion: 100% of replies → calls (2/2)
└─ Deal conversion: 0% (Week 4 goal: 10%)
```

---

## 🔌 INTEGRATION POINTS

### **SendGrid Integration**

SendGrid sends webhooks when emails are opened/clicked/replied:

```typescript
// In your backend routes:
POST /webhooks/sendgrid
{
  event: "open",           // or "click", "reply", "bounce"
  email: "daniel@royal...",
  timestamp: 1234567890,
  sendgrid_event_id: "..."
}

// Your code:
1. Find EmailActivity by sendgridId
2. Update openedAt / clickedAt / repliedAt
3. Update Prospect salesStatus
4. Log to OutreachActivity
5. Trigger notifications (Slack, email)
```

### **Call Tracking (Manual + Optional Automation)**

```typescript
// After each call, you (or CLI tool) logs:
POST /api/calls
{
  prospectId: "royal_plumbing",
  duration: 1500,
  notes: "Very interested in grid analysis",
  objections: ["cost", "timeline"],
  outcome: "interested",
  nextSteps: "Send proposal"
}

// System:
1. Creates CallActivity
2. Updates Prospect
3. Sends follow-up reminder
```

### **Email Tracking (Via SendGrid)**

SendGrid automatically tracks:
- ✅ Sent
- ✅ Opened (when they read it)
- ✅ Clicked (when they click link)
- ✅ Replied (when they respond)
- ✅ Bounced (if invalid email)

Your system receives webhooks and updates database in real-time.

---

## 📱 PRACTICAL USAGE: How You'll Use It

### **Monday Morning: Check Status**

```bash
# List all new prospects
npm run list:prospects -- --status new --limit 10

# See who opened your emails
npm run list:emails -- --status opened

# See who replied
npm run list:emails -- --status replied

# See who you should call today
npm run list:calls -- --status pending
```

### **After Sending Email**

System automatically captures:
- ✅ Who you sent to
- ✅ What template
- ✅ When sent
- When they opened it (real-time webhook)
- When they clicked (real-time webhook)
- When they replied (real-time webhook)

You see it update in dashboard as it happens.

### **After a Call**

```bash
npm run create:call --prospect="royal_plumbing" \
  --outcome="interested" \
  --objections="cost,timeline" \
  --notes="Daniel very interested in grid analysis"

# System automatically:
# 1. Creates CallActivity record
# 2. Updates Prospect salesStatus
# 3. Sets next follow-up reminder
# 4. Sends you Slack notification
```

### **End of Week: Analytics**

```bash
npm run report:week1

Output:
═══════════════════════════════════
WEEK 1 SALES REPORT
═══════════════════════════════════
Emails Sent: 25
Email Open Rate: 32%
Email Reply Rate: 8%
Calls Scheduled: 5
Calls Completed: 3
Deals Closed: 0
Next Week Target: 50 more emails, 2-3 calls
```

---

## 🗂️ FILE STRUCTURE: CRM System

```
backend/
├─ src/
│  ├─ services/
│  │  ├─ contentGenerator.service.ts (✅ built)
│  │  ├─ canvaGraphics.service.ts (✅ built)
│  │  ├─ videoScript.service.ts (✅ built)
│  │  │
│  │  ├─ crm/
│  │  │  ├─ emailTracking.service.ts (🔴 not built)
│  │  │  ├─ callTracking.service.ts (🔴 not built)
│  │  │  ├─ prospectStatus.service.ts (🔴 not built)
│  │  │  └─ salesAnalytics.service.ts (🔴 not built)
│  │  │
│  │  └─ webhooks/
│  │     └─ sendgrid.webhook.ts (🔴 not built)
│  │
│  ├─ routes/
│  │  ├─ crm.routes.ts (🔴 not built)
│  │  └─ webhooks.routes.ts (🔴 not built)
│  │
│  └─ cli/
│     ├─ crm-commands.ts (🔴 not built)
│     └─ (existing generate-posts, etc.)
│
└─ prisma/
   └─ schema.prisma (needs CRM table additions)
```

---

## 📋 COMPARISON: Spreadsheet vs CRM

### **Spreadsheet (Current - ❌ Bad)**
```
Prospect | Email Sent | Email Opened | Called | Deal
Royal    | 11/15      | ❓ Unknown   | No    | No
ABC      | 11/15      | ❓ Unknown   | Yes   | ?
XYZ      | 11/14      | ❓ Unknown   | Yes   | No
```

Problems:
- ❌ Manual tracking (error-prone)
- ❌ No real-time updates
- ❌ Can't see email opens (unless you check manually)
- ❌ Can't automate follow-ups
- ❌ Can't see trends/patterns
- ❌ Duplicate data across spreadsheets

### **CRM System (New - ✅ Good)**
```
Prospect | Email Sent | Email Opened | Click | Called | Duration | Outcome | Next Step
Royal    | 11/15 8am  | 11/15 12pm   | Yes  | Yes    | 25 min   | Interest| Proposal
ABC      | 11/15 8am  | 11/15 2pm    | No   | Yes    | 15 min   | Not Int | Archive
XYZ      | 11/14 9am  | 11/14 10am   | Yes  | Yes    | 20 min   | Lost    | Archive
```

Benefits:
- ✅ Real-time tracking (webhooks)
- ✅ Automatic email opens (SendGrid)
- ✅ Can see all interactions in one place
- ✅ Automated reminders/follow-ups
- ✅ Analytics & trends
- ✅ Single source of truth
```

---

## 🎯 MINIMAL CRM vs FULL CRM

### **Minimal CRM (For Week 1 MVP)**
Build just enough to track:
- ✅ Emails sent
- ✅ Email opens/clicks (SendGrid webhooks)
- ✅ Replies received
- ✅ Calls scheduled/completed
- ✅ Deal status

**Time to build:** 8-12 hours
**Services needed:** 4 new services

### **Full CRM (For Month 2+)**
Add:
- Sales pipeline visualization
- Forecast/reporting
- Task automation
- Email scheduling
- Meeting scheduling
- Document management
- Analytics dashboards

**Time to build:** 40+ hours
**Services needed:** 10+ services

---

## 📅 IMPLEMENTATION TIMELINE

### **Week 2: CRM Foundation**
- Add 5 tables to schema (EmailActivity, CallActivity, Customer, etc.)
- Create emailTracking.service.ts
- Create callTracking.service.ts
- Set up SendGrid webhooks
- **Time:** 8 hours

### **Week 3: CRM CLI Commands**
- Create CLI for logging calls
- Create CLI for viewing status
- Create CLI for generating reports
- **Time:** 4 hours

### **Week 4: Analytics & Reporting**
- Build dashboard queries
- Add analytics service
- Export reports
- **Time:** 4 hours

---

## 🔗 HOW PHASE 1 & PHASE 2 CONNECT

```
PHASE 2: Content Generation          PHASE 1: Sales Tracking
══════════════════════════════════════════════════════════

GeneratedPost table                  EmailActivity table
├─ prospectId ──────────────────────┤ prospectId
├─ caption                           ├─ emailType (pain_point, etc.)
├─ hashtags                          ├─ sentAt
├─ status: "draft"                   ├─ openedAt
                                     ├─ repliedAt
                                     ├─ status

Prospect table (shared)
├─ id
├─ name, email, phone
├─ gridHealth, criticalGaps
├─ salesStatus ◄─── LINKS TO PHASE 1
├─ callsScheduledCount
├─ emailsSentCount
└─ dealValue

Customer table (final)
├─ prospectId (FK to Prospect)
├─ monthlyFee
├─ startDate
└─ contractUrl
```

---

## ❓ FAQ

### **Q: Is this a "real" CRM?**
A: For MVP, yes. It tracks all essential metrics. For enterprise, you'd use Salesforce/HubSpot. But this gives you 80% of functionality for 5% of the cost.

### **Q: Can I use Zapier/Make instead?**
A: You could, but:
- ✅ Zapier: Easy setup, less coding, costs $50+/month
- ✅ Custom CRM: Free, more control, requires coding
- You could start with Zapier, move to custom later

### **Q: How do I track email opens?**
A: SendGrid sends webhooks when emails are opened. Your webhook endpoint captures this and updates database.

### **Q: How do I automate follow-ups?**
A: Use node-cron (already in your dependencies):
```typescript
// Send follow-up email if not replied in 3 days
cron.schedule('0 9 * * *', async () => {
  const unreplied = await prisma.emailActivity.findMany({
    where: {
      repliedAt: null,
      sentAt: { lt: 3.days.ago }
    }
  });
  // Send follow-up emails
});
```

### **Q: What if I want to use HubSpot/Salesforce?**
A: You could:
- ✅ Use their free tier (limited)
- ✅ Integrate via API (more work)
- ❌ Lose ownership of your data

Better to start with your own system, migrate later if needed.

---

## 📝 DECISION: Build CRM or Use Third-Party?

### **Option A: Build Custom CRM** (Recommended)
```
Pros:
✅ Full control
✅ Free (other than your time)
✅ Integrated with Phase 1 & 2
✅ No monthly fees
✅ Can customize exactly to your needs

Cons:
❌ Requires 20-30 hours of coding
❌ You maintain it
```

### **Option B: Use HubSpot Free**
```
Pros:
✅ Professional, battle-tested
✅ Email tracking built-in
✅ Contact management included

Cons:
❌ Monthly fees start at $50
❌ Data lives with HubSpot
❌ Less integrated with Phase 2
❌ Less control
```

### **Option C: Spreadsheet** (Not recommended)
```
Pros:
✅ Fast to start
✅ Free

Cons:
❌ Manual tracking
❌ No email tracking
❌ Error-prone
❌ Can't scale
❌ No automation
```

---

## 🎯 RECOMMENDATION

**Build your own CRM** because:

1. You're already in code (backend built)
2. It's integrated with Phase 2 content system
3. Free vs $50+/month
4. Full control + customization
5. Learning opportunity
6. Can migrate to HubSpot later if needed

**Timeline:** 20 hours (Week 2-3) after Phase 1 MVP launch

---

## NEXT STEP

Do you want me to:
1. **Build the minimal CRM** (EmailActivity + CallActivity + tracking)
2. **Integrate SendGrid webhooks** (real-time email tracking)
3. **Create CLI commands** for managing sales pipeline
4. **Design the dashboard** view

Or would you prefer to use HubSpot/Salesforce for now?

