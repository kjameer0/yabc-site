import AyetiwaImg from './ayetiwa.webp';
import CuevasImg from './cuevas.webp';
import MuhizImg from './abdul_muhiz.webp';
import FanFanImg from './1fanfan.webp';
import McDougalImg from './Ailene-McDoughal_edited.webp';
import AmbroseImg from './ambrose.webp';
import AplianImg from './apilan.webp';
import BrownWhetstoneImg from './elizabeth_brown-whetstone.webp';
import HanyImg from './Hany_edited.webp';
import WilsonImg from './javon_wilson.webp';
import WadeImg from './Kelly-Wade_edited.webp';
import LeeImg from './lee.webp';
import LesleyImg from './Lesley_edited.webp';
import MatelusImg from './matelus.webp';
import MacLauglinImg from './mclaughlin.webp';
import MelvinImg from './Melvin.webp';
import MoniqueImg from './Monique.webp';
import GrantImg from './Morel-Grant.webp';
import RiveraImg from './mr_rivera.webp';
import DavidImg from './Ms_David.webp';
import RamosImg from './ramos.webp';
import SabadiquaImg from './sabadiqua.webp';
import SanJorgeImg from './sanjorge.webp';
import BahairImg from './shemeta_bahair.webp';
import MullensImg from './Stephanie-Mullens.webp';
import SioSonImg from './sioson.webp';
import SiyanImg from './Siyan.webp';
import StachaLeeImg from './Stacha_Lee.webp';
import ToomeyImg from './toomey.webp';
import TracyImg from './Tracy.webp';
import WeberImg from './weber.webp';
import WeinerImg from './weiner.webp';
import WhitField from './whitfield.webp';
import DefaultTeacherIcon from './Teacher_Icon.svg';

//types
import { StaffImageType } from 'components/StaffImage/StaffImage';


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
    name: 'Mr. Cuevas',
    email: '' + emailDomain,
    role: 'Assistant Principal of Data',
    imgLink: CuevasImg,
  },
];
export const schoolCounselorList: StaffInfoType[] = [];
export const missionSocietyList: StaffInfoType[] = [];
export const yabcStaffList: StaffInfoType[] = [];

export { DefaultTeacherIcon };
