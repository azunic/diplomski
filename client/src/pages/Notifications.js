import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from '../components/profile/ProfileForm';
import Notification from '../components/notification/Notification';
import { Button, Accordion, Card } from 'react-bootstrap';

export default function NotificationPage() {
  return (
    <div>
      <Notification></Notification>
    </div>
  );
}
