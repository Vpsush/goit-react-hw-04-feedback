import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={css.notification}>{message}</div>;
};

export default Notification;
