## Account connection

The account connection component is used so merchants can connect or disconnect their store to various accounts. For example, if merchants want to use the Facebook sales channel, they need to connect their Facebook account to their Shopify store.

  | Used to | Examples |
  | --- | --- |
  | Display connection status | Show if a sales channel is connected or disconnected |
  | Allow merchants to disconnect accounts  | Enable merchants to disconnect from a marketing platform |

  ---
  

  

[View Account connection](https://shopify.dev/docs/api/app-home/patterns/account-connection)

## App card

App cards provide a consistent layout for presenting another app to merchants. They are used to highlight apps that can extend functionality or help merchants accomplish related tasks. App cards should educate merchants about the value of the suggested app and provide a clear, actionable way to learn more or install it.

  | Used to | Examples |
  | --- | --- |
  | Suggest complementary apps | Recommend an email marketing app to subscription service users |
  | Promote integrations | Highlight a social media scheduler that connects with your app |
  | Guide merchants to explore new solutions | Introduce a reporting tool for advanced analytics |

  ---
  

  

[View App card](https://shopify.dev/docs/api/app-home/patterns/app-card)

## Callout card

Callout cards are used to encourage merchants to take an action related to a new feature or opportunity. They are most commonly displayed in the sales channels section of Shopify.
 
  | Used to | Examples |
  | --- | --- |
  | Promote new features or integrations | Dismissible feature announcement |
  | Drive adoption of app functionality | Common first actions |
  ---

[View Callout card](https://shopify.dev/docs/api/app-home/patterns/callout-card)

## Details

The details page allows merchants to view, create and edit objects. Use the right column to provide editable fields, and the right column for supporting information such as status, metadata, and summaries.
 
  | Used to | Examples |
  | --- | --- |
  | View, edit and create objects  | Discounts, shipping labels, newsletters, templates. |

  ![Preview of the details page pattern](/assets/templated-apis-screenshots/admin/patterns/details-example.png)

  This pattern uses `Badge`, `Box`, `Button`, `Grid`, `Heading`, `Image`, `Link`, `MoneyField`, `NumberField`, `SearchField`, `Section`, `Select`, `Stack`, `Switch`, `Table`, `TextArea`, `TextField`, `UnorderedList`, and `URLField` components.

  ---

  ## Design guidelines
  Design details pages that enable users to create, view, and edit resource objects.

  ### Navigation

  * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
  * Use tabs sparingly for secondary navigation purposes when the nav menu isn't sufficient.
    * Clicking a tab should only change the content below it, not above.
    * Tabs should never wrap onto multiple lines.
    * Navigating between tabs shouldn't cause the tabs to change position or move.
    * Offer users clear and predictable action labels.

  ---

  ### Layout

  * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
  * Use looser spacing for low-density layouts. Use tighter spacing for high-density layouts.
  * Always use the default width. Full width tends to waste space and make the page harder to parse
  * In the primary column: Put information that defines the resource object
  * In the secondary column: Put supporting information such as status, metadata, and summaries
  * Arrange content in order of importance
  * Group similar content in the same card
  * Place unique page actions at the top of the actions list and typical object actions at the bottom

  ---

  ### Forms

  * For more than five inputs, use sections with titles in one card or use multiple cards with headers.
  * Form inputs should be saved using the App Bridge Contextual Save Bar API. This also applies to forms within max modals. Continuous data validation or auto-save for forms is consistent with the standard Shopify admin save UX.

  ---

  <style>
    div[class*="CodeBlock-module-CodeBlock_"] {
      max-height: calc(100vh - 80px) !important;
    }
    div[class*="Tabs-module-TabsContent_"] {
      overflow: auto !important;
    }
    div[class*="Screenshot-module-Screenshot_"] {
      display: none !important;
    }
  </style>
[View Details](https://shopify.dev/docs/api/app-home/patterns/details)

## Empty state

Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to provide explanation or guidance to help merchants progress. The empty state component is intended for use when a full page in the admin is empty, and not for individual elements or areas in the interface.

  | Used to | Examples |
  | --- | --- |
  | Offer a clear next step when no data is present | Prompt merchants to create their first campaign |
  | Encourage activation of features | Suggest setting up a subscription plan when none exist |
  ---

[View Empty state](https://shopify.dev/docs/api/app-home/patterns/empty-state)

## Footer help

Footer help is used to refer merchants to more information related to the product or feature they’re using.

  | Used to | Examples |
  | --- | --- |
  | Refer merchants to related help docs |  Learn more about [shipping zones]|
  | Offer support as a secondary option  | [Contact us] about email marketing |

  ---
  

  

[View Footer help](https://shopify.dev/docs/api/app-home/patterns/footer-help)

## Homepage

The app URL specified in the Partner Dashboard should point to your app homepage. The home page of your app is the first thing merchants will see, and it should provide daily value to them. Design the page to provide status updates and show merchants what actions they can take.
 
  | Used to | Examples |
  | --- | --- |
  | Teach merchants how to use the app | Onboarding, how-to guides |
  | Display app functionalities | Call-to-actions to app features, resource tables |
  | Show updates | Status banners, company news |

  ![Preview of the homepage pattern](/assets/templated-apis-screenshots/admin/patterns/homepage-example.png)

  This pattern uses `Badge`, `Banner`, `Box`, `Button`, `Checkbox`, `Clickable`, `Divider`, `Grid`, `Heading`, `Image`, `Link`, `Paragraph`, `Section`, `Stack`, and `Text` components.

  ---

  ## Design guidelines
  Your app home page should be designed to provide users with relevant, timely information like quick statistics, status updates, or information that’s immediately actionable.

  ### Onboarding

  The onboarding experience quickly introduces users to your app's essential features. A good onboarding should be self-guided, easy to follow and make users feel they understand how the app works after finishing it. If the onboarding is long or complex, give users the option to complete it at a later time to avoid stopping their workflow.

  * Onboarding must be brief and direct. Provide clear instructions and guide users to completion
  * Only request information from users if it's necessary
  * If your onboarding isn't essential, then make it dismissible
  * Don't have more than five steps in your onboarding process. This can lead users to drop off and not use your app

  ---

  ### Visual design

  * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
  * Use looser spacing for low-density layouts. Use tighter spacing for high-density layouts.
  * Use high-resolution photos and images to ensure a professional, high-quality experience.

  ---

  <style>
    div[class*="CodeBlock-module-CodeBlock_"] {
      max-height: calc(100vh - 80px) !important;
    }
    div[class*="Tabs-module-TabsContent_"] {
      overflow: auto !important;
    }
    div[class*="Screenshot-module-Screenshot_"] {
      display: none !important;
    }
  </style>
[View Homepage](https://shopify.dev/docs/api/app-home/patterns/homepage)

## Index

The index layout lets merchants view and manage all their objects at once in a table format. They can filter, sort and do quick actions on their objects. To prevent tables from becoming visually cluttered, reveal actions only when the row is hovered over or selected

  | Used to | Examples |
  | --- | --- |
  | View all objects at once | Products, orders, customers, discounts |
  | Perform bulk actions | Delete products, pause/activate campaigns |

  ![Preview of the index pattern](/assets/templated-apis-screenshots/admin/patterns/index-example.png)

  This pattern uses `Badge`, `Box`, `Button`, `Clickable`, `Grid`, `Heading`, `Image`, `Link`, `Paragraph`, `Section`, `Stack`, and `Table` components.

  ---

  ## Design guidelines
  Design your index page so users can organize and take action on resource objects.

  ### Navigation

  * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
  * Offer users clear and predictable action labels.

  ---

  ### Layout

  * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
  * For resource index pages, use a full-width page. This is helpful when users are dealing with lists of data that have many columns.

  ---

  <style>
          div[class*="CodeBlock-module-CodeBlock_"] {
        max-height: calc(100vh - 400px) !important;
    }
    div[class*="Tabs-module-TabsContent_"] {
      overflow: auto !important;
    }
    div[class*="Screenshot-module-Screenshot_"] {
      display: none !important;
    }
  </style>
[View Index](https://shopify.dev/docs/api/app-home/patterns/index)

## Index table

An index table displays a collection of objects of the same type, like orders or products. The main job of an index table is to help merchants get an at-a-glance of the objects to perform actions or navigate to a full-page representation of it.
  | Used to | Examples |
  | --- | --- |
  | Display collections of similar objects | Products, orders, customers, discounts |
  | Perform bulk actions | Delete products, pause/activate campaigns |
  ---

  
[View Index table](https://shopify.dev/docs/api/app-home/patterns/index-table)

## Interstitial nav

Interstitial navigation is used to connect merchants to deeper pages—such as settings, features, or resources—within a section of your app. It helps keep navigation clean and focused by avoiding multiple nested items, making it easier for merchants to discover and access important functionality.
 
  | Used to | Examples |
  | --- | --- |
  | Link to individual settings pages | Navigate from a settings overview to product settings or notification preferences |
  | Connect to feature-specific pages | Direct merchants from campaign overview to reporting or automation setup |
  | Guide merchants to supporting resources | Link to help documentation or integration guides from a central section |
  | Simplify navigation structure | Reduce clutter by providing access to deeper pages without multi-level menus |
  ---

[View Interstitial nav](https://shopify.dev/docs/api/app-home/patterns/interstitial-nav)

## Media card

Media cards provide a consistent layout to present visual information to merchants. Visual media is used to provide additional context to the written information it's paired with.

  | Used to | Examples |
  | --- | --- |
  | Educate merchants on key actions | Show how to connect a social account with a demo image |
  | Provide clear calls to action | Show campaign preview with a "Send campaign" button |

  ---
  

  

[View Media card](https://shopify.dev/docs/api/app-home/patterns/media-card)

## Metrics card

Metrics cards are used to highlight important numbers, statistics, or trends from your app, so merchants can quickly understand their activity and performance.
  
  
  | Used to | Examples |
  | --- | --- |
  | Show app-specific metrics | Email open rates, active subscribers |
  | Visualize user engagement | Social media followers, campaign clicks |
  ---

[View Metrics card](https://shopify.dev/docs/api/app-home/patterns/metrics-card)

## Resource list

A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.
.

  | Used to | Examples |
  | --- | --- |
  | Display collections of similar resources |  Campaigns, subscribers, social posts, templates|
  | Help merchants find and select items  | Search subscribers by email; Filter campaigns by status |
  | Perform bulk actions on selected items  | Tag subscribers; Archive campaigns; Publish selected posts |

  ---
  

  

[View Resource list](https://shopify.dev/docs/api/app-home/patterns/resource-list)

## Settings

Make settings pages easy to scan by grouping related information in a logical order. For complex or lengthy settings, organize content into distinct, themed sections that link to their own pages.
  | Used to | Examples |
  | --- | --- |
  | Find and change app settings | Membership settings, app appearance, set up theme blocks |

  ![Preview of the settings pattern](/assets/templated-apis-screenshots/admin/patterns/settings-example.png)

  This pattern uses `Box`, `Button`, `ChoiceList`, `Clickable`, `Divider`, `Grid`, `Heading`, `Icon`, `Paragraph`, `Section`, `Select`, `Stack`, and `TextField` components.

  ---

  ## Design guidelines
  Design scannable settings pages with groups of related information placed in logical order.

  ### Navigation

  * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
  * Offer users clear and predictable action labels.

  ---

  ### Visual design

  Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.

  * Use looser spacing for low-density layouts. Use tighter spacing for high-density layouts.
  * Use high-resolution photos and images to ensure a professional, high-quality experience.

  ---

  <style>
    div[class*="CodeBlock-module-CodeBlock_"] {
      max-height: calc(100vh - 80px) !important;
    }
    div[class*="Tabs-module-TabsContent_"] {
      overflow: auto !important;
    }
    div[class*="Screenshot-module-Screenshot_"] {
      display: none !important;
    }
  </style>
[View Settings](https://shopify.dev/docs/api/app-home/patterns/settings)

## Setup guide

Setup guide provides an interactive checklist to guide merchants through essential onboarding or configuration tasks. Progress is tracked visually, helping merchants complete all required steps and understand what remains.
  | Used to | Examples |
  | --- | --- |
  | Onboard merchants | Initial app setup |
  | Track completion of multi-step processes | Necessary setup steps |
  ---

[View Setup guide](https://shopify.dev/docs/api/app-home/patterns/setup-guide)

