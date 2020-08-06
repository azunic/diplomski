import React, { useState } from 'react';
import ProfileMenu from './profileMenu/profileMenu';
import SideDrawer from './sideDrawer/sideDrawer';
import getIcon from '../../utils/iconsLoader';
import isMobile from 'is-mobile';

function Navigation() {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const toggleSideDrawer = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav-left">
          {isMobile() && (
            <button onClick={toggleSideDrawer} id="hamburger-button" className="hamburger-visible">
              <img src={getIcon('hamburger')} alt="hamburger menu"></img>
            </button>
          )}
          <img src={getIcon('logo')}></img>
          <span className="nav-left-logo-text">BEAUTY SPOT</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-avatar" onClick={toggleProfileMenu}>
            AZ
            <div className="nav-right-avatar-nbubble">135</div>
          </div>
          <div className="nav-right-name" onClick={toggleProfileMenu}>
            Ana Žunić
          </div>
          <div className="nav-right-chevron" id="nav-chevron" onClick={toggleProfileMenu}>
            <i className="material-icons">{profileMenuOpen ? 'expand_less' : 'expand_more'}</i>
          </div>
          <ProfileMenu profileMenuOpen={profileMenuOpen} />
        </div>
      </nav>

      <SideDrawer isMobile={isMobile()} sideDrawerOpen={sideDrawerOpen} />
    </header>
  );
}

export default Navigation;
