import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenuItem from './profileMenuItem';
import { withRouter } from 'react-router';
import * as actions from '../../../store/actions';
import { useDispatch } from 'react-redux';

function ProfileMenu(props) {
  const { profileMenuOpen, history } = props;
  const dispatch = useDispatch();

  const navGoToFunction = (name) => {
    console.log(name);
    history.push(`/${name}`);
  };

  const GoToLogin = () => {
    dispatch(actions.logout());
    history.push('/login');
  };
  return (
    <ul id="profile-menu" className={`profile-menu profile-menu-${profileMenuOpen ? 'active' : 'inactive'}`}>
      <ProfileMenuItem
        icon="notification"
        text="Notifications"
        hasNotification={true}
        notificationCounter="135"
        navOnClick={() => navGoToFunction('Notifications')}
      />
      <ProfileMenuItem icon="profile" text="Profile" navOnClick={() => navGoToFunction('Profile')} />
      <ProfileMenuItem icon="logout" text="Log out" hasDivider={true} navOnClick={() => GoToLogin()} />
      <ProfileMenuItem icon="home" text="Home" navOnClick={() => navGoToFunction('Home')} />
    </ul>
  );
}

ProfileMenu.propTypes = {
  profileMenuOpen: PropTypes.bool,
};

export default ProfileMenu;
