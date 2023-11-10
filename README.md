# Washington Irving YABC
This is the source code for www.washingtonirvingyabc.org. It is built with React, TypeScript, styled components, and Vite. Please contact Khalid Jameer to become a collaborator if you are assigned to work on this site.
[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/kjameer0/yabc-site/main)

## Contentful
Changes made in Contentful (contact Khalid Jameer or the site administrator to become a collaborator on Contentful if you are assigned to work on this site) will trigger a Contentful web hook that will then trigger a github action that rebuilds the site and uploads it to the google cloud storage bucket associated with the website.
## Github Actions
Github actions allow freshly updated content from contentful to trigger a rebuild of the entire site and have that rebuild be uploaded to GCP(Google Cloud Platform).
### SECRETS

## Google Cloud Storage Bucket
The site administrator should have the ability to make to add new collaborators to edit content.
## HMAC key
Google Cloud offers service accounts (https://cloud.google.com/storage/docs/authentication/hmackeys) that allow the github actions to work.
In order to have
## Build Pipeline
Whenever
## Routing
## CSS

## File Structure
Every page and major component has the following directory structure:
1. Main component file - main functional React component
2. Styled wrapper file - styled component wrapper that contains localized styles for component
3. Index file - exports final component

## Locations of Common Places For Time Sensitive Edits
There are pieces of information(class start dates, registration windows) that are subject to more frequent changes than the rest pf the content. The following files contain that type of information:
1. App.tsx:
  - top banner text
2. HomePage.tsx:
  - Registration start and end dates
  - Class begin dates
3. About.tsx:
  - Registration start and end dates
  - Graduate carousel by year
4. Admissions.tsx
  - Who application materials are submitted to
5. Parent.tsx
  - Picture from latest parent night with date
6. SharedAdmissions.tsx
  - Who application materials are submitted to
7. StudentCorner.tsx
  - Activities Carousel

## Images
The assets folder has all of the images for the project. Every page with images has its own image folder. There is a separate folder for carousel images, and each carousel should have its own folder that has an index.ts file. That file will import all of the images and export an array of those images.

## Styles
As mentioned above, each component has its own styled component wrapper that stores the localized styles for that component.

Each component has its main styles and a media query to transition to desktop view. That media query is mostly for major layout shifts.

For the most part, styles read in order of appearance on screen, and are named based on containers they reside in.

As a general rule, pages are styled with flex layout, keeping sections centered in the main tag.

## Email
In the contact pages and information request page, HeroTofu is used to submit messages to their proper destination. The useContactForm hook form HeroTofu in the Contact Form page accomplishes the form post action for all forms.

## Navigation
There are two nav bars, changes to navigation/routing should be reflected in both. Make sure that the JSX from one matches the other in structure for the routes, because they are not generalized. Adjustments have to be transported deliberately. So creating a new pages means:
1. Creating component with index.ts, PageName.tsx, StyledPageName.tsx
2. Adding route to router in main.tsx
3. Adding route where it's supposed to go in both Drawer.tsx and SideNavBar.tsx
4. add sub anchors to utils-NavBar.tsx





