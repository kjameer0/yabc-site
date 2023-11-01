import homeData from 'page-data/homeData.json';
const exportImgObj: Record<string, Record<string, string>> = {};

const imgObj: Record<string, string> = {};
// console.log(import.meta.url, 'hi')
//this function shuld take the source
export async function importAllPageImagesFromDirectory(
  dirName: string,
  imgObj: Record<string, string>
) {
  const newObj: Record<string, string> = {};
  const modules = await import.meta.glob('./home/*');
  for(const path in modules) {
    // console.log(path)
  }
  // console.log(modules)

return modules;
}
importAllPageImagesFromDirectory('home', homeData.imgObj);
