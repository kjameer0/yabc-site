import { Entry, Asset } from 'contentful';
import {
  TypePageFields,
  TypePageSkeleton,
  TypeParagraph,
  TypeHeader,
  isTypeHeader,
  isTypeParagraph,
  TypePage,
  isTypeListText,
  TypeHeaderFields,
} from 'types/contentfulTypes';

export type sectionObjType = {
  headers: Record<string, { mainHeading: string; subHeading: string | undefined }>;
  lists: Record<string, { listContent: string[] }>;
  paragraphs: Record<string, { content: string }>;
};

export type PageDataType = Entry<TypePageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
export function generateImageObject(data: PageDataType) {
  try {
    //make sure images is not undefined
    const images = data.fields.images || [];
    //throw error if undefined
    if (!data.fields || images.length === 0) {
      throw new ReferenceError('images undefined');
    }
    //images are stored with their title as the key and url as the value
    const imgObj: Record<string, string> = {};
    images.forEach((img) => {
      //make sure image properties exist
      if (img !== undefined && img.fields && img.fields.title) {
        const name: string = img.fields.title;
        //make object key title of the image
        //make object value url
        imgObj[name.toLowerCase()] =
          img?.fields?.file?.url !== undefined ? 'https:' + img.fields.file.url : '';
      }
    });
    return imgObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}

export function generateSectionsObject(data: PageDataType) {
  try {
    //make sure sections is not undefined
    if (data.fields.sections === undefined) {
      throw new ReferenceError('sections undefined');
    }
    const sections = data.fields.sections;
    //sections are stored with their title as the key and content objects as values
    const sectionObj: sectionObjType = {lists: {}, headers: {}, paragraphs: {}};
    sections.forEach((section) => {
      //make sure section title exists
      if (section === undefined || section.fields === undefined) {
        throw new ReferenceError('no content');
      }
      const title = section.fields.title;
      if (typeof title === 'object' || title === undefined) {
        throw new ReferenceError('no content');
      }
      //figure out what type of content this section might be
      //it could be a list, header, or paragraph
      if (isTypeHeader(section)) {
        const mainHeading = section.fields.mainHeading;
        const subHeading = section.fields.subHeading;
        if (typeof mainHeading === 'object' || typeof subHeading === 'object') {
          throw new ReferenceError('no content');
        }
        const content = { mainHeading, subHeading };
        sectionObj.headers[title] = content;
      } else if (isTypeParagraph(section)) {
        //paragraphs only have one field: content
        const text = section.fields.content;
        if (typeof text === 'object' || text === undefined) {
          throw new ReferenceError('no paragraph content');
        }
        const content = { content: text };
        sectionObj.paragraphs[title] = content;
      } else if (isTypeListText(section)) {
        const content = section.fields.listContent;
        if (!Array.isArray(content) || content === undefined) {
          throw new ReferenceError('no list content');
        }
        const listContent = { listContent: content };
        sectionObj.lists[title] = listContent;
      }
    });
    return sectionObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}


