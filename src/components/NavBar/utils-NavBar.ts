export type OpenOptions = '' | 'open' | 'close';
export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];
//makeHashLink takes a label string
//for a pathname and converts it to
//a hash link
export function makeLink(label: string): string {
  //lowercases string, removes spaces, removes punctuation and spaces
  //joins with hypen and returns link appropriate string
  return label
    .toLowerCase()
    .split(/\s|'s|\?|!|\.|&/gi)
    .filter((e) => e !== '')
    .join('-');
}
export function makeHashLink(label: string): string {
  return '#' + makeLink(label);
}

/*
navLinks shows the structure of the navigation menu
almost every link that will appear on screen has submenus.
the anchor property in each object contains a list of submenus
the navbar/drawer component will check length of
that links anchors, and if there is at least one item
in anchors, the component will show the subanchors
*/
export type NavListItemType = {
  label: string;
  path: string;
  anchors?: NavListItemType[];
};
export const yabcNavLinkList: NavListItemType[] = [{ label: 'Home', path: '', anchors: [] }];
export const aboutLinks = [
  {
    label: 'Open house',
    path: 'about',
    anchors: [
      { label: 'Openhouse', path: '#openhouse' },
      { label: 'Are we a fit?', path: '#are-we-a-fit' },
      { label: 'Meet past graduates', path: '#meet-past-graduates' },
    ],
  },
  {
    label: 'Staff Directory',
    path: 'staff-directory',
    anchors: [
      { label: 'Staff directory', path: '#staff-directory' },
      { label: 'School Counselors', path: '#school-counselors' },
      { label: 'Mission Society of New York', path: '#mission-society-of-new-york' },
      { label: 'Faculty', path: '#faculty' },
      { label: 'Support Staff', path: '#support-staff' },
    ],
  },
  { label: `Counselor's Corner`, path: 'counselor-corner', anchors: [] },
];
export const admissionsLinks = [
  {
    label: 'Admissions',
    path: 'admissions',
    anchors: [
      { label: 'Academic Requirements', path: '#academic-requirements' },
      { label: 'Enrollment Process', path: '#enrollment-process' },
      { label: 'FAQs', path: '#frequently-asked-questions' },
    ],
  },
  {
    label: 'Shared Instruction',
    path: '#shared-instruction',
    anchors: [{ label: 'How to Enroll', path: '#how-to-enroll' }],
  },
  { label: 'Enrollment Forms', path: makeLink('Enrollment Forms'), anchors: [] },
];
export const studentCornerLinks: NavListItemType[] = [
  {
    label: 'Resources',
    path: makeLink('Resources'),
    anchors: [
      { label: 'Student Resources', path: makeHashLink('Student Resources') },
      { label: `What's Happening?`, path: makeHashLink(`What's Happening?`) },
      { label: `School Library`, path: makeHashLink(`School Library`) },
      { label: `Student Handbook`, path: makeHashLink(`Student Handbook`) },
    ],
  },
  {label: 'Mission Society of New York', path: makeLink('Mission Society of New York'), anchors: [

  ]}
];
export function handleDrawerSwitch(
  e: React.MouseEvent<HTMLButtonElement>,
  prev: OpenOptions,
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>
) {
  //if first mounted, toggling drawer sets drawer open
  e.stopPropagation();
  if (prev === 'close' || prev === '') {
    setOpen('open');
  } else if (prev === 'open') {
    setOpen('close');
  }
}

export interface DrawerProps {
  open: OpenOptions;
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>;
}
