import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenuItem from './profileMenuItem';

function ProfileMenu(props) {
  const { profileMenuOpen } = props;
  return (
    <ul id="profile-menu" className={`profile-menu profile-menu-${profileMenuOpen ? 'active' : 'inactive'}`}>
      <ProfileMenuItem icon="notification" text="Notifications" hasNotification={true} notificationCounter="135" />
      <ProfileMenuItem icon="profile" text="Profile" />
      <ProfileMenuItem icon="logout" text="Log out" hasDivider={true} />
      <ProfileMenuItem icon="home" text="Home" />
    </ul>
  );
}

ProfileMenu.propTypes = {
  profileMenuOpen: PropTypes.bool,
};

export default ProfileMenu;
