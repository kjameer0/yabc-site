import { useState, useEffect } from 'react';
import { Asset } from 'contentful';
import { client } from './contentful-api-functions';
import { TypePageSkeleton, TypePageFields,TypePage } from 'types/contentfulTypes';
import { generateImageObject, PageDataType, sectionObjType, generateSectionsObject } from './contentfulTypeFunctions';
import { errorGenerator } from './error';

export function useGetPageData(contentfulId: string) {
  const [imgObj, setImgObj] = useState({} as Record<string,string>);
  const [sectionObj, setSectionObj] = useState({} as sectionObjType)
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
        setImgObj(generateImageObject(response) as Record<string,string>)
        setSectionObj(generateSectionsObject(response) as sectionObjType)
      } catch (error) {
        errorGenerator(error);
      }
    };
    //pageData state will be set
    fetchData();
  }, []);
  return {imgObj, sectionObj};
}
