import { useState, useEffect, useMemo } from 'react';
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
} from '../../data/contentful/contentful-types';
import {
  generateImageObject,
  sectionObjType,
  generateSectionsObject,
  generateImageObjectCarousel,
  generateStaffCategoryObject,
  StaffMemberDataType,
} from '../../data/contentful/type-functions';
import { errorGenerator } from './error';
import { startYear } from '../page-data/graduateCarouselsData.json';

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

export function useContactForm(
  ENDPOINT: string,
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [status, setStatus] = useState<string>();
  const handleFormSubmit: React.FormEventHandler = (e) => {
    // e.preventDefault();
    setIsButtonActive(false);
    const form = e.currentTarget as HTMLFormElement;
    const injectedData: Record<string, string | number> = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = Array.from(form.elements) as HTMLFormElement[];
    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {} as Record<string, string>
      );
    Object.assign(data, injectedData);
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIsButtonActive(true);
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key].toString();
            form.appendChild(el);
          });
          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          form.setAttribute('target', '_blank');
          form.submit();
          throw new Error('Please finish the captcha challenge');
        }
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };
  return { status, handleFormSubmit };
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
      case 'informationRequestForm':
        pageGlob = await import.meta.glob('../assets/images/build-assets/informationRequestForm/*');
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
      case 'studentSupportActivities':
        pageGlob = await import.meta.glob('../assets/images/build-assets/studentSupportActivities/*');
        break;
      default:
        throw new ReferenceError('invalid page name to retrieve images');
    }
    return pageGlob as Record<string, () => Promise<{ default: string }>>;
  } catch (error) {
    errorGenerator(error);
  }
}
export function useImportPageImages(pageName: string) {
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
  return { imgObj, loading };
}
type moduleType = { default: string };
export function useImportStaffImagesbyRole() {
  const [staffMemberImgObj, setStaffObjWithImports] = useState<Record<string, string>>({});
  const [staffImagesLoading, setStaffImagesLoading] = useState(true);
  useMemo(() => {
    const adminImportPromiseList = import.meta.glob<moduleType>(
      '../assets/images/build-assets/staff/admin/*'
    );
    const counselorImportPromiseList = import.meta.glob<moduleType>(
      '../assets/images/build-assets/staff/counselor/*'
    );
    const facultyImportPromiseList = import.meta.glob<moduleType>(
      '../assets/images/build-assets/staff/faculty/*'
    );
    const missionSocietyImportPromiseList = import.meta.glob<moduleType>(
      '../assets/images/build-assets/staff/missionSociety/*'
    );
    const supportImportPromiseList = import.meta.glob<moduleType>(
      '../assets/images/build-assets/staff/support/*'
    );

    const promiseListArray = [
      adminImportPromiseList,
      counselorImportPromiseList,
      facultyImportPromiseList,
      missionSocietyImportPromiseList,
      supportImportPromiseList,
    ];
    const staffImgObj: Record<string, string> = {};
    const importImages = async () => {
      for (const promiseList of promiseListArray) {
        for (const imagePromisePath in promiseList) {
          const imgName = removeUnderScoresFromPath(
            extractStaffMemberNameFromPath(imagePromisePath)
          );
          const imageModule = await promiseList[imagePromisePath]();
          staffImgObj[imgName] = imageModule.default;
        }
      }
      setStaffObjWithImports(staffImgObj);
      setStaffImagesLoading(false);
    };
    importImages();
  }, []);
  return { staffMemberImgObj, staffImagesLoading };
}

export function extractStaffMemberNameFromPath(path: string) {
  const fileNameWithExtension = path.split('/').pop();
  if (!fileNameWithExtension) {
    return '';
  }
  const fileNameSplitbyLastPeriod = fileNameWithExtension.split(/\.(?=[^.]*$)/);
  fileNameSplitbyLastPeriod.pop();
  return fileNameSplitbyLastPeriod?.pop() || '';
}

export async function importCarouselImages(carouselName: string) {
  try {
    let carouselGlob;
    switch (carouselName) {
      case 'quoteCarousel':
        carouselGlob = import.meta.glob<moduleType>('../assets/images/build-assets/carousels');
        break;
      case 'graduate1':
        carouselGlob = import.meta.glob<moduleType>(
          '../assets/images/build-assets/carousels/graduateCarousels/graduates1/*'
        );
        break;
      case 'graduate2':
        carouselGlob = import.meta.glob<moduleType>(
          '../assets/images/build-assets/carousels/graduateCarousels/graduates2/*'
        );
        break;
      case 'graduate3':
        carouselGlob = import.meta.glob<moduleType>(
          '../assets/images/build-assets/carousels/graduateCarousels/graduates3/*'
        );
        break;
    }
    return carouselGlob;
  } catch (error) {
    errorGenerator(error);
  }
}
export function useImportGraduateCarousels() {
  const [graduateCarouselsObj, setGraduateCarouselsObj] = useState<Record<string, string[]>>({});
  const carousels = ['graduate1', 'graduate2', 'graduate3'];
  const [carouselsLoading, setCarouselsLoading] = useState(true);
  useEffect(() => {
    try {
      const importImagesAndAddToCarouselsObj = async () => {
        const importedImageArrayObj: Record<string, string[]> = {};
        let currentCarouselIdx = 0;
        for (const graduateCarouselDirectoryName of carousels) {
          //the obj that contains each promise
          const importPromises = await importCarouselImages(graduateCarouselDirectoryName);
          if (!importPromises) {
            throw new ReferenceError('graduate carousels failed to import');
          }
          const currentCarouselArrayOfImagePaths: string[] = [];
          for (const importPathName in importPromises) {
            const imageModule = await importPromises[importPathName]();
            currentCarouselArrayOfImagePaths.push(imageModule.default);
          }
          importedImageArrayObj[String(Number(startYear) + currentCarouselIdx)] =
            currentCarouselArrayOfImagePaths;
          currentCarouselIdx++;
        }
        setGraduateCarouselsObj(importedImageArrayObj);
        setCarouselsLoading(false);
        return;
      };
      importImagesAndAddToCarouselsObj();
    } catch (error) {
      errorGenerator(error);
    }
  }, []);
  return { graduateCarouselsObj, carouselsLoading };
  //each carousel needs have each of its images awaited;
}
function chooseSingleCarouselImport(name: string) {
  try {
    let glob;
    switch (name) {
      case 'studentCornerCarousel':
        glob = import.meta.glob<moduleType>('../assets/images/build-assets/carousels/studentCornerCarousel/*');
        break;
      case 'quoteCarousel':
        glob = import.meta.glob<moduleType>('../assets/images/build-assets/carousels/quoteCarousel/*');
        break;
      default:
        throw new Error('invalid carousel name');
    }
    return glob;
  } catch (error) {
    errorGenerator(error);
  }
}
export function useImportSingleCarousel(carouselName: string) {
  const [carousel, setCarousel] = useState<string[]>([]);
  const [isCarouselLoading, setIsCarouselLoading] = useState(true);
  useEffect(() => {
    try {
      const importCarousel = async () => {
        const arrayOfImagePaths: string[] = [];
        const glob = await chooseSingleCarouselImport(carouselName);
        if(!glob) {
          throw new ReferenceError('No single carousel import glob')
        }
        for (const imagePromise of Object.values(glob)) {
          const imageModule = await imagePromise();
          arrayOfImagePaths.push(imageModule.default);
        }
        setCarousel(arrayOfImagePaths);
        setIsCarouselLoading(false);
      };
      importCarousel();
    } catch (error) {
      errorGenerator(error);
    }
  }, []);
  return { carousel, isCarouselLoading };
}
export function extractFileNameFromUrl(filePath: string): string {
  const splitFileName = filePath.split(/\.|\//);
  splitFileName.pop();
  return splitFileName.pop() || '';
}
export function removeUnderScoresFromPath(path: string) {
  return path.replace(/_/g, ' ');
}
