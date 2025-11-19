# CRM SYSTEM - QUICK START GUIDE

**Status:** ✅ BACKEND COMPLETE & READY TO USE
**Date:** 2025-11-15
**What's Ready:** Full backend API + CLI commands
**What's Next:** React frontend components

---

## 🚀 5-MINUTE SETUP

### 1. Install Dependencies
```bash
cd backend
npm install
```

New packages added: `chalk`, `commander`, `nanoid`

### 2. Run Database Migration
```bash
npx prisma migrate deploy
```

This creates 3 new tables:
- EmailActivity (tracks emails sent/opened/clicked/replied)
- CallActivity (tracks scheduled/completed calls)
- Customer (final customer records)

### 3. Verify Setup
```bash
npm run crm:analytics:dashboard
```

You should see dashboard metrics (likely all zeros initially).

---

## 🎯 THREE WAYS TO USE CRM

### Option A: CLI Commands (Manual)
```bash
# Log an email
npm run crm:email:send -- -n "ABC Electrician" -t pain_point

# Log a call
npm run crm:call:schedule -- -n "ABC Electrician" -d "2025-11-20T14:00:00Z"

# Check stats
npm run crm:analytics:dashboard
```

### Option B: API Endpoints (Programmatic)
```bash
# Create email
curl -X POST http://localhost:3000/api/crm/emails/send \
  -H "Content-Type: application/json" \
  -d '{"prospectId":"...", "emailType":"pain_point", "subject":"..."}'

# Get dashboard metrics
curl http://localhost:3000/api/crm/dashboard/metrics
```

### Option C: SendGrid Webhooks (Automatic)
```bash
# 1. Send email via SendGrid API
# 2. SendGrid sends webhook events to: /webhooks/sendgrid
# 3. CRM automatically updates email status
# 4. Prospect counters updated in real-time
```

---

## 📋 MOST USEFUL COMMANDS

### View Dashboard
```bash
npm run crm:analytics:dashboard
```
Shows: prospects, emails, calls, customers, conversion rates

### Email Campaign Stats
```bash
npm run crm:email:stats
npm run crm:email:stats-by-trade
```

### Call Stats
```bash
npm run crm:call:stats
npm run crm:call:upcoming
```

### Weekly/Monthly Reports
```bash
npm run crm:analytics:weekly
npm run crm:analytics:monthly
```

### View Prospect Details
```bash
npm run crm:email:list -- -n "ABC Electrician"
npm run crm:call:list -- -n "ABC Electrician"
```

---

## 🔄 TYPICAL WORKFLOW

### Week 1: Email Campaign
```bash
# Monday 8am - Log emails (normally done via Phase 2 integration)
npm run crm:email:send -- -n "Royal Plumbing" -t pain_point
npm run crm:email:send -- -n "ABC Electrician" -t pain_point
# ... repeat for all 25 prospects

# Throughout Monday - SendGrid webhooks update CRM automatically
# No additional commands needed!

# Tuesday 9am - Check stats
npm run crm:analytics:dashboard
npm run crm:email:stats-by-trade
```

### Week 1: Calls
```bash
# Tuesday afternoon - Schedule calls
npm run crm:call:schedule -- -n "ABC Electrician" -d "2025-11-20T14:00:00Z"

# Friday 3pm - After call, log outcome
npm run crm:call:complete -- -c <callActivityId> \
  -o interested \
  -d 1200 \
  -n "They want a demo on Monday" \
  -x "Cost, timeline"

# Friday 5pm - Weekly summary
npm run crm:analytics:weekly
```

---

## 📊 KEY METRICS

All commands output the metrics you care about:

```
📧 EMAIL METRICS
├─ Sent: X
├─ Open Rate: X%
├─ Click Rate: X%
└─ Reply Rate: X%  (target: 5-8%)

📞 CALL METRICS
├─ Scheduled: X
├─ Completed: X
├─ Interested: X%
└─ Closed Won: X%

💰 REVENUE
├─ Customers: X
├─ Monthly Revenue: $X
└─ Average Contract: $X

📈 PIPELINE
└─ Conversion Rate: X%
```

---

## 🔗 INTEGRATION WITH PHASE 2

When Phase 2 generates emails, it should:

```typescript
// After sending email via SendGrid
await createEmailActivity({
  prospectId: prospect.id,
  sendgridId: sendgrid_response.id,
  emailType: 'pain_point',
  subject: emailSubject,
  body: emailBody,
  sentAt: new Date(),
});
```

This happens **automatically** when you run Phase 2 commands.

---

## 🌐 API REFERENCE (20+ Endpoints)

### Emails
```
POST /api/crm/emails/send              - Create email record
GET  /api/crm/emails/:prospectId       - Get prospect's emails
GET  /api/crm/emails/stats/overview    - Email campaign stats
GET  /api/crm/emails/stats/by-trade    - Stats by trade
```

### Calls
```
POST /api/crm/calls/schedule           - Schedule call
POST /api/crm/calls/complete           - Log completed call
GET  /api/crm/calls/:prospectId        - Get prospect's calls
GET  /api/crm/calls/list/upcoming      - Upcoming calls (next 7 days)
GET  /api/crm/calls/list/overdue       - Overdue calls
GET  /api/crm/calls/stats/overview     - Call stats
```

### Analytics
```
GET /api/crm/dashboard/metrics         - Main dashboard
GET /api/crm/pipeline                  - Sales pipeline
GET /api/crm/pipeline/by-trade         - Pipeline by trade
GET /api/crm/timeline                  - Activity timeline
GET /api/crm/prospects/:id             - Prospect details
GET /api/crm/reports/weekly            - Weekly report
GET /api/crm/reports/monthly           - Monthly report
```

---

## 🎓 EXAMPLE: Full Week Workflow

```bash
# MONDAY 8AM
npm run generate:posts -- --limit 25 --template pain_point
# (Phase 2 automatically calls CRM to create EmailActivity records)
# (Phase 2 sends emails via SendGrid with sendgridId)

# THROUGHOUT MONDAY
# SendGrid webhook → /webhooks/sendgrid → CRM updates
# (User doesn't need to do anything!)

# 10:05am - ABC Electrician opens email
# → SendGrid webhook sends "open" event
# → CRM updates: EmailActivity.status = "opened", openedAt = timestamp
# → CRM updates: Prospect.emailsOpenedCount++, salesStatus = "contacted"

# 2:00pm - ABC Electrician replies "Interested!"
# → SendGrid webhook sends "bounce" event for reply
# → CRM updates: EmailActivity.status = "replied", replyText = "..."
# → CRM updates: Prospect.emailsRepliedCount++, salesStatus = "replied"

# TUESDAY 9AM
npm run crm:analytics:dashboard
# Output shows:
# - Emails: 25 sent, 8 opened (32%), 2 replied (8%)
# - Prospects: 1 replied, 2 scheduled, 0 closed

# TUESDAY 3PM
npm run crm:call:schedule -- -n "ABC Electrician" -d "2025-11-20T14:00:00Z"

# FRIDAY 3PM
npm run crm:call:complete -- -c <callId> -o interested -d 1200

# FRIDAY 5PM
npm run crm:analytics:weekly
# Shows: 25 emails, 8 opened, 2 replied, 1 call completed, 1 interested
```

---

## ✅ VERIFICATION CHECKLIST

Before considering setup complete:

- [ ] `npm install` completes without errors
- [ ] `npx prisma migrate deploy` creates 3 tables
- [ ] `npm run crm:analytics:dashboard` returns JSON (not error)
- [ ] Database has prospectId values you expect
- [ ] API routes return 200 responses (use Postman/curl)
- [ ] CLI commands display colored output

---

## 🆘 COMMON ISSUES

**Issue:** "Prospect not found"
- Check: prospectId exists in database
- Check: Use exact spelling and case

**Issue:** "Cannot POST /api/crm/emails/send"
- Check: API routes are registered in main server.ts
- Check: Server is running on correct port

**Issue:** "Command not found: crm:email:send"
- Check: npm scripts added to package.json
- Check: Run `npm install` after updating package.json

**Issue:** TypeScript errors on build
- Check: All imports are correct
- Check: No missing dependencies
- Run: `npm install --save chalk commander nanoid`

---

## 📞 NEXT: FRONTEND INTEGRATION

The frontend will use these API endpoints to build:

1. **Dashboard Tab** → `/api/crm/dashboard/metrics`
2. **Email Table** → `/api/crm/emails/:prospectId`
3. **Call Log** → `/api/crm/calls/:prospectId`
4. **Pipeline Chart** → `/api/crm/pipeline/by-trade`
5. **Prospect Detail** → `/api/crm/prospects/:id`

All endpoints return JSON ready for React components.

---

## 📚 FULL DOCUMENTATION

See: `CRM-SYSTEM-COMPLETE.md` for:
- Database schema details (45 fields across 3 tables)
- All 28 service functions with examples
- All 20+ API endpoints with request/response examples
- SendGrid webhook event types
- Data flow diagrams
- Performance notes
- Troubleshooting guide

---

## 🎉 THAT'S IT!

Your CRM system is ready to:
- ✅ Track 340 prospects through sales pipeline
- ✅ Monitor email campaigns (open rates, click rates, replies)
- ✅ Schedule and log sales calls
- ✅ Calculate conversion rates and revenue
- ✅ Generate weekly and monthly reports
- ✅ Integrate with SendGrid for real-time updates

**Total Setup Time:** ~10 minutes
**Total Commands Available:** 18 CLI + 20+ API endpoints
**Data Ready:** Yes (after Phase 2 starts creating records)

Start with: `npm run crm:analytics:dashboard`
