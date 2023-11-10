import { getBannerText } from './contentful-api-functions/bannerText.js';
import {
  getSinglePageData,
  getStaffData,
  getAllCarousels,
} from './contentful-api-functions/pageContent.js';
import { writeFile } from 'node:fs';
import path from 'path';
import { errorGenerator } from '../src/utils/error.js';
import * as imageDownloader from 'image-downloader';
import { Entry } from 'contentful';
import { TypeCarouselSkeleton } from './contentful/contentful-types.js';
import {
  generateImageObject,
  generateSectionsObject,
  PageDataType,
  sectionObjType,
  StaffMemberDataType,
} from './contentful/type-functions.js';

const DATA_DIRECTORY = 'src/page-data';
const ASSET_DIRECTORY = 'src/assets/images/build-assets';

//function that grabs banner text and awaits completion
async function writeBannerText() {
  try {
    const bannerData = await getBannerText();
    const bannerTextStringified = JSON.stringify({ bannerText: bannerData || '' });
    const pathName = path.join(DATA_DIRECTORY, 'bannerData.json');
    writeFile(pathName, bannerTextStringified, (err) => {
      if (err) {
        throw new Error('Banner file writing failed');
      }
    });
    return bannerData;
  } catch (error) {
    errorGenerator(error);
  }
}
function addFileDownloadsFromSectionObjToImgObj(
  sectionObj: sectionObjType,
  imgObg: Record<string, string>
) {
  const { buttons } = sectionObj;
  for (const buttonName in buttons) {
    const file = buttons[buttonName].file;
    if (file === undefined) {
      continue;
    }
    imgObg[buttonName] = file;
  }
  return imgObg;
}
async function writePageData(
  contentfulId: string,
  pageDataFileName: string,
  pageAssetPath: string
) {
  try {
    const pathToPipeImages = path.resolve(ASSET_DIRECTORY, pageAssetPath);
    const pageData = await getSinglePageData(contentfulId);
    const sectionObj = pageData && generateSectionsObject(pageData as PageDataType);
    const contentfulImgObj = pageData && generateImageObject(pageData as PageDataType);
    if (!pageData || !sectionObj || !contentfulImgObj) {
      throw new ReferenceError('Error retrieving page data, sectionsm or images.');
    }
    addFileDownloadsFromSectionObjToImgObj(sectionObj, contentfulImgObj);
    const imgObj = await downloadPageImagesToAssetDirectory(pathToPipeImages, contentfulImgObj);
    const stringifiedPageData = JSON.stringify({ sectionObj, imgObj });
    const pathName = path.join(DATA_DIRECTORY, pageDataFileName) + '.json';
    writeFile(pathName, stringifiedPageData, (err) => {
      if (err) {
        throw new Error('Page Data failed in' + pageDataFileName);
      }
    });
  } catch (error) {
    console.error('page')
    errorGenerator(error);
  }
}
async function downloadSingleImage(url: string, imageDirectory: string, name: string) {
  const fileExtension = '.' + url.split('.').pop() || '';
  const finalFilePath = path.resolve(ASSET_DIRECTORY, imageDirectory, name + fileExtension);
  //add https: to url name if it doesnt have it
  //urls from contentful sometimes come without https:
  url = url.slice(0, 6) === 'https:' ? url : 'https:' + url;
  await imageDownloader.image({
    url: url,
    dest: finalFilePath,
    extractFilename: false,
  });
  return finalFilePath;
}

async function writeStaffImages() {
  try {
    const staffData = await getStaffData();
    const pathToPipeImages = path.resolve(ASSET_DIRECTORY, 'staff');
    if (!staffData) {
      throw new ReferenceError('staff data not found ');
    }
    for (const roleName in staffData) {
      const staffMemberArrayByCategory: StaffMemberDataType[] = staffData[roleName];
      const pathToCategory = path.resolve(pathToPipeImages, roleName);
      for await (const staffMemberData of staffMemberArrayByCategory) {
        await downloadSingleImage(
          staffMemberData.imgUrl,
          pathToCategory,
          staffMemberData.name.replace(/\s/g, '_')
        );
      }
    }
    const pathName = path.join(DATA_DIRECTORY, 'staffMemberData') + '.json';
    writeFile(pathName, JSON.stringify(staffData), (err) => {
      if (err) {
        throw new Error('Page Data failed in' + 'StaffMem');
      }
    });
  } catch (error) {
    errorGenerator(error);
  }
}
async function downloadPageImagesToAssetDirectory(
  targetDirectory: string,
  imgObj: Record<string, string>
) {
  for (const imgName in imgObj) {
    const imgUrl = imgObj[imgName];
    const downloadedImagePath = await downloadSingleImage(imgUrl, targetDirectory, imgName);
    //turn absolute path into relative path for downloaded image and make it / separated. src/... is needed for vite to handle images
    imgObj[imgName] = downloadedImagePath
      .split(path.sep + 'src' + path.sep)[1]
      .split(path.sep)
      .join('/');
  }
  return imgObj;
}

async function writeGraduateCarousels(
  carouselArray: Entry<TypeCarouselSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]
) {
  try {
    const graduateCarouselBasePath = path.resolve(ASSET_DIRECTORY, 'carousels/graduateCarousels');
    let carouselNumber = 1;
    const startYear = carouselArray[0].fields.year;
    for (const carousel of carouselArray) {
      const imageArray = carousel.fields.carouselImages;
      const carouselFinalPath = path.resolve(
        graduateCarouselBasePath,
        `graduates${carouselNumber}`
      );
      for (let index = 0; index < imageArray.length; index++) {
        const currentImageUrl = imageArray[index]?.fields.image?.fields.file?.url;
        if (!currentImageUrl) {
          throw new ReferenceError('No url for graduate image');
        }
        await downloadSingleImage(currentImageUrl, carouselFinalPath, `graduateImg${index}`);
      }
      carouselNumber++;
    }
    writeFile(
      path.resolve(DATA_DIRECTORY, 'graduateCarouselsData.json'),
      JSON.stringify({ startYear: startYear }),
      (err) => {
        if (err) {
          throw new Error('failed to write graduate carousel data');
        }
      }
    );
  } catch (error) {
    errorGenerator(error);
  }
}
async function writeQuoteCarousel(
  quoteCarousel: Entry<TypeCarouselSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined,
  directoryName: string
) {
  const carouselBasePath = path.resolve(ASSET_DIRECTORY, 'carousels/' + directoryName);
  if (!quoteCarousel) {
    throw new ReferenceError('missing' + directoryName);
  }
  const imageArray = quoteCarousel.fields.carouselImages;
  let index = 0;
  const quoteJSON: { quotes: string[] } = { quotes: [] };
  for (const carouselImage of imageArray) {
    const currentImageUrl = carouselImage?.fields.image?.fields.file?.url;
    if (!currentImageUrl) {
      throw new ReferenceError('No url for graduate image');
    }
    await downloadSingleImage(currentImageUrl, carouselBasePath, `${directoryName}Img${index}`);
    quoteJSON.quotes.push(carouselImage.fields.quoteText || '');
    index++;
  }
  writeFile(
    path.resolve(DATA_DIRECTORY, directoryName + 'Data.json'),
    JSON.stringify(quoteJSON),
    (err) => {
      if (err) {
        throw new Error('failed to write quote carousel quotes');
      }
    }
  );
}

const carouselObj = await getAllCarousels();
await writeGraduateCarousels(carouselObj?.graduateCarousels || []);
await writeQuoteCarousel(carouselObj?.quoteCarousel, 'quoteCarousel');
await writeQuoteCarousel(carouselObj?.studentCornerCarousel, 'studentCornerCarousel');
await writeStaffImages();
await writeBannerText();
await writePageData('7yhGH9U8xAnRRgnC76CcAC', 'homeData', 'home');
await writePageData('2UE2gLOJhURbCW6YffSfPQ', 'aboutData', 'about');
await writePageData('7GJQyJLELJDKG8EWm744KA', 'admissionsData', 'admissions');
await writePageData('7g9C5Xa1vO345Eim31HZaY', 'counselorCornerData', 'counselorCorner');
await writePageData('4PFJseAKeaXR0SerpDod02', 'parentsData', 'parents');
await writePageData('2GsVyoz0lPdUkLQKV30aW5', 'sharedAdmissionsData', 'sharedAdmissions');
await writePageData('4PVhqvB90jCz42mULpBZeC', 'staffData', 'staff');
await writePageData('4uRsZsFnHcwcxbOW543PiU', 'studentCornerData', 'studentCorner');
await writePageData('4ull73PKgAqB37xT6SkdwB', 'teacherHubData', 'teacherHub');
await writePageData('66NBO5u9RxH1aZmxbEObDF', 'contactData', 'contact');
await writePageData('7dfBJlHAwdkBjAGwHz7dmV', 'informationRequestFormData', 'informationRequestForm');
await writePageData('6t2NSllTkjn6ThupQQ9d9g', 'adminCounselorFormData', 'adminCounselorForm');
await writePageData('4nugErvcvdgZUewlAhwkvg', 'studentSupportActivitiesData', 'studentSupportActivities');

