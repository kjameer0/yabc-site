import { createClient } from 'contentful';
import { TypeBannerText, TypeBannerTextSkeleton, TypePageSkeleton } from 'types/contentfulTypes';
import { errorGenerator } from './error';
export const client = createClient({
  space: import.meta.env.VITE_SPACE_KEY as string,
  accessToken: import.meta.env.VITE_API_KEY as string,
});

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
export async function getPageData(id: string) {
  try {
    const pageResponse = await client.getEntry<TypePageSkeleton>(id);
    if (!pageResponse) {
      throw new ReferenceError('no banner text found');
    }
    return pageResponse.fields;
  } catch (error) {
    errorGenerator(error);
  }
}


