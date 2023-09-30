export function generateCarouselYearList() {
  const CURRENTDATE = new Date();
  let currentYear = CURRENTDATE.getFullYear();
  const MINIMUMYEAR = 2020;
  const carouselList = [];
  if (CURRENTDATE.getMonth() > 6) {
    carouselList.push(currentYear);
  }
  while (currentYear > MINIMUMYEAR) {
    carouselList.push(--currentYear);
  }
  return carouselList.reverse();
}
