import { getBannerText } from './contentful-client.js';
import { writeFile } from 'node:fs';
import path from 'path';
import axios from 'axios';
import { errorGenerator } from '../src/utils/error.js';
// console.log(
//   (async () => {
//     getBannerText().then((data) => {
//       const pathName = './bannerData.json';
//       const file = createWriteStream(pathName);
//       const dataObj = JSON.stringify({ text: data || '' });
//       writeFile('data/bannerData.json', dataObj, (err) => {
//         if (err) {
//           console.error(err);
//         }
//         // file written successfully
//       });
//     });
//     //write data to file
//   })()
// );

//function that grabs banner text and awaits completion
async function writeBannerText() {
  try {
    const bannerData = await getBannerText();
    const bannerTextStringified = JSON.stringify({ bannerText: bannerData || '' });
    const pathName = 'src/pageData/bannerData.json';
    writeFile(pathName, bannerTextStringified, (err) => {
      if (err) {
        console.error(err);
      }
    });
    return bannerData;
  } catch (error) {
    errorGenerator(error);
  }
}
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

// Example usage:
const apiUrl = 'https://example.com/large-file.zip'; // Replace with your streaming API endpoint
const outputPath = 'output.zip';


await writeBannerText();
