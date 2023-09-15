import exp from 'constants';
import { getPageData } from './contentful-functions';
import { TypePageFields, isTypePage } from 'types/contentfulTypes';
jest.mock('./utils/contentful-functions.ts')
describe('data fetching functions', () => {
  // Test for the add function
  test('data is correctly retrieved for home page', async () => {
    const pageData = await getPageData('7yhGH9U8xAnRRgnC76CcAC');
    if (!pageData) throw 'no data';
    console.log(pageData)
    expect(pageData.title).toBe('WASHINGTON IRVING YABC');
  });

  // Additional test cases can be added here for other functions in the math module
});
