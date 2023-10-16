import { getBannerText } from './contentful-client.js';
import { writeFile } from 'node:fs';
import path from 'path';
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
await writeBannerText();
