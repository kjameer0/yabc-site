import { Location } from "react-router-dom";
//handle hashes in url when url changes
export function pageNavigationHandler(pageId: string, location: Location) {
  //currentPage is used to jump to top of page
  const currentPage = document.getElementById(pageId);
  //element located at the hash in url
  const elementScrolledTo = location.hash? document.getElementById(location.hash.slice(1)) : null;
  //jump to top of page if no hash
  if (currentPage && !elementScrolledTo) {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }
  //jump to section anchor if there is a hash
  if (location.hash.length > 0 && elementScrolledTo) {
    elementScrolledTo.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
