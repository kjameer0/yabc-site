import { createClient } from 'contentful';
import { TypeBannerText, TypeBannerTextSkeleton } from 'types/contentfulTypes';
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
    if (error instanceof ReferenceError) {
      console.error(error.message);
    } else {
      console.error('unknown error');
    }
  }
}