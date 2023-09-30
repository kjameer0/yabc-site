import { generateCarouselYearList } from './date-utils';
describe('add function', () => {
  // Test case 1: Adding two positive numbers
  it('should correctly display current year', () => {
    expect(generateCarouselYearList()[0]).toBe(2020);
  });
});
