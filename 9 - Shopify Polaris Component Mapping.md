This document maps every feature in the LocalRankAI SaaS platform to its corresponding [Shopify Polaris](https://polaris.shopify.com/components) components, ensuring a consistent, production-ready UI and design language.

---

## 🎨 Recommended Color Tokens

| **Token** | **Color** | **Usage** |
|------------|------------|-----------|
| `--color-primary` | `#008060` | Shopify Teal — main brand & CTA color |
| `--color-accent` | `#0A2540` | Stripe Navy — for headings & highlights |
| `--color-surface` | `#FFFFFF` | White — card & base surface color |
| `--color-background` | `#F6F6F7` | Light gray — app background |
| `--color-border` | `#DFE3E8` | Divider lines & table borders |
| `--color-text` | `#202223` | Primary text |
| `--color-muted` | `#6D7175` | Secondary text |
| `--color-success` | `#1F7A1F` | Positive state indicators |
| `--color-warning` | `#B98900` | Caution / warning |
| `--color-critical` | `#D82C0D` | Errors or failed states |
| `--color-info` | `#1F6FEB` | Informational notices |

> 💡 Use these colors for both your Figma and code tokens (e.g. Tailwind, CSS variables, or Polaris theme overrides).

---

## 1️⃣ Dashboard

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| KPI Metrics (Avg Rank, Visibility %, Reviews, Directories Synced) | `Card`, `InlineStack`, `Text`, `Badge` | Use 4-up grid of cards; align metric + delta badge horizontally. |
| GeoGrid Map Placeholder | `Card`, `Image` | Wrap map inside `Card`; use `Card.Header` for title. |
| Visibility & Keyword Trend Charts | `Card`, custom `Chart` | Embed Recharts/Chart.js within `Card.Section`. |
| AI Insights Feed | `Card`, `ResourceList`, `Badge`, `Button` | Each insight = `ResourceItem` with category badge + actions. |
| Footer | `Text` (muted) | Center-aligned small caption. |

---

## 2️⃣ Keywords

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Keyword Filters | `Filters`, `ButtonGroup`, `Popover`, `TextField` | Collapsible filtering system with tokens. |
| Keywords Table | `DataTable` | Sortable columns for Avg Rank, Best Rank, Grid, Visibility, Δ. |
| Empty State | `EmptyState` | CTA “Add Keyword” for first-time users. |
| Add / Import Buttons | `Button` (primary + secondary) | Place top-right in `Page.Header`. |
| Pagination | `Pagination` | Bottom-right below table. |

---

## 3️⃣ Listings / Directories

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Directory List & Status | `ResourceList`, `IndexTable` | Each row shows logo, status badge, last sync, action menu. |
| Sync / Fix Actions | `ButtonGroup` | “Sync Now”, “Fix Missing Info”. |
| Health Summary | `Card`, `ProgressBar` | Show completion %, duplicate count, and issues. |

---

## 4️⃣ Reviews & Reputation

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Review Summary | `Card`, `Badge`, custom `StarRating` | Use SVG icons for stars. |
| Review List | `IndexTable`, `ResourceList` | Each row: reviewer, rating, snippet, platform, date. |
| Sentiment Graph | `Card`, custom `Chart` | Green/yellow/red semantic colors. |
| Respond to Review | `Modal`, `TextField`, `Button` | Trigger modal per review row. |

---

## 5️⃣ Insights / AI Recommendations

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Tabs (All, Ranking, GBP, Directory, Reviews) | `Tabs` | Controls category filter for insights feed. |
| Insights Feed | `Card`, `ResourceList` | Each insight as a `ResourceItem` with title & actions. |
| Evidence Modal | `Modal`, `List`, `Button` | For “View Evidence” action. |
| Fix Workflow | `Toast`, `Banner` | Show success/failure notifications. |

---

## 6️⃣ Competitors

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Comparison Table | `IndexTable` | Columns for competitor, rank, visibility, reviews. |
| Map View Toggle | `ButtonGroup` | Switch between table/map views. |
| Benchmark Summary | `Card`, `Badge` | Show quick insights: “You outrank 3/5 competitors.” |

---

## 7️⃣ Reports

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Scheduled Reports | `ResourceList`, `Button` | Each row: type, last run, frequency, download. |
| Report Builder | `Form`, `FormLayout`, `Select`, `TextField`, `Checkbox`, `Button` | Standard Polaris form layout. |
| PDF Viewer | `Frame` (custom embed) | Integrate PDF preview. |

---

## 8️⃣ Settings / Account

| Feature | Polaris Components | Notes |
|----------|-------------------|-------|
| Profile / Business Info | `Form`, `TextField`, `Select`, `Checkbox` | Basic account details. |
| Integrations | `Card`, `Button` | Each integration (GSC, GBP, DataForSEO) has connect/disconnect button. |
| Billing & Subscription | `Card`, `ResourceList` | List current plan, invoices, renewal. |
| Notifications | `Checkbox`, `ToggleSwitch` | Manage email/SMS alerts. |

---

## 🧱 Global Layout Components

| Purpose | Component | Usage |
|----------|------------|-------|
| Page Shell | `Page` | Wraps content, spacing, and title. |
| App Frame | `Frame`, `TopBar`, `Navigation` | Persistent app shell (logo, nav, actions). |
| Sidebar Navigation | `Navigation.Section` | For primary app navigation. |
| Notifications | `Toast`, `Banner` | System and success messages. |
| Modals & Popovers | `Modal`, `Popover` | Secondary actions or settings. |
| Empty/Error States | `EmptyState`, `Banner` | Handle blank or error conditions. |

---

## 💡 Example Scaffold (React + Polaris)

```tsx
<AppProvider i18n={en}>
  <Frame topBar={<TopBar />} navigation={<Navigation />}>
    <Page title="Dashboard">
      <Layout>
        <Layout.Section>
          <Card title="Average Rank" sectioned>
            <Text variant="headingMd" as="h2">
              12.4
            </Text>
            <Badge tone="success">+1.2</Badge>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  </Frame>
</AppProvider>
```

---

## 📘 Notes

- **Spacing rhythm:** 4 / 8 / 12 / 16 / 24 px per Polaris guidelines.  
- **IndexTable** → Use when selection or bulk actions are needed.  
- **ResourceList** → Use for visual-heavy rows (logos, icons).  
- **Charts** → Use external libraries wrapped in `Card.Section`.  
- **Semantic colors:**  
  - Success → `#1F7A1F`  
  - Warning → `#B98900`  
  - Critical → `#D82C0D`  
  - Info → `#1F6FEB`

---

**Author:** Sriteja Bongu (TJ)  
**Product:** LocalRankAI – Local SEO Automation SaaS  
**Design System:** Shopify Polaris (React-based UI Framework)