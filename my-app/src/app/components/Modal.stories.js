import React from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  title: 'Default Modal - Small',
  content: <p>This is a default small modal.</p>,
  showFooter: true,
  size: 'small',
};

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {
  title: 'Default Modal - Medium',
  content: <p>This is a default medium modal.</p>,
  showFooter: true,
  size: 'medium',
};

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  title: 'Default Modal - Large',
  content: <p>This is a default large modal.</p>,
  showFooter: true,
  size: 'large',
};

export const ImportContentSmall = Template.bind({});
ImportContentSmall.args = {
  title: 'Modal With Import Content - Small',
  content: <p>This is a small modal with import content.</p>,
  showFooter: true,
  size: 'small',
};

export const ImportContentMedium = Template.bind({});
ImportContentMedium.args = {
  title: 'Modal With Import Content - Medium',
  content: <p>This is a medium modal with import content.</p>,
  showFooter: true,
  size: 'medium',
};

export const ImportContentLarge = Template.bind({});
ImportContentLarge.args = {
  title: 'Modal With Import Content - Large',
  content: <p>This is a large modal with import content.</p>,
  showFooter: true,
  size: 'large',
};

export const DeleteContentSmall = Template.bind({});
DeleteContentSmall.args = {
  title: 'Modal With Delete Content - Small',
  content: <p>This is a small modal with delete content.</p>,
  showFooter: true,
  size: 'small',
};

export const DeleteContentMedium = Template.bind({});
DeleteContentMedium.args = {
  title: 'Modal With Delete Content - Medium',
  content: <p>This is a medium modal with delete content.</p>,
  showFooter: true,
  size: 'medium',
};

export const DeleteContentLarge = Template.bind({});
DeleteContentLarge.args = {
  title: 'Modal With Delete Content - Large',
  content: <p>This is a large modal with delete content.</p>,
  showFooter: true,
  size: 'large',
};
