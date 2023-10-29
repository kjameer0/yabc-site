import { getBannerText } from './contentful-api-functions/bannerText.js';
import { getSinglePageData } from './contentful-api-functions/pageContent.js';
import { writeFile } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { errorGenerator } from '../src/utils/error.js';
import * as imageDownloader from 'image-downloader';
import { generateImageObject, generateSectionsObject } from './contentful/type-functions.js';
const tu = generateImageObject;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const DATA_DIRECTORY = 'src/page-data';
const ASSET_DIRECTORY = 'src/build-assets';

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

async function writePageData(
  contentfulId: string,
  pageDataFileName: string,
  pageAssetPath: string
) {
  try {
    const pathToPipeImages = path.resolve(ASSET_DIRECTORY, pageAssetPath);
    const pageData = await getSinglePageData(contentfulId);
    if (!pageData) {
      throw new ReferenceError('No Page Data.');
    }
    //rewrite pageData to the correct image urls
    const sectionObj = generateSectionsObject(pageData);
    const contentfulImgObj = generateImageObject(pageData);
    if (!contentfulImgObj || !sectionObj) {
      let errorLocation = '';
      if (!contentfulImgObj) {
        errorLocation += ' images';
      }
      if (!sectionObj) {
        errorLocation += ' sections';
      }
      throw new ReferenceError(
        `writePageData function does not have the following: ${errorLocation}`
      );
    }
    const imgObj = await downloadPageImagesToAssetDirectory(pathToPipeImages, contentfulImgObj);
    const stringifiedPageData = JSON.stringify({ sectionObj, imgObj });
    const pathName = path.join(DATA_DIRECTORY, pageDataFileName) + '.json';
    writeFile(pathName, stringifiedPageData, (err) => {
      if (err) {
        throw new Error('Page Data failed in' + pageDataFileName);
      }
    });
  } catch (error) {
    errorGenerator(error);
  }
}
async function downloadSingleImage(url: string, imageDirectory: string, name: string) {
  const fileExtension = '.' + url.split('.').pop() || '';
  const finalFilePath = path.resolve(ASSET_DIRECTORY, imageDirectory, name+fileExtension);
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
async function downloadPageImagesToAssetDirectory(
  targetDirectory: string,
  imgObj: Record<string, string>
) {
  for (const imgName in imgObj) {
    const imgUrl = imgObj[imgName];
    const downloadedImagePath = await downloadSingleImage(imgUrl, targetDirectory, imgName);
    //cut out non
    imgObj[imgName] = 'src' + path.sep + downloadedImagePath.split(path.sep + 'src' + path.sep)[1];
  }
  return imgObj;
}

await writeBannerText();
await writePageData('7yhGH9U8xAnRRgnC76CcAC', 'homeData', 'home');

