import { getBannerText } from './contentful-api-functions/bannerText.js';
import { getSinglePageData } from './contentful-api-functions/pageContent.js';
import { writeFile, createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { errorGenerator } from '../src/utils/error.js';
import * as imageDownloader from 'image-downloader';
import { dir } from 'node:console';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const DATA_DIRECTORY = 'src/pageData';


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

async function writePageData(contentfulId: string, fileName: string) {
  try {
    const pageData = await getSinglePageData(contentfulId);
    if (!pageData) {
      throw new ReferenceError('No Page Data.');
    }
    const stringifiedPageData = JSON.stringify(pageData);
    const pathName = path.join(DATA_DIRECTORY, fileName) + '.json';
    writeFile(pathName, stringifiedPageData, (err) => {
      if (err) {
        throw new Error('Page Data failed in' + fileName);
      }
    });
  } catch (error) {
    errorGenerator(error);
  }
}
const imagePath = path.resolve(dirname, '../', 'src/pageData')
imageDownloader.image({
  url: 'https://images.ctfassets.net/jhdk2rr72yfb/FEdtzQeuK0nHew2YEF7Z4/ee07cdff67ed367a68858111f823a5a8/School_Facade.webp',
  dest: imagePath,
  // extractFilename: false
});
// async function fetchDataWithStream(url, outputPath) {
//   try {
//     const response = await axios.get(url, {
//       responseType: 'stream', // Specify 'stream' as the response type
//     });
//     if(!response.ok)

//   } catch (error) {
//     throw error;
//   }
// }

await writeBannerText();
await writePageData('7yhGH9U8xAnRRgnC76CcAC', 'homeData');
