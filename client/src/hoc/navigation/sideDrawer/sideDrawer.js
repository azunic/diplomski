import React from 'react';
import SideDrawerListItem from './sideDrawerListItem';
import { ACCESSORIES_EXPANDABLE_ITEMS } from '../../../constants/navigation';

function SideDrawer(props) {
  const { isMobile, sideDrawerOpen } = props;

  const displaySideDrawer = () => {
    if (!isMobile) {
      return true;
    }
    return sideDrawerOpen;
  };
  return (
    <aside id="sidedrawer" className={`sidedrawer sidedrawer-${displaySideDrawer() ? 'active' : 'inactive'}`}>
      <div className="sidedrawer-menus">
        <ul className="sidedrawer-list">
          <SideDrawerListItem icon="home" text="Home" />
          <SideDrawerListItem icon="brands" text="Brands" />
          <SideDrawerListItem
            icon="Accessories"
            text="Accessories"
            expandable={true}
            expandableItems={ACCESSORIES_EXPANDABLE_ITEMS}
          />
          <SideDrawerListItem
            icon="perfumes"
            text="Mirisi"
            expandable={true}
            expandableItems={ACCESSORIES_EXPANDABLE_ITEMS}
          />
          <SideDrawerListItem
            icon="drugstore"
            text="Drogerija"
            expandable={true}
            expandableItems={ACCESSORIES_EXPANDABLE_ITEMS}
          />
          <SideDrawerListItem
            icon="hair"
            text="Kosa"
            expandable={true}
            expandableItems={ACCESSORIES_EXPANDABLE_ITEMS}
          />
          <SideDrawerListItem
            icon="makeup"
            text="Makeup"
            expandable={true}
            expandableItems={ACCESSORIES_EXPANDABLE_ITEMS}
          />
          <SideDrawerListItem
            icon="care"
            text="Njega"
            expandable={true}
            expandableItems={ACCESSORIES_EXPANDABLE_ITEMS}
          />
        </ul>
        <div className="sidedrawer-list-divider"></div>
        <ul className="sidedrawer-list">
          <SideDrawerListItem text="COMMUNITY" />
          <SideDrawerListItem icon="swap" text="Zamjene" />
          <SideDrawerListItem icon="shelf" text="Moj ormarić" />
        </ul>
        <div className="sidedrawer-list-divider"></div>
        <ul className="sidedrawer-list">
          <SideDrawerListItem icon="help" text="Pomoć i FAQ" />
        </ul>
      </div>
      <div className="sidedrawer-footer">
        <div className="sidedrawer-footer-title">Beauty spot</div>
        <div className="sidedrawer-footer-subtitle">Ana Žunić</div>
        <ul className="sidedrawer-footer-list">
          <li className="sidedrawer-footer-list-item">
            <span className="sidedrawer-footer-list-item-count">53</span> proizvoda
          </li>
          <li className="sidedrawer-footer-list-item">
            <span className="sidedrawer-footer-list-item-count">4</span> zamjene
          </li>
        </ul>
        <div className="sidedrawer-footer-link">Moj profil</div>
      </div>
    </aside>
  );
}

export default SideDrawer;
