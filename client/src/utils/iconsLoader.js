import LogoSvg from '../assets/perfume.svg';
import HamburgerSvg from '../assets/menu-24.svg';
import AccessoriesSvg from '../assets/accessories.svg';
import PerfumesSvg from '../assets/perfume-sidedrawer.svg';
import HomeSvg from '../assets/home.svg';
import BrandsSvg from '../assets/brands.svg';
import DrugstoreSvg from '../assets/drugstore.svg';
import HairSvg from '../assets/hair.svg';
import MakeupSvg from '../assets/makeup.svg';
import CareSvg from '../assets/care.svg';
import SwapSvg from '../assets/swap.svg';
import ShelfSvg from '../assets/shelf.svg';
import HelpSvg from '../assets/help.svg';
import NotificationSvg from '../assets/bell.svg';
import WomanSvg from '../assets/woman.svg';
import ExitSvg from '../assets/exit.svg';

function getIcon(iconName) {
  switch (iconName.toLowerCase()) {
    case 'logo':
      return LogoSvg;
    case 'hamburger':
      return HamburgerSvg;
    case 'brands':
      return BrandsSvg;
    case 'home':
      return HomeSvg;
    case 'accessories':
      return AccessoriesSvg;
    case 'perfumes':
      return PerfumesSvg;
    case 'drugstore':
      return DrugstoreSvg;
    case 'hair':
      return HairSvg;
    case 'makeup':
      return MakeupSvg;
    case 'care':
      return CareSvg;
    case 'swap':
      return SwapSvg;
    case 'shelf':
      return ShelfSvg;
    case 'help':
      return HelpSvg;
    case 'notification':
      return NotificationSvg;
    case 'profile':
      return WomanSvg;
    case 'logout':
      return ExitSvg;
    default:
      return AccessoriesSvg;
  }
}

export default getIcon;
