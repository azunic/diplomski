import React, { useState, useEffect } from 'react';
import ProfileMenu from './profileMenu/profileMenu';
import SideDrawer from './sideDrawer/sideDrawer';
import getIcon from '../../utils/iconsLoader';
import isMobile from 'is-mobile';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

function Navigation(props) {
  const dispatch = useDispatch();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const userProfileData = useSelector((state) => state.webShop.userProfileData);

  useEffect(() => {
    token && props.history.push('/home');
    if (token) {
      dispatch(actions.fetchUserProfile());
    }
  }, [token]);

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
            {userProfileData && `${userProfileData.firstName[0]}${userProfileData.lastName[0]}`}
            {userProfileData && userProfileData.notificationCount !== 0 && (
              <div className="nav-right-avatar-nbubble">{userProfileData.notificationCount}</div>
            )}
          </div>
          <div className="nav-right-name" onClick={toggleProfileMenu}>
            {userProfileData && `${userProfileData.firstName} ${userProfileData.lastName}`}
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

export default withRouter(Navigation);
