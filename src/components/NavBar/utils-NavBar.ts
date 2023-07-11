export type OpenOptions = '' | 'open' | 'close';
export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];
//makeHashLink takes a label string
//for a pathname and converts it to
//a hash link
export function makeHashLink(label: string): string {
  const hashLink = label.toLowerCase().split(/\s|'s/gi).filter(e => e !== '').join('-');
  return '#' + hashLink;
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
export const yabcNavLinkList: NavListItemType[] = [
  { label: 'Home', path: '', anchors: [] },
  {
    label: 'About',
    path: 'about',
    anchors: [
      { label: 'Are we a fit?', path: '#are-we-a-fit' },
      { label: 'Openhouse', path: '#openhouse' },
      { label: 'Meet past graduates', path: '#past-graduates' },
    ],
  },
  {
    label: 'Staff Directory',
    path: 'staff-directory',
    anchors: [
      { label: 'Staff directory', path: '#staff-directory' },
      { label: 'School Counselors', path: '#school-counselors' },
      { label: 'Mission Society of New York', path: '#mission-society' },
      { label: 'Faculty', path: '#faculty' },
      { label: 'Support Staff', path: '#support-staff' },
    ],
  },
  { label: `Counselor's Corner`, path: 'counselor-corner', anchors: [] },
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
