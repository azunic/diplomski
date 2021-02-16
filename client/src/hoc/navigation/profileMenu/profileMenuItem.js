import React from 'react';
import PropTypes from 'prop-types';
import getIcon from '../../../utils/iconsLoader';

function ProfileMenuItem(props) {
  const { icon, text, hasNotification, notificationCounter, hasDivider, navOnClick } = props;
  return (
    <>
      <li className="profile-menu-row" onClick={navOnClick}>
        <div className="profile-menu-row-left">
          <div className="profile-menu-row-left-icon">
            <img src={getIcon(icon)} alt={`${icon} icon`}></img>
          </div>
          <div className="profile-menu-row-left-title">{text}</div>
        </div>
        {hasNotification ? (
          <div className="profile-menu-row-notifications">
            <div className="profile-menu-row-notifications-nbubble">{notificationCounter}</div>
          </div>
        ) : (
          <div className="profile-menu-row-notifications">&nbsp;</div>
        )}
      </li>
      {hasDivider && <li className="profile-menu-row-divider"></li>}
    </>
  );
}

ProfileMenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasNotification: PropTypes.bool,
  notificationCounter: PropTypes.string,
  hasDivider: PropTypes.bool,
};

export default ProfileMenuItem;
