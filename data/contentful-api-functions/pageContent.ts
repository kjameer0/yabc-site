import { TypePageSkeleton } from '../../src/types/contentfulTypes.js';
import { client } from '../contentful-client.js';
import { errorGenerator } from '../../src/utils/error.js';
import {
  generateImageObject,
  sectionObjType,
  generateSectionsObject,
  generateImageObjectCarousel,
  generateStaffCategoryObject,
  StaffMemberDataType,
} from '../../src/utils/contentfulTypeFunctions.js';

export const fetchSinglePageData = async (contentfulId: string) => {
  try {
    const response = await client.withoutUnresolvableLinks.getEntry<TypePageSkeleton>(contentfulId);
    if (!response) {
      throw new ReferenceError('no page data found');
    }
    const imgObj = generateImageObject(response) as Record<string, string>;
    const sectionObj = generateSectionsObject(response) as sectionObjType;
    return {imgObj, sectionObj}
  } catch (error) {
    errorGenerator(error);
  }
};
