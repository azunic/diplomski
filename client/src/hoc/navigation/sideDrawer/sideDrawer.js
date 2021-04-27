import React, { useEffect } from 'react';
import SideDrawerListItem from './sideDrawerListItem';
import { ACCESSORIES_EXPANDABLE_ITEMS } from '../../../constants/navigation';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router';

function SideDrawer(props) {
  const { isMobile, sideDrawerOpen, history } = props;
  const dispatch = useDispatch();
  const navigationItems = useSelector((state) => state.webShop.navigationItems);
  const error = useSelector((state) => state.webShop.errorNavigationItems);
  const userProfileData = useSelector((state) => state.webShop.userProfileData);

  console.log('User profile data', userProfileData);
  useEffect(() => {
    dispatch(actions.fetchNavigation());
  }, []);

  const displaySideDrawer = () => {
    if (!isMobile) {
      return true;
    }
    return sideDrawerOpen;
  };

  const renderNavigationItems = () => {
    if (!navigationItems) {
      return null;
    }

    const navItems = navigationItems.map((item) => (
      <SideDrawerListItem
        key={item.name}
        icon={item.name}
        text={item.name}
        expandable={item.name !== 'Home' && item.name !== 'Brands'}
        expandableItems={item.navItems}
        menuOnClick={() => menuGoToFunction(item.name)}
        history={history}
      />
    ));
    return navItems;
  };

  const menuGoToFunction = (name) => {
    console.log(name);
    history.push(`/${name}`);
  };

  const renderAdmin = () => {
    if (userProfileData) {
      if (userProfileData.email === 'admin@admin.com') {
        return (
          <div className="sidedrawer-footer-link" onClick={() => menuGoToFunction('admin/allproducts')}>
            Administrator
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  };
  return (
    <aside id="sidedrawer" className={`sidedrawer sidedrawer-${displaySideDrawer() ? 'active' : 'inactive'}`}>
      <div className="sidedrawer-menus">
        <ul className="sidedrawer-list">{renderNavigationItems()}</ul>
        <div className="sidedrawer-list-divider"></div>
        <ul className="sidedrawer-list">
          <SideDrawerListItem text="MOJ ORMARIĆ" />

          <SideDrawerListItem icon="shelf" text="Prodajni štand" menuOnClick={() => menuGoToFunction('locker')} />
        </ul>
        <div className="sidedrawer-list-divider"></div>
        <ul className="sidedrawer-list">
          <SideDrawerListItem icon="help" text="Pomoć i FAQ" menuOnClick={() => menuGoToFunction('help')} />
          <SideDrawerListItem icon="safebox" text="Sigurnost" menuOnClick={() => menuGoToFunction('security')} />
        </ul>
      </div>
      <div className="sidedrawer-footer">
        <div className="sidedrawer-footer-title">Beauty spot</div>
        <div className="sidedrawer-footer-subtitle">
          {userProfileData && `${userProfileData.firstName} ${userProfileData.lastName}`}
        </div>
        <ul className="sidedrawer-footer-list">
          <li className="sidedrawer-footer-list-item">
            <span className="sidedrawer-footer-list-item-count">
              {userProfileData && `${userProfileData.ownedProducts.length}`}
            </span>{' '}
            proizvoda
          </li>
          <li className="sidedrawer-footer-list-item" style={{ color: 'white' }}>
            {/* A JSX comment */}
            <span className="sidedrawer-footer-list-item-count" style={{ color: 'white' }}></span> Zamjene
          </li>
        </ul>
        <div className="sidedrawer-footer-link" onClick={() => menuGoToFunction('profile')}>
          Moj profil
        </div>
        <div>{renderAdmin()}</div>
      </div>
    </aside>
  );
}

export default withRouter(SideDrawer);
