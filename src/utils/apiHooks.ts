import { useState, useEffect } from 'react';
import { client } from './contentful-api-functions';
import {
  TypePageSkeleton,
  TypeCarouselImage,
  TypePageFields,
  TypePage,
  TypeCarouselListSkeleton,
  TypeCarouselSkeleton,
  TypeCarouselList,
  TypeCarousel,
  TypeCarouselFields,
  TypeCarouselImageFields,
  TypeStaffMemberSkeleton,
  TypeStaffMemberFields,
} from 'types/contentfulTypes';
import {
  generateImageObject,
  sectionObjType,
  generateSectionsObject,
  generateImageObjectCarousel,
  generateStaffCategoryObject,
  StaffMemberDataType,
} from './contentfulTypeFunctions';
import { errorGenerator } from './error';

export function useGetPageData(contentfulId: string) {
  const [imgObj, setImgObj] = useState({} as Record<string, string>);
  const [sectionObj, setSectionObj] = useState({} as sectionObjType);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Function to fetch data from the Contentful API
    const fetchData = async () => {
      try {
        const response = await client.withoutUnresolvableLinks.getEntry<TypePageSkeleton>(
          contentfulId
        );
        if (!response) {
          throw new ReferenceError('no page data found');
        }
        setImgObj(generateImageObject(response) as Record<string, string>);
        setSectionObj(generateSectionsObject(response) as sectionObjType);
        setLoading(false);
      } catch (error) {
        errorGenerator(error);
      }
    };
    //pageData state will be set
    fetchData();
  }, []);
  return { imgObj, sectionObj, loading };
}

export function useGetCarousels(contentfulId: string) {
  const [carousels, setCarousels] = useState({});
  useEffect(() => {
    // Function to fetch data from the Contentful API
    const fetchData = async () => {
      try {
        const response = await client.withoutUnresolvableLinks.getEntry<TypeCarouselListSkeleton>(
          contentfulId
        );
        if (!response || !response.fields.carousels) {
          throw new ReferenceError('no carousels found');
        }
        setCarousels(response.fields.carousels);
      } catch (error) {
        errorGenerator(error);
      }
    };
    //pageData state will be set
    fetchData();
  }, []);
}
type CarouselItem = {
  imgUrl: string;
  quoteText: string;
};
export function useGetSingleCarousel(contentfulId: string) {
  const [carousel, setCarousel] = useState<CarouselItem[]>([]);
  useEffect(() => {
    // Function to fetch data from the Contentful API
    const fetchData = async () => {
      try {
        const response = await client.withoutUnresolvableLinks.getEntry<TypeCarouselSkeleton>(
          contentfulId
        );
        if (!response) {
          throw new ReferenceError('no carousels found');
        }
        const carouselImageArray = generateImageObjectCarousel(response);
        if (carouselImageArray === undefined) {
          throw new ReferenceError('no carousels found');
        }
        setCarousel(carouselImageArray);
      } catch (error) {
        errorGenerator(error);
      }
    };
    //pageData state will be set
    fetchData();
  }, []);
  return carousel;
}

export function useGetCarouselByYear(year: string) {
  const [currentCarousel, setCurrentCarousel] = useState<CarouselItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.withoutUnresolvableLinks.getEntries<TypeCarouselSkeleton>({
          content_type: 'carousel',
          'fields.year': year,
        });
        if (!response) {
          throw new ReferenceError('no carousels found');
        }
        const carouselImageArray = generateImageObjectCarousel(response.items[0]);
        if (carouselImageArray === undefined) {
          throw new ReferenceError('no carousels found');
        }
        setCurrentCarousel(carouselImageArray);
      } catch (error) {
        errorGenerator(error);
      }
    };
    fetchData();
  }, [year]);
  return currentCarousel;
}

export function useGetStaffImages() {
  const [staffObj, setStaffObj] = useState<Record<string, StaffMemberDataType[]>>({});
  const [isStaffLoading, setIsStaffLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchStaff = async () => {
        const response = await client.withoutUnresolvableLinks.getEntries<TypeStaffMemberSkeleton>({
          content_type: 'staffMember',
        });
        const generatedStaffObj = generateStaffCategoryObject(response.items);
        if (!generatedStaffObj) {
          throw new ReferenceError('no staff members');
        }
        setStaffObj(generatedStaffObj);
        setIsStaffLoading(false);
      };
      fetchStaff();
    } catch (error) {
      errorGenerator(error);
    }
  }, []);
  return { staffObj, isStaffLoading };
}



//this function is deciding which meta glob of imports to return and returning an imgobj
export async function createPageImgObj(pageName: string) {
  try {
    let pageGlob;
    switch (pageName) {
      case 'home':
        pageGlob = await import.meta.glob('../assets/images/build-assets/home/*');
        break;
      case 'about':
        pageGlob = await import.meta.glob('../assets/images/build-assets/about/*');
        break;
      case 'contact':
        pageGlob = await import.meta.glob('../assets/images/build-assets/contact/*');
        break;
      case 'contactForm':
        pageGlob = await import.meta.glob('../assets/images/build-assets/contactForm/*');
        break;
      case 'admissions':
        pageGlob = await import.meta.glob('../assets/images/build-assets/admissions/*');
        break;
      case 'counselorCorner':
        pageGlob = await import.meta.glob('../assets/images/build-assets/counselorCorner/*');
        break;
      case 'forms':
        pageGlob = await import.meta.glob('../assets/images/build-assets/forms/*');
        break;
      case 'parents':
        pageGlob = await import.meta.glob('../assets/images/build-assets/parents/*');
        break;
      case 'sharedAdmissions':
        pageGlob = await import.meta.glob('../assets/images/build-assets/sharedAdmissions/*');
        break;
      case 'staff':
        pageGlob = await import.meta.glob('../assets/images/build-assets/staff/*');
        break;
      case 'studentCorner':
        pageGlob = await import.meta.glob('../assets/images/build-assets/studentCorner/*');
        break;
      case 'teacherHub':
        pageGlob = await import.meta.glob('../assets/images/build-assets/teacherHub/*');
        break;
      default:
        throw new ReferenceError('invalid page name to retrieve images');
    }
    return pageGlob as Record<string, () => Promise<{ default: string }>>;
  } catch (error) {
    errorGenerator(error);
  }
}
export function useImportPageImages(pageName:string) {
  const [imgObj, setImgObj] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchObj = async () => {
      const importedGlob = await createPageImgObj(pageName);
      const pageImgObj: Record<string, string> = {};
      for (const path in importedGlob) {
        const module = await importedGlob[path]();
        pageImgObj[extractFileNameFromUrl(path)] = module.default;
      }
      setImgObj(pageImgObj);
      setLoading(false);
      return;
    };
    fetchObj();
  }, []);
  return {imgObj, loading};
}
export function extractFileNameFromUrl(filePath: string): string {
  const splitFileName = filePath.split(/\.|\//);
  splitFileName.pop();
  return splitFileName.pop() || '';
}
