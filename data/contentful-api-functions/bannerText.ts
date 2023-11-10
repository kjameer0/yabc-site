import { TypeBannerTextSkeleton } from '../contentful/contentful-types';
import { client } from '../contentful-client.js';
import { errorGenerator } from '../../src/utils/error.js';
export async function getBannerText() {
  try {
    const response = await client.getEntry<TypeBannerTextSkeleton>('nNVYy3RFpDviJNRD8bvZy');
    if (!response) {
      throw new ReferenceError('no banner text found');
    }
    const bannerData = response.fields.text;
    return bannerData;
  } catch (error: unknown) {
    errorGenerator(error);
  }
}
