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
} from 'types/contentfulTypes';
import {
  generateImageObject,
  PageDataType,
  sectionObjType,
  generateSectionsObject,
  CarouselDataType,
  generateImageObjectCarousel,
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
        setLoading(false)
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
