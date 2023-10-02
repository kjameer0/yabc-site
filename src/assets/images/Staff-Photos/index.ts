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
import McLaughlinImg from './mclaughlin.webp';
import MorelGrantImg from './Morel-Grant.webp';
import RiveraImg from './mr_rivera.webp';
import DavidImg from './Ms_David.webp';
import RamosImg from './ramos.webp';
import SabadiquaImg from './sabadiqua.webp';
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
type StaffInfoType = Omit<StaffImageType, 'direction'>;

export const adminList: StaffInfoType[] = [
  {
    name: 'Mr. A Ayetiwa',
    role: 'Program Site Administrator',
    imgUrl: AyetiwaImg,
  },
  {
    name: 'Mr. J Cuevas',
    role: 'Assistant Principal of Data',
    imgUrl: CuevasImg,
  },
];
export const schoolCounselorList: StaffInfoType[] = [
  {
    name: 'Ms. A Mclaughlin',
    role: 'Guidance Counselor',
    imgUrl: McLaughlinImg,
  },
  {
    name: 'Ms. A Toomey',
    role: 'Guidance Counselor',
    imgUrl: ToomeyImg,
  },
  {
    name: 'Mr. N Tahmid',
    role: 'Guidance Counselor',
    imgUrl: DefaultTeacherIcon,
  },
];
export const missionSocietyList: StaffInfoType[] = [
  {
    name: 'Ms. W Nicholas',
    role: 'Program Director',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. E Brown-Whetstone',
    role: 'Advocate Counselor/Social Worker',
    imgUrl: BrownWhetstoneImg,
  },
  {
    name: 'Mr. A Muhiz',
    role: 'Advocate Counselor',
    imgUrl: MuhizImg,
  },
];
export const yabcStaffList: StaffInfoType[] = [
  {
    name: 'Ms. A Apilan',
    role: 'Science Teacher',
    imgUrl: ApilanImg,
  },
  {
    name: 'Ms. R Sabadiqua',
    role: 'Science Teacher',
    imgUrl: SabadiquaImg,
  },
  {
    name: 'Mr. N Weber',
    role: 'Social Studies',
    imgUrl: WeberImg,
  },

  {
    name: 'Ms. R Bray',
    role: 'Piano Teacher/ELA Electives',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. Lee',
    role: 'PD Coordinator/PD Instructor/Math Teacher',
    imgUrl: LeeImg,
  },
  {
    name: 'Mr D Weiner',
    role: 'Digital Photography',
    imgUrl: WeinerImg,
  },
  {
    name: 'Ms. Venner',
    role: 'COSA/PD Teacher',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. B David',
    role: 'Fashion Design',
    imgUrl: DavidImg,
  },
  {
    name: 'Mr. A Whitfield',
    role: 'PE Teacher',
    imgUrl: WhitfieldImg,
  },
  {
    name: 'Ms. J Caine',
    role: 'English Teacher',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. A Ramos',
    role: 'Science Teacher',
    imgUrl: RamosImg,
  },
  {
    name: 'Ms. E Morel-Grant',
    role: 'Spanish Teacher',
    imgUrl: MorelGrantImg,
  },
  {
    name: 'Ms. S Cattarina',
    role: 'Speech Pathologist',
    imgUrl: SantaCattarinaImg,
  },
  {
    name: 'Ms. L Acevedo',
    role: 'Science Teacher',
    imgUrl: LesleyAcevadoImg,
  },
  {
    name: 'Ms. T Karas',
    role: 'Librarian',
    imgUrl: TracyKarasImg,
  },
  {
    name: 'Ms. S Mullings',
    role: 'SWD Teacher',
    imgUrl: StephanieMullingsImg,
  },
  {
    name: 'Mr. C Rivera',
    role: 'Social Studies Teacher',
    imgUrl: RiveraImg,
  },
  {
    name: 'Ms. L Mandry',
    role: 'PE Teacher',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Mr. S Lin',
    role: 'ENL Teacher',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. S Lee',
    role: 'COSA/Health Teacher',
    imgUrl: StachaLeeImg,
  },
  {
    name: 'Ms. McDoughal',
    role: 'Testing Coordinator',
    imgUrl: McDoughalImg,
  },
  {
    name: 'Mr. I Ramos',
    role: 'Math Teacher',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Mr. C Lerner',
    role: "Special Education/Driver's Ed",
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. A Ellis',
    role: 'College Advisor',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. L McEvoy',
    role: 'Math/Computer Science',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. S Mousavi',
    role: ' Communications Teacher',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. C Sioson',
    role: 'Science Teacher',
    imgUrl: SiosonImg,
  },
  {
    name: 'Mr. F Alvarez',
    role: 'Dean',
    imgUrl: DefaultTeacherIcon,
  },
  {
    name: 'Ms. D. Faulmino',
    role: 'Social Studies',
    imgUrl: DefaultTeacherIcon,
  },
];
export const supportStaffList: StaffInfoType[] = [
  { name: 'Mr. Fanfan', imgUrl: FanFanImg, role: 'Attendance Teacher' },
  { name: 'Ms. Ambrose', imgUrl: AmbroseImg, role: 'Secretary' },
  { name: 'Ms. Pierre-Lys', imgUrl: DefaultTeacherIcon, role: 'Paraprofessional' },
  { name: 'Ms. Gomez', imgUrl: DefaultTeacherIcon, role: 'School Aide' },
  { name: 'Mr. Abdallah', imgUrl: DefaultTeacherIcon, role: 'School Aide' },
  { name: 'Ms. Mcloughlin', imgUrl: DefaultTeacherIcon, role: 'School Aide' },
  { name: 'Ms. Fiallos', imgUrl: DefaultTeacherIcon, role: 'Paraprofessional' },
];

export { DefaultTeacherIcon };
