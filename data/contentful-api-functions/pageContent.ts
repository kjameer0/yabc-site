import {
  TypePageSkeleton,
  TypeStaffMemberSkeleton,
  TypeCarouselSkeleton,
} from '../../src/types/contentfulTypes.js';
import { client } from '../contentful-client.js';
import { errorGenerator } from '../../src/utils/error.js';
import {
  generateImageObject,
  sectionObjType,
  generateSectionsObject,
  generateImageObjectCarousel,
  generateStaffCategoryObject,
  StaffMemberDataType,
} from '../contentful/type-functions.js';

export const getSinglePageData = async (contentfulId: string) => {
  try {
    const response = await client.withoutUnresolvableLinks.getEntry<TypePageSkeleton>(contentfulId);
    if (!response) {
      throw new ReferenceError('no page data found');
    }
    return response;
  } catch (error) {
    errorGenerator(error);
  }
};

export const getStaffData = async () => {
  try {
    const response = await client.withoutUnresolvableLinks.getEntries<TypeStaffMemberSkeleton>({
      content_type: 'staffMember',
    });
    const generatedStaffObj = generateStaffCategoryObject(response.items);
    if (!generatedStaffObj) {
      throw new ReferenceError('no staff members');
    }
    return generatedStaffObj;
  } catch (error) {
    errorGenerator(error);
  }
};

export const getGraduateCarousel = async () => {
  try {
    const response = await client.withoutUnresolvableLinks.getEntries<TypeCarouselSkeleton>({
      content_type: 'carousel',
    });
    //get the 3 most recent graduate carousels
    const graduateCarousels = response.items
      .filter((carousel) => {
        return carousel.fields.title?.includes('graduate');
      })
      .slice(-3);
    const quoteCarousel = response.items.find(
      (carousel) => carousel.fields.title === 'quoteCarousel'
    );
    const studentCornerCarousel = response.items.find((carousel) => carousel.fields.title === 'studentCornerCarousel');
    return {studentCornerCarousel, graduateCarousels: graduateCarousels, quoteCarousel}
  } catch (error) {
    errorGenerator(error);
  }
};
