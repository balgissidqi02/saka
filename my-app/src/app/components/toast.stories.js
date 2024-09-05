import React from 'react';
import Toast from './toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const SuccessSmall = Template.bind({});
SuccessSmall.args = {
  type: 'success',
  size: 'small',
  title: 'Success Message',
  message: 'Give short additional message here. Maximum 2 line.',
};

export const SuccessMedium = Template.bind({});
SuccessMedium.args = {
  type: 'success',
  size: 'medium',
  title: 'Success Message',
  message: 'Give short additional message here. Maximum 2 line.',
};

export const SuccessLarge = Template.bind({});
SuccessLarge.args = {
  type: 'success',
  size: 'large',
  title: 'Success Message',
  message: 'Give short additional message here. Maximum 2 line.',
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
  type: 'danger',
  size: 'small',
  title: 'Failed Message',
  message: 'Give short additional message here. Maximum 2 line.',
};

export const DangerMedium = Template.bind({});
DangerMedium.args = {
  type: 'danger',
  size: 'medium',
  title: 'Failed Message',
  message: 'Give short additional message here. Maximum 2 line.',
};

export const DangerLarge = Template.bind({});
DangerLarge.args = {
  type: 'danger',
  size: 'large',
  title: 'Failed Message',
  message: 'Give short additional message here. Maximum 2 line.',
};

export const WarningSmall = Template.bind({});
WarningSmall.args = {
  type: 'warning',
  size: 'small',
  title: 'Warning Message',
  message: 'This is a warning message.',
};

export const WarningMedium = Template.bind({});
WarningMedium.args = {
  type: 'warning',
  size: 'medium',
  title: 'Warning Message',
  message: 'This is a warning message.',
};

export const WarningLarge = Template.bind({});
WarningLarge.args = {
  type: 'warning',
  size: 'large',
  title: 'Warning Message',
  message: 'This is a warning message.',
};

export const NotificationSmall = Template.bind({});
NotificationSmall.args = {
  type: 'notification',
  size: 'small',
  title: 'Notification',
  message: 'Hello, world! This is a toast message.',
  timeAgo: '11 mins ago',
};

export const NotificationMedium = Template.bind({});
NotificationMedium.args = {
  type: 'notification',
  size: 'medium',
  title: 'Notification',
  message: 'Hello, world! This is a toast message.',
  timeAgo: '11 mins ago',
};

export const NotificationLarge = Template.bind({});
NotificationLarge.args = {
  type: 'notification',
  size: 'large',
  title: 'Notification',
  message: 'Hello, world! This is a toast message.',
  timeAgo: '11 mins ago',
};
