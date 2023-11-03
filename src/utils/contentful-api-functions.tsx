import { createClient } from 'contentful';
import {
  TypeBannerText,
  TypeBannerTextSkeleton,
  TypePageSkeleton,
  TypePageFields,
} from 'types/contentfulTypes';
import { Options } from '@contentful/rich-text-react-renderer';
import { INLINES, Inline } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

import { errorGenerator } from './error';
export const client = createClient({
  space: 'jhdk2rr72yfb',
  accessToken: 'RWz-m92fyiJr_oUdxnJhFnTIiAnSmwTsnbVcZ_otgzY',
});

export async function getBannerText() {
  try {
    const response = await client.getEntry<TypeBannerTextSkeleton>('nNVYy3RFpDviJNRD8bvZy');
    if (!response) {
      throw new ReferenceError('no banner text found');
    }
    const bannerData = response.fields.text;
    return bannerData;
  } catch (error: unknown) {
    errorGenerator(error);
  }
}
export const richTextLinkOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }: Inline, children: ReactNode) => (
      <a href={data.uri} target={`'_blank'`} rel={`'noopener noreferrer'`}>
        {children}
      </a>
    ),
  },
} as Options;

