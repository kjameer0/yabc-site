import { createWriteStream } from 'node:fs';
import path from 'path';
import axios from 'axios';
import { client } from '../src/utils/contentful-api-functions.js';
import { TypePageSkeleton } from '../src/types/contentfulTypes.js';
import { errorGenerator } from '../src/utils/error.js';
import {
  sectionObjType,
  generateImageObject,
  generateSectionsObject,
} from '../src/utils/contentfulTypeFunctions.js';
import * as dotenv from 'dotenv';
dotenv.config();
console.log(errorGenerator);
// const fetchData = async (contentfulId: string) => {
//   try {
//     const response = await client.withoutUnresolvableLinks.getEntry<TypePageSkeleton>(contentfulId);
//     if (!response) {
//       throw new ReferenceError('no page data found');
//     }
//     const imgObj = generateImageObject(response) as Record<string, string>;
//     const sectionObj = generateSectionsObject(response) as sectionObjType;
//     response;
//     return { imgObj, sectionObj };
//   } catch (error) {
//     errorGenerator(error);
//   }
// };
// async function getImagesFromImgObj(imageName: string, url: string) {
//   try {
//     const response = await axios({ method: 'GET', url, responseType: 'stream' });
//     const dirPath = '../build-assets';
//     const splitUrl = url.split('.');
//     const fileExtension = '.' + splitUrl[splitUrl.length - 1];
//     const finalImagePath = path.join(dirPath, imageName + fileExtension);
//     const imgFile = createWriteStream(finalImagePath);
//     response.data.pipe(imgFile);
//   } catch (error) {
//     errorGenerator(error);
//   }
// }
// async function writeImage(imgObj: Record<string, string>, imageName: string) {
//   try {
//     const pageData = await fetchData('7yhGH9U8xAnRRgnC76CcAC');
//     if (!pageData) {
//       throw new ReferenceError('no page data');
//     }
//     const { imgObj } = pageData;
//   } catch (error) {
//     errorGenerator(error);
//   }
// }
