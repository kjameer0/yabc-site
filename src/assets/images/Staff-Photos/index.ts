import AyetiwaImg from './ayetiwa.webp';
import CuevasImg from './cuevas.webp';
import MuhizImg from './abdul_muhiz.webp';
import FanFanImg from './1fanfan.webp';
import McDoughalImg from './Ailene-McDoughal_edited.webp';
import AmbroseImg from './ambrose.webp';
import ApilanImg from './apilan.webp';
import BrownWhetstoneImg from './elizabeth_brown-whetstone.webp';
import WadeImg from './Kelly-Wade_edited.webp';
import TracyKarasImg from './Tracy.webp';
import LeeImg from './lee.webp';
import MatelusImg from './matelus.webp';
import McLaughlinImg from './mclaughlin.webp';
import MorelGrantImg from './Morel-Grant.webp';
import RiveraImg from './mr_rivera.webp';
import DavidImg from './Ms_David.webp';
import RamosImg from './ramos.webp';
import SabadiquaImg from './sabadiqua.webp';
import SanJorgeImg from './sanjorge.webp';
import StephanieMullingsImg from './Stephanie-Mullings.webp';
import SiosonImg from './sioson.webp';
import StachaLeeImg from './Stacha_Lee.webp';
import LesleyAcevadoImg from './Lesley_edited.webp';
import ToomeyImg from './toomey.webp';
import WeberImg from './weber.webp';
import WeinerImg from './weiner.webp';
import WhitfieldImg from './whitfield.webp';
import SantaCattarinaImg from './santa_cattarina.webp';
import DefaultTeacherIcon from './Teacher_Icon.webp';

//types
import { StaffImageType } from 'components/StaffImage/StaffImage';

export { AyetiwaImg };
const emailDomain = '@schools.nyc.gov';
type StaffInfoType = Omit<StaffImageType, 'direction'>;

export const adminList: StaffInfoType[] = [
  {
    name: 'Mr. A Ayetiwa',
    email: 'aayetiw' + emailDomain,
    role: 'Program Site Administrator',
    imgLink: AyetiwaImg,
  },
  {
    name: 'Mr. J Cuevas',
    email: 'JCuevas2' + emailDomain,
    role: 'Assistant Principal of Data',
    imgLink: CuevasImg,
  },
];
export const schoolCounselorList: StaffInfoType[] = [
  {
    name: 'Ms. A Mclaughlin',
    email: 'amclaughlin2' + emailDomain,
    role: 'Guidance Counselor',
    imgLink: McLaughlinImg,
  },
  {
    name: 'Ms. A Toomey',
    email: 'AlixToomey10@gmail.com',
    role: 'Guidance Counselor',
    imgLink: ToomeyImg,
  },
  {
    name: 'Ms. A San Jorge',
    email: 'asanjorge' + emailDomain,
    role: 'Guidance Counselor',
    imgLink: SanJorgeImg,
  },
];
export const missionSocietyList: StaffInfoType[] = [
  {
    name: 'Ms. W Nicholas',
    email: '',
    role: 'Program Director',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. E Brown-Whetstone',
    email: 'ebwhetstone@missionsociety.org',
    role: 'Advocate Counselor/Social Worker',
    imgLink: BrownWhetstoneImg,
  },
  {
    name: 'Mr. A Muhiz',
    email: 'amuhiz@missionsociety.org',
    role: 'Advocate Counselor',
    imgLink: MuhizImg,
  },
];
export const yabcStaffList: StaffInfoType[] = [
  {
    name: 'Ms. A Apilan',
    role: 'Science Teacher',
    imgLink: ApilanImg,
  },
  {
    name: 'Ms. R Sabadiqua',
    role: 'Science Teacher',
    imgLink: SabadiquaImg,
  },
  {
    name: 'Mr. N Weber',
    role: 'Social Studies',
    imgLink: WeberImg,
  },
  {
    name: 'Mr. J Matelus',
    role: 'Dean',
    imgLink: MatelusImg,
  },
  {
    name: 'Ms. R Bray',
    role: 'Piano Teacher/ELA Electives',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. Lee',
    role: 'PD Coordinator/PD Instructor/Math Teacher',
    imgLink: LeeImg,
  },
  {
    name: 'Mr D Weiner',
    role: 'Digital Photography',
    imgLink: WeinerImg,
  },
  {
    name: 'Ms. Venner',
    role: 'COSA/PD Teacher',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. B David',
    role: 'Fashion Design',
    imgLink: DavidImg,
  },
  {
    name: 'Mr. A Whitfield',
    role: 'PE Teacher',
    imgLink: WhitfieldImg,
  },
  {
    name: 'Ms. J Caine',
    role: 'English Teacher',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. A Ramos',
    role: 'Science Teacher',
    imgLink: RamosImg,
  },
  {
    name: 'Ms. E Morel-Grant',
    role: 'Spanish Teacher',
    imgLink: MorelGrantImg,
  },
  {
    name: 'Ms. S Cattarina',
    role: 'Speech Pathologist',
    imgLink: SantaCattarinaImg,
  },
  {
    name: 'Ms. L Acevedo',
    role: 'Science Teacher',
    imgLink: LesleyAcevadoImg,
  },
  {
    name: 'Ms. T Karas',
    role: 'Librarian',
    imgLink: TracyKarasImg,
  },
  {
    name: 'Ms. S Mullings',
    role: 'SWD Teacher',
    imgLink: StephanieMullingsImg,
  },
  {
    name: 'Mr. C Rivera',
    role: 'Social Studies Teacher',
    imgLink: RiveraImg,
  },
  {
    name: 'Ms. L Mandry',
    role: 'PE Teacher',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Mr. S Lin',
    role: 'ENL Teacher',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. S Lee',
    role: 'COSA/Health Teacher',
    imgLink: StachaLeeImg,
  },
  {
    name: 'Ms. McDoughal',
    role: 'Testing Coordinator',
    imgLink: McDoughalImg,
  },
  {
    name: 'Mr. I Ramos',
    role: 'Math Teacher',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Mr. C Lerner',
    role: "Special Education/Driver's Ed",
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. A Ellis',
    role: 'College Advisor',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. L McEvoy',
    role: 'Math/Computer Science',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. S Mousavi',
    role: ' Communications Teacher',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. C Sioson',
    role: 'Science Teacher',
    imgLink: SiosonImg,
  },
  {
    name: 'Mr. F Alvarez',
    role: 'Dean',
    imgLink: DefaultTeacherIcon,
  },
  {
    name: 'Ms. D. Faulmino',
    role: 'Social Studies',
    imgLink: DefaultTeacherIcon,
  },
];
export const supportStaffList: StaffInfoType[] = [
  { name: 'Mr. Fanfan', imgLink: FanFanImg, role: 'Attendance Teacher' },
  { name: 'Ms. Ambrose', imgLink: AmbroseImg, role: 'Secretary' },
  { name: 'Ms. Pierre-Lys', imgLink: DefaultTeacherIcon, role: 'Paraprofessional' },
  { name: 'Ms. Gomez', imgLink: DefaultTeacherIcon, role: 'School Aide' },
  { name: 'Mr. Abdallah', imgLink: DefaultTeacherIcon, role: 'School Aide' },
  { name: 'Ms. Mcloughlin', imgLink: DefaultTeacherIcon, role: 'School Aide' },
  { name: 'Ms. Fiallos', imgLink: DefaultTeacherIcon, role: 'Paraprofessional' },
];

export { DefaultTeacherIcon };
