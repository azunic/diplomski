import ReactDOM from 'react-dom';
import ProfileComponent from '../components/profile/ProfileComponent';
import { Button, Accordion, Card } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigationItems = useSelector((state) => state.webShop.navigationItems);
  const error = useSelector((state) => state.webShop.errorNavigationItems);
  const userProfileData = useSelector((state) => state.webShop.userProfileData);
  useEffect(() => {
    console.log(userProfileData);
    console.log(userProfileData);
    dispatch(actions.fetchNavigation());
  }, []);
  return (
    <div>
      <ProfileComponent props={userProfileData}></ProfileComponent>
    </div>
  );
}
