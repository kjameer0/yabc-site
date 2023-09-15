import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_KEY as string,
  accessToken: process.env.NEXT_PUBLIC_API_KEY as string,
});
