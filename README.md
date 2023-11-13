# Washington Irving YABC
This is the source code for www.washingtonirvingyabc.org. It is built with React, TypeScript, styled components, and Vite. Please contact Khalid Jameer to become a collaborator if you are assigned to work on this site.
[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/kjameer0/yabc-site/main)

## Build Pipeline
The build pipeline for this website goes like this.
  1. Content is updated in Contentful
  2. A Contentful Webhook is triggered
  3. The webhook sends a POST request to Github Actions
  4. Github Actions rebuilds the site and uploads it to the Google Cloud Storage Bucket


## Contentful
Changes made in Contentful (contact Khalid Jameer or the site administrator to become a collaborator on Contentful if you are assigned to work on this site) will trigger a Contentful webhook(Found on Contentful under Settings -> Webhooks) that will then trigger a github action that rebuilds the site and uploads it to the google cloud storage bucket associated with the website.



## Github Actions
Github actions allow freshly updated content from contentful to trigger a rebuild of the entire site and have that rebuild be uploaded to GCP(Google Cloud Platform).


### SECRETS
The most important SECRETS are:
  1. Contentful API KEY
  2. Contentful SPACE KEY
  3. GCP CREDENTIALS
Both the Contentful API key and space key can be found on Contentful under Settings -> API keys. You can create a new one if you need to as long as it is also updated on Github Actions secrets.


## Google Cloud Storage Bucket
The site administrator should have the ability to add new collaborators to edit content.

## HMAC key and service accounts
Google Cloud offers service accounts (https://cloud.google.com/storage/docs/authentication/hmackeys) that allow the github actions to work.
Make sure you are granted sufficiently high level permissions as a collaborator. Ideally whoever maintains this site should have owner permissions.
Service Accounts (https://cloud.google.com/iam/docs/service-account-overview) are used to programatically validate the Github action request to upload the website files to the storage bucket. There probably will not need to be an update to this service account, but if the credentials stop working and build actions fail, a newe service account can be created to get new credentials. ther credentials for GCP_CREDENTIALS will be JSON that has this format:
`
    {
      "type": "service_account",
      "project_id": "your-project-id",
      "private_key_id": "your-private-key-id",
      "private_key": "-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----\n",
      "client_email": "your-service-account-email@your-project-id.iam.gserviceaccount.com",
      "client_id": "your-client-id",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account-email%40your-project-id.iam.gserviceaccount.com"
    }
`


## Build script
In the data directory at the root of the project resides all of the code that downloads all of the JSON and images from Contentful that contain the content for the website.
  1. contentful
    1. contentful-types.ts -> All of the types for the contentful content models. Some of them have overrides that make them more usable so be carefule when changing them. Make sure you add this app from github to your contentful to generate new types https://github.com/marcolink/cf-content-types-generator-app
    2. type-functions -> Contains utility functions that convert raw data form contentful to the final data format that will go into the page-data directory and the build-assets directory.
  2. contentful-api-functions -> functions that interact with the CDA(Contentful Delivery API)
    1. bannerText.ts -> fetching banner text
    2. pageContent.ts -> fetches all other page content(text, images, carousels)
  3. contentful-client.ts -> initializes the connection between the script and contentful content
  4. pre-build-script.ts -> loads all data for the website and places it into page-data and build-assets directories


## Routing
This website uses React Router for SPA routing.
The list of page names with their corresponding url names are as follows:
  0. x page -> 'www.washingtonirvingyabc.org/x'
  1. home page -> ''
  2. about page -> 'about'
  3. counselor contact form page -> 'counselor-contact-form'
  4. site admin contact form page -> 'site-administrator-contact-form'
  5. counselor corner page -> 'counselor-corner'
  6. information request form page -> 'information-request-form'
  7. student support activites page -> 'student-support-activities'
  8. parents/families page -> 'parents-families'
  9. shared admissions page -> 'shared-admissions'
  10. staff directory page -> 'staff-directory'
  11. student corner page -> 'student-corner'
  12. teacher hub page -> 'teacher-hub'

  This is here because some pages are not found directly in the nav bar, so if a change needs to be made to a page not there then it helps to know what all of the page names are and where to find them.

## CSS
Styled-components are used for this website. src/main.tsx outlines a lot of the general styles for the whole project, and each page or component has a wrapper StyledPageName.tsx that has local styles.

## File Structure
Every page and major component has the following directory structure:
1. Main component file - main functional React component
2. Styled wrapper file - styled component wrapper that contains localized styles for component
3. Index file - exports final component


## Images
Most if not all of the images are .webp. Try to compress and minimize the size of any images as much as you can because the build process takes longer if the images are very large. Also, website performance can be impacted by large files.

## Styles
As mentioned above, each component has its own styled component wrapper that stores the localized styles for that component.

Each component has its main styles and a media query to transition to desktop view. That media query is mostly for major layout shifts.

For the most part, styles read in order of appearance on screen, and are named based on containers they reside in.

As a general rule, pages are styled with flex layout, keeping sections centered in the main tag.

## Email
In the contact pages and information request page, HeroTofu is used to submit messages to their proper destination. The useContactForm hook form HeroTofu in the Contact Form page accomplishes the form post action for all forms. The HeroTofu API endpoints are stored in Contentful. The site admin should have a HeroTofu login info. If not a new account cna be made and the endpoints can be changed on Contentful to send forms to the intended email address.

## Navigation
There are two nav bars, changes to navigation/routing should be reflected in both. Make sure that the JSX from one matches the other in structure for the routes, because they are not generalized. Adjustments have to be transported deliberately.

## Adjusting content

### Pages
Creating a new pages means:
1. Creating component with index.ts, PageName.tsx, StyledPageName.tsx
2. Adding route to router in main.tsx
3. Adding route where it's supposed to go in both Drawer.tsx and SideNavBar.tsx
4. add sub anchors to utils-NavBar.tsx
5. Creating an instance of a Page on Contentful.
6. Filling in page with content and copying it's entry id after publishing it.
7. Adding a new folder in assets/build-assets with the pages name in camelCase
8. going to data/prebuild-script.ts and using the writePageData function to pass it's text data to <pageName>Data and its assets to its build-asset sub-folder
9. Running npm load-cms-json to download assets and images
10. Going into utils/apiHooks and adding the name of the assets folder for the page and its route into the switch statement in createPageImgObj
11. Importing .json text content
12. Importing useImportImages and using the folder name where the images reside as the parameter when you call the function
13. The sectionObj can be destructured from the json import
14. The imgOb and loading state can be destructured from the useImportImages call
15. make sure you add the new page to the readme list of pages with its URL







