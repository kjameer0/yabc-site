import { Entry, EntryFieldTypes } from 'contentful';
import {
  TypePageSkeleton,
  isTypeHeader,
  isTypeParagraph,
  isTypeListText,
  TypeCarouselSkeleton,
  TypeLinkTextFields,
  isTypeLinkText,
  TypeStaffMemberSkeleton,
  TypeStaffMemberFields,
} from 'types/contentfulTypes';
import { Document as ContentfulDocumentType } from '@contentful/rich-text-types';
import { errorGenerator } from './error';

//all text in the website falls under these 3 categories
export type sectionObjType = {
  headers: Record<string, { mainHeading: string; subHeading: string | undefined }>;
  lists: Record<string, { listContent: string[] }>;
  paragraphs: Record<string, { content: string }>;
  links: Record<string, ContentfulDocumentType>;
};

export type PageDataType = Entry<TypePageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
export type CarouselDataType = Entry<TypeCarouselSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;

export function generateImageObject(data: PageDataType) {
  try {
    //make sure images is not undefined
    const images = data.fields.images || [];
    //throw error if undefined
    if (!data.fields || images.length === 0) {
      throw new ReferenceError('images undefined');
    }
    //images are stored with their title as the key and url as the value
    const imgObj: Record<string, string> = {};
    images.forEach((img) => {
      //make sure image properties exist
      if (img !== undefined && img.fields && img.fields.title) {
        const name: string = img.fields.title;
        //make object key title of the image
        //make object value url
        imgObj[name.toLowerCase()] =
          img?.fields?.file?.url !== undefined ? 'https:' + img.fields.file.url : '';
      }
    });
    return imgObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}

export function generateSectionsObject(data: PageDataType) {
  try {
    //make sure sections is not undefined
    if (data.fields.sections === undefined) {
      throw new ReferenceError('sections undefined');
    }
    const sections = data.fields.sections;
    //sections are stored with their title as the key and content objects as values
    const sectionObj: sectionObjType = { lists: {}, headers: {}, paragraphs: {}, links: {} };
    sections.forEach((section) => {
      //make sure section title exists
      if (section === undefined || section.fields === undefined) {
        throw new ReferenceError('no content');
      }
      const title = section.fields.title;
      if (typeof title === 'object' || title === undefined) {
        throw new ReferenceError('no content');
      }
      //figure out what type of content this section might be
      //it could be a list, header, or paragraph
      if (isTypeHeader(section)) {
        const mainHeading = section.fields.mainHeading;
        const subHeading = section.fields.subHeading;
        if (typeof mainHeading === 'object' || typeof subHeading === 'object') {
          throw new ReferenceError('no content');
        }
        const content = { mainHeading, subHeading };
        sectionObj.headers[title] = content;
      } else if (isTypeParagraph(section)) {
        //paragraphs only have one field: content
        const text = section.fields.content;
        if (typeof text === 'object') {
          throw new ReferenceError('no paragraph content');
        }
        const content = { content: text || '' };
        sectionObj.paragraphs[title] = content;
      } else if (isTypeListText(section)) {
        const content = section.fields.listContent;
        if (!Array.isArray(content) || content === undefined) {
          throw new ReferenceError('no list content');
        }
        const listContent = { listContent: content };
        sectionObj.lists[title] = listContent;
      } else if (isTypeLinkText(section)) {
        const link = section.fields.textWithLink as ContentfulDocumentType;
        if (!link) {
          throw new ReferenceError('no links in sections object');
        }
        sectionObj.links[title] = link;
      }
    });
    return sectionObj;
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}

export function generateImageObjectCarousel(data: CarouselDataType) {
  try {
    //make sure images is not undefined
    const images = data.fields.carouselImages || [];
    //throw error if undefined
    if (!data.fields || images.length === 0) {
      throw new ReferenceError('images undefined');
    }
    //images are stored with their title as the key and url as the value
    return images.map((img) => {
      //make sure image properties exist
      if (img !== undefined && img.fields && img.fields.title) {
        const imgData = img?.fields;
        const imgUrl = imgData.image?.fields.file?.url || '';
        const quoteText = imgData.quoteText || '';
        return { imgUrl, quoteText };
      } else {
        throw new ReferenceError('images undefined');
      }
    });
  } catch (error) {
    if (error instanceof ReferenceError) console.error(error.message);
    else console.error('image object error');
  }
}
//staff member can either be admin, faculty, support, missionSociety, or
const arr = [
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5GbgBwEZhzxyfvk6GTDxBo',
      type: 'Entry',
      createdAt: '2023-10-01T20:38:53.743Z',
      updatedAt: '2023-10-01T20:38:53.743Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. FIALLOS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Paraprofessional',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '2p6JnHDT7Neo9MvBi5q8eJ',
      type: 'Entry',
      createdAt: '2023-10-01T20:34:51.211Z',
      updatedAt: '2023-10-01T20:34:51.211Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. MCLOUGHLIN',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'School Aide',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5OTzWalSrw0SaX3MOcK3aO',
      type: 'Entry',
      createdAt: '2023-10-01T20:31:53.461Z',
      updatedAt: '2023-10-01T20:31:53.461Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. ABDALLAH',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'School Aide',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '2b380I4SVBwuWkD8QhpmH9',
      type: 'Entry',
      createdAt: '2023-10-01T20:31:30.875Z',
      updatedAt: '2023-10-01T20:31:30.875Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. GOMEZ',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'School Aide',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '7bnc94Y4EZKVGLvOki8aRi',
      type: 'Entry',
      createdAt: '2023-10-01T20:31:03.152Z',
      updatedAt: '2023-10-01T20:31:03.152Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. PIERRE-LYS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Paraprofessional',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5AVJrfRmaQ0WkEa1UkEZbp',
      type: 'Entry',
      createdAt: '2023-10-01T20:30:34.405Z',
      updatedAt: '2023-10-01T20:30:34.405Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. AMBROSE',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '3XJ07bW85kTdMFdywi696K',
          type: 'Asset',
          createdAt: '2023-10-01T20:30:27.146Z',
          updatedAt: '2023-10-01T20:30:27.146Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'ambrose',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/3XJ07bW85kTdMFdywi696K/823da06b4dcdb7bf083f40a5d1c19da6/ambrose.webp',
            details: {
              size: 15548,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'ambrose.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Secretary',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3EFeY1QR31aAzH2ZeSG9RH',
      type: 'Entry',
      createdAt: '2023-10-01T20:28:45.732Z',
      updatedAt: '2023-10-01T20:28:45.732Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. FANFAN',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: 'iw0DK1Mbd0hWkRsp7iGyZ',
          type: 'Asset',
          createdAt: '2023-10-01T20:28:40.929Z',
          updatedAt: '2023-10-01T20:28:40.929Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'fanfan',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/iw0DK1Mbd0hWkRsp7iGyZ/16a4157afdceb54148ce0d3f051410d0/1fanfan.webp',
            details: {
              size: 11888,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: '1fanfan.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Attendance Teacher',
      roleCategory: 'support',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5oQmIOSBlN8BmOvn0BUfQT',
      type: 'Entry',
      createdAt: '2023-10-01T20:27:39.775Z',
      updatedAt: '2023-10-01T20:27:39.775Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. D. FAULMINO',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Social Studies',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5mhlZBsI1dJWfFaTTpLjQg',
      type: 'Entry',
      createdAt: '2023-10-01T20:25:48.649Z',
      updatedAt: '2023-10-01T20:25:48.649Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. F ALVAREZ',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Dean',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3bM6zTO8wIEpEPwpJL3g0Z',
      type: 'Entry',
      createdAt: '2023-10-01T20:25:17.163Z',
      updatedAt: '2023-10-01T20:25:17.163Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. C SIOSON',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '6JnZQKnw7nIWc1lbooJN8V',
          type: 'Asset',
          createdAt: '2023-10-01T20:24:42.561Z',
          updatedAt: '2023-10-01T20:24:42.561Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'sioson',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/6JnZQKnw7nIWc1lbooJN8V/2e200aad47a3a4aa3094ce66c1fa6cd9/sioson.webp',
            details: {
              size: 11962,
              image: {
                width: 175,
                height: 181,
              },
            },
            fileName: 'sioson.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Science Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3NDpzL7N5BjXdOLRmpNIrO',
      type: 'Entry',
      createdAt: '2023-10-01T20:22:26.061Z',
      updatedAt: '2023-10-01T20:22:26.061Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. S MOUSAVI',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Communications Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '4nmxUIVfMKNkX2h74r2V6Z',
      type: 'Entry',
      createdAt: '2023-10-01T20:21:53.931Z',
      updatedAt: '2023-10-01T20:21:53.931Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. L MCEVOY',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Math/Computer Science',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3URSYC7RnGZCybBvDcugTp',
      type: 'Entry',
      createdAt: '2023-10-01T20:14:28.201Z',
      updatedAt: '2023-10-01T20:14:28.201Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. A ELLIS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'College Advisor',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '6DBVJ0nuKnKvI0xEdleSjU',
      type: 'Entry',
      createdAt: '2023-10-01T20:05:09.732Z',
      updatedAt: '2023-10-01T20:05:09.732Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. C LERNER',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: "Special Education/Driver's Ed",
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5XoPBPxWFZgzDhnQGbvxim',
      type: 'Entry',
      createdAt: '2023-10-01T20:04:30.493Z',
      updatedAt: '2023-10-01T20:04:30.493Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. I RAMOS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Math Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '32Lm2yAUkbLqvPjxE7MCPu',
      type: 'Entry',
      createdAt: '2023-10-01T20:01:13.321Z',
      updatedAt: '2023-10-01T20:01:13.321Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. MCDOUGHAL',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: 'wQNaf7Pp7iWmEr0gFQrlf',
          type: 'Asset',
          createdAt: '2023-10-01T20:01:04.504Z',
          updatedAt: '2023-10-01T20:01:04.504Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'Ailene_McDoughal',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/wQNaf7Pp7iWmEr0gFQrlf/df2f0e9b78ebc086d1c362b6562342d5/Ailene-McDoughal_edited.webp',
            details: {
              size: 17026,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Ailene-McDoughal_edited.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Testing Coordinator',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '4YOUE3RNNcFdEoLkaQtisk',
      type: 'Entry',
      createdAt: '2023-10-01T20:00:06.258Z',
      updatedAt: '2023-10-01T20:00:06.258Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. S LEE',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '6vucaW9mI8XrD6kH5OJyJ6',
          type: 'Asset',
          createdAt: '2023-10-01T19:59:53.831Z',
          updatedAt: '2023-10-01T19:59:53.831Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'Stacha_Lee',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/6vucaW9mI8XrD6kH5OJyJ6/17dcc40fcfbbfe2a52a7ec3380657f20/Stacha_Lee.webp',
            details: {
              size: 13350,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Stacha_Lee.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'COSA/Health Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '2dCLNoRJMInLGGmC9CufkG',
      type: 'Entry',
      createdAt: '2023-10-01T19:58:58.158Z',
      updatedAt: '2023-10-01T19:58:58.158Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. S LIN',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'ENL Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3DGvvSpPjbaxPv5l6d8x2X',
      type: 'Entry',
      createdAt: '2023-10-01T19:55:45.789Z',
      updatedAt: '2023-10-01T19:55:45.789Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. L MANDRY',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'PE Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: 'oRDvM88bLU1ZtbsuOTfPJ',
      type: 'Entry',
      createdAt: '2023-10-01T19:54:23.907Z',
      updatedAt: '2023-10-01T19:54:23.907Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. C RIVERA',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: 'En2KCpN3v6WQzmLC6tZD8',
          type: 'Asset',
          createdAt: '2023-10-01T19:53:16.856Z',
          updatedAt: '2023-10-01T19:53:16.856Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'rivera',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/En2KCpN3v6WQzmLC6tZD8/b1aea243398f98b16d0e8ab7eefee0e2/mr_rivera.webp',
            details: {
              size: 10052,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'mr_rivera.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Social Studies Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5ENnTQSKSFxBpTVhXmHQtM',
      type: 'Entry',
      createdAt: '2023-10-01T19:32:04.174Z',
      updatedAt: '2023-10-01T19:32:04.174Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. S MULLINGS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '1LVgIVrDvUI5YUIyUYEUdM',
          type: 'Asset',
          createdAt: '2023-10-01T19:31:44.596Z',
          updatedAt: '2023-10-01T19:31:44.596Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'Stephanie_Mullings',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/1LVgIVrDvUI5YUIyUYEUdM/3eaa7b5c8c91bda19bf27c40baf21b9a/Stephanie-Mullings.webp',
            details: {
              size: 15400,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Stephanie-Mullings.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'SWD Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '1FEk4awKTuUo71rSlE6MyO',
      type: 'Entry',
      createdAt: '2023-10-01T19:31:07.113Z',
      updatedAt: '2023-10-01T19:31:07.113Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. T KARAS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5a76rRExE4oCXZcBEWTK39',
          type: 'Asset',
          createdAt: '2023-10-01T19:31:00.411Z',
          updatedAt: '2023-10-01T19:31:00.411Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'Tracy_Karas',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5a76rRExE4oCXZcBEWTK39/12bbc48f912e0be75001498a36349b10/Tracy.webp',
            details: {
              size: 15038,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Tracy.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Librarian',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '21dynkAkNOdOJwHVNJ9vna',
      type: 'Entry',
      createdAt: '2023-10-01T19:30:17.093Z',
      updatedAt: '2023-10-01T19:30:17.093Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. L ACEVEDO',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: 'I5EjUOod9vBVUrpfFXlBE',
          type: 'Asset',
          createdAt: '2023-10-01T19:29:08.778Z',
          updatedAt: '2023-10-01T19:30:03.966Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 2,
          locale: 'en-US',
        },
        fields: {
          title: 'Lesley_Acevedo',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/I5EjUOod9vBVUrpfFXlBE/d3da2f6f6a5246874ec55fd2515c68e3/Lesley_edited.webp',
            details: {
              size: 15768,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Lesley_edited.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Science Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '7uOR3rR05Ck4kqEnRE8aRL',
      type: 'Entry',
      createdAt: '2023-10-01T19:28:07.897Z',
      updatedAt: '2023-10-01T19:28:07.897Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. S CATTARINA',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '7socUpG5sGNVFpQBjEUl0D',
          type: 'Asset',
          createdAt: '2023-10-01T19:28:05.015Z',
          updatedAt: '2023-10-01T20:56:08.302Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 2,
          locale: 'en-US',
        },
        fields: {
          title: 'santa cattarina',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/7socUpG5sGNVFpQBjEUl0D/03c66017659eba322c20f396af995945/retake__jacklyn_s._cattarina_copy.webp',
            details: {
              size: 1305758,
              image: {
                width: 4258,
                height: 4258,
              },
            },
            fileName: 'retake_ jacklyn s. cattarina copy.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Speech Pathologist',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '4BLfiKqOGLuyhxHmL9X3XI',
      type: 'Entry',
      createdAt: '2023-10-01T19:27:13.284Z',
      updatedAt: '2023-10-01T19:27:13.284Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. E MOREL-GRANT',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '74keN1SVFLlZBXWOZD2hEC',
          type: 'Asset',
          createdAt: '2023-10-01T19:27:07.576Z',
          updatedAt: '2023-10-01T19:27:07.576Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'Morel_Grant',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/74keN1SVFLlZBXWOZD2hEC/428889a5ff35cd8353479cc7f5b6e541/Morel-Grant.webp',
            details: {
              size: 16062,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Morel-Grant.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Spanish Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5cdmdwJ506AP5jFSHFNEYr',
      type: 'Entry',
      createdAt: '2023-10-01T19:25:47.886Z',
      updatedAt: '2023-10-01T19:25:47.886Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. A RAMOS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '4fonsaIGC3dOc7JnubRBDo',
          type: 'Asset',
          createdAt: '2023-10-01T19:25:45.199Z',
          updatedAt: '2023-10-01T19:25:45.199Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'ramos',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/4fonsaIGC3dOc7JnubRBDo/f93de7ef9158705cc4adbd41694fee2a/ramos.webp',
            details: {
              size: 11390,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'ramos.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Science Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '37wps6uDWvvA6PQbXB03li',
      type: 'Entry',
      createdAt: '2023-10-01T19:25:12.331Z',
      updatedAt: '2023-10-01T19:25:12.331Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. J CAINE',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'English Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '12QkbJcTsp4ppL9G4ra2qc',
      type: 'Entry',
      createdAt: '2023-10-01T19:24:40.381Z',
      updatedAt: '2023-10-01T19:24:40.381Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. A WHITFIELD',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '7BEGYKUKwCArjrkJ9MYwpb',
          type: 'Asset',
          createdAt: '2023-10-01T19:24:28.437Z',
          updatedAt: '2023-10-01T19:24:28.437Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'whitfield',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/7BEGYKUKwCArjrkJ9MYwpb/c49087956c4e217331a85a88e57af5ff/whitfield.webp',
            details: {
              size: 14540,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'whitfield.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'PE Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '7vxMcH3OBggRDqskp2XOxp',
      type: 'Entry',
      createdAt: '2023-10-01T19:24:04.349Z',
      updatedAt: '2023-10-01T19:24:04.349Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. B DAVID',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '1uNUG7BX9C6sHtxtg7LiFC',
          type: 'Asset',
          createdAt: '2023-10-01T19:23:58.376Z',
          updatedAt: '2023-10-01T19:23:58.376Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'Ms David',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/1uNUG7BX9C6sHtxtg7LiFC/0d75feff954771f738d01aada72faa37/Ms_David.webp',
            details: {
              size: 19664,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Ms_David.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Fashion Design',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: 'HMZpCK39uB1vGx9tVSzzx',
      type: 'Entry',
      createdAt: '2023-10-01T19:23:23.897Z',
      updatedAt: '2023-10-01T19:23:23.897Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. VENNER',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'COSA/PD Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '2Z4tYsTjebNtPMxUlUNVY4',
      type: 'Entry',
      createdAt: '2023-10-01T19:22:39.772Z',
      updatedAt: '2023-10-01T19:22:39.772Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR D WEINER',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '2yq5lzR5xL1kwGt8uwdHqI',
          type: 'Asset',
          createdAt: '2023-10-01T19:22:27.769Z',
          updatedAt: '2023-10-01T19:22:27.769Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'weiner',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/2yq5lzR5xL1kwGt8uwdHqI/b2a472e8ce3758d86836810636bcdfa7/weiner.webp',
            details: {
              size: 12328,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'weiner.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Digital Photography',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '4VvZXYSW66SKsipcgkYqDV',
      type: 'Entry',
      createdAt: '2023-10-01T19:22:06.829Z',
      updatedAt: '2023-10-01T19:22:06.829Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. LEE',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '71r53GXTPsXJk8NdwUJ9iO',
          type: 'Asset',
          createdAt: '2023-10-01T19:22:01.724Z',
          updatedAt: '2023-10-01T19:22:01.724Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'lee',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/71r53GXTPsXJk8NdwUJ9iO/9d4c8d5e97396e3ef83be5ff325ae808/lee.webp',
            details: {
              size: 16244,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'lee.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'PD Coordinator/PD Instructor/Math Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3r15XOQl0Dd0PCuJIPEK6h',
      type: 'Entry',
      createdAt: '2023-10-01T19:21:08.537Z',
      updatedAt: '2023-10-01T19:21:08.537Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. R BRAY',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Piano Teacher/ELA Electives',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3B2sgVnOatJyyqMZPxbUw7',
      type: 'Entry',
      createdAt: '2023-10-01T19:17:25.398Z',
      updatedAt: '2023-10-01T19:17:25.398Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. N WEBER',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '4Tk8Uv3HmKYyfJG14ToPYq',
          type: 'Asset',
          createdAt: '2023-10-01T19:11:19.061Z',
          updatedAt: '2023-10-01T19:19:41.805Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          locale: 'en-US',
        },
        fields: {
          title: 'weber',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/4Tk8Uv3HmKYyfJG14ToPYq/7d8db1c7b636a6c42bad7350a75107dc/weber.webp',
            details: {
              size: 13494,
              image: {
                width: 175,
                height: 181,
              },
            },
            fileName: 'weber.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Social Studies',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: 'GzpIp4EOdCUTCasGt2fGH',
      type: 'Entry',
      createdAt: '2023-10-01T19:10:49.655Z',
      updatedAt: '2023-10-01T19:10:49.655Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. R SABADIQUA',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '3apKMctJFko0D2RWbKdlsG',
          type: 'Asset',
          createdAt: '2023-10-01T19:10:39.300Z',
          updatedAt: '2023-10-01T19:10:39.300Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'sabadiqua',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/3apKMctJFko0D2RWbKdlsG/894dae8903952aa4e608e1669ae21e8e/sabadiqua.webp',
            details: {
              size: 14224,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'sabadiqua.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Science Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '2e8O45gLT2ADg7VgCk9mUv',
      type: 'Entry',
      createdAt: '2023-10-01T19:10:02.121Z',
      updatedAt: '2023-10-01T19:10:02.121Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. A APILAN',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '6vaO0l9oieCghMi9I4intx',
          type: 'Asset',
          createdAt: '2023-10-01T19:09:51.929Z',
          updatedAt: '2023-10-01T19:09:51.929Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'apilan',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/6vaO0l9oieCghMi9I4intx/a906016af953760a399ff040ce6f9bf8/apilan.webp',
            details: {
              size: 14184,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'apilan.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Science Teacher',
      roleCategory: 'faculty',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '4Ol0SZUpBAzFWijxrF12wY',
      type: 'Entry',
      createdAt: '2023-10-01T19:08:57.701Z',
      updatedAt: '2023-10-01T19:08:57.701Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. A MUHIZ',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '4NpE6W97RJbwTOYzLNzQcM',
          type: 'Asset',
          createdAt: '2023-10-01T19:08:44.294Z',
          updatedAt: '2023-10-01T19:08:44.294Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'abdul_muhiz',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/4NpE6W97RJbwTOYzLNzQcM/cb0612949d8ddd737851380503bff931/abdul_muhiz.webp',
            details: {
              size: 36780,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'abdul_muhiz.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Advocate Counselor',
      roleCategory: 'missionSociety',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '5M3Hqjz9DWvySzv25JEeqe',
      type: 'Entry',
      createdAt: '2023-10-01T19:07:54.591Z',
      updatedAt: '2023-10-01T19:07:54.591Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. E BROWN-WHETSTONE',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '1nyQCNyojciLAMMtdOjYd3',
          type: 'Asset',
          createdAt: '2023-10-01T19:07:33.804Z',
          updatedAt: '2023-10-01T19:07:33.804Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'elizabeth_brown_whetstone',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/1nyQCNyojciLAMMtdOjYd3/709afa8bb62b29b96c9152e9d987113d/elizabeth_brown-whetstone.webp',
            details: {
              size: 13398,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'elizabeth_brown-whetstone.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Advocate Counselor/Social Worker',
      roleCategory: 'missionSociety',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '24UOWPPDam8Is3JNbdTAEF',
      type: 'Entry',
      createdAt: '2023-10-01T19:05:57.041Z',
      updatedAt: '2023-10-01T19:05:57.041Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. W NICHOLAS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Program Director',
      roleCategory: 'missionSociety',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '4VExFUFxiqFQGv7y8PdtZJ',
      type: 'Entry',
      createdAt: '2023-10-01T19:05:14.174Z',
      updatedAt: '2023-10-01T19:05:14.174Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. N TAHMID',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5IzPwbfeJmNdFYlq9FUPwA',
          type: 'Asset',
          createdAt: '2023-10-01T19:04:55.431Z',
          updatedAt: '2023-10-01T19:04:55.431Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'default_Icon',
          description: 'default icon for staff members',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5IzPwbfeJmNdFYlq9FUPwA/96325ddcd9464031a68abe5df1054646/Teacher_Icon.webp',
            details: {
              size: 5766,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'Teacher_Icon.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Guidance Counselor',
      roleCategory: 'counselor',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: 'CklEvVPAXrPbCZV11udtd',
      type: 'Entry',
      createdAt: '2023-10-01T19:03:14.685Z',
      updatedAt: '2023-10-01T19:03:14.685Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. A TOOMEY',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5nBLjVa1GBCGnPly5DR9CI',
          type: 'Asset',
          createdAt: '2023-10-01T19:03:09.607Z',
          updatedAt: '2023-10-01T19:03:09.607Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'toomey',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5nBLjVa1GBCGnPly5DR9CI/415b896ffca10a135aca7ebfb2c58471/toomey.webp',
            details: {
              size: 15122,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'toomey.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Guidance Counselor',
      roleCategory: 'counselor',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: 'ousWsmKeVW0ICh00s6yBj',
      type: 'Entry',
      createdAt: '2023-10-01T19:01:45.019Z',
      updatedAt: '2023-10-01T19:01:45.019Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MS. A MCLAUGHLIN',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '1Lp0HdOzNqmcuDZKx4x3Kh',
          type: 'Asset',
          createdAt: '2023-10-01T19:01:27.923Z',
          updatedAt: '2023-10-01T19:01:27.923Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'mclaughlin',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/1Lp0HdOzNqmcuDZKx4x3Kh/aca9c567b985c2d9b167adabe4785593/mclaughlin.webp',
            details: {
              size: 11320,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'mclaughlin.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Guidance Counselor',
      roleCategory: 'counselor',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '1fPTbigt5OCx1stbZv8CiF',
      type: 'Entry',
      createdAt: '2023-10-01T19:00:10.712Z',
      updatedAt: '2023-10-01T19:00:10.712Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. J CUEVAS',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '5GIfwqavvYf0jGRkEWWrlm',
          type: 'Asset',
          createdAt: '2023-10-01T19:00:00.256Z',
          updatedAt: '2023-10-01T19:00:00.256Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'cuevas',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/5GIfwqavvYf0jGRkEWWrlm/5740984cf527fd899dd598974286bd04/cuevas.webp',
            details: {
              size: 18760,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'cuevas.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Assistant Principal of Data',
      roleCategory: 'admin',
    },
  },
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'jhdk2rr72yfb',
        },
      },
      id: '3UHb8Sol10p5Ib5a8nKuGz',
      type: 'Entry',
      createdAt: '2023-10-01T18:59:31.760Z',
      updatedAt: '2023-10-01T18:59:31.760Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'staffMember',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'MR. A AYETIWA',
      image: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'jhdk2rr72yfb',
            },
          },
          id: '3YmcVnvzbchAyTYp8CPkd7',
          type: 'Asset',
          createdAt: '2023-10-01T18:58:40.645Z',
          updatedAt: '2023-10-01T18:58:40.645Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'ayetiwa',
          description: '',
          file: {
            url: '//images.ctfassets.net/jhdk2rr72yfb/3YmcVnvzbchAyTYp8CPkd7/7aa40998fae18cc85dfa6707847b1e98/ayetiwa.webp',
            details: {
              size: 13998,
              image: {
                width: 175,
                height: 175,
              },
            },
            fileName: 'ayetiwa.webp',
            contentType: 'image/webp',
          },
        },
      },
      role: 'Program Site Administrator',
      roleCategory: 'admin',
    },
  },
];

export type StaffMemberDataType = {
  name: string;
  imgUrl: string;
  role: string;
};
export function generateStaffCategoryObject(
  staffArr: Entry<TypeStaffMemberSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]
) {
  try {
    const staffObj: Record<string, StaffMemberDataType[]> = {
      admin: [] as StaffMemberDataType[],
      missionSociety: [] as StaffMemberDataType[],
      counselor: [] as StaffMemberDataType[],
      faculty: [] as StaffMemberDataType[],
      support: [] as StaffMemberDataType[],
    };
    staffArr.forEach(
      (singleMemberData: Entry<TypeStaffMemberSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>) => {
        const { image, name, role, roleCategory } = singleMemberData.fields;
        const imgUrl = image?.fields.file?.url;
        if (!imgUrl) {
          throw new ReferenceError('No image provided for staff member');
        }
        staffObj[roleCategory].push({ imgUrl, name, role });
      }
    );
    return staffObj;
  } catch (error) {
    errorGenerator(error);
  }
}
