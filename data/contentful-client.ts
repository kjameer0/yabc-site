import pkg from 'contentful';
import * as dotenv from 'dotenv';

dotenv.config();
const { createClient } = pkg;
export const client = createClient({
  space: process.env.SPACE_KEY as string,
  accessToken: process.env.API_KEY as string,
});


