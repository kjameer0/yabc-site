import pkg from 'contentful';
import * as dotenv from 'dotenv';
import { TypeBannerTextSkeleton } from '../src/types/contentfulTypes.js';
import { errorGenerator } from '../src/utils/error.js';
dotenv.config();
const { createClient } = pkg;
export const client = createClient({
  space: process.env.SPACE_KEY as string,
  accessToken: process.env.API_KEY as string,
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
