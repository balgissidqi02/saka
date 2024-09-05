import React from 'react';
import Breadcrumb from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

const breadcrumbItems = [
  { label: 'Home', link: '/', icon: '🏠' },
  { label: 'Category', link: '/category' },
  { label: 'Subcategory', link: '/category/subcategory' },
  { label: 'Product', link: '/category/subcategory/product' },
];


export const Default = () => (
  <Breadcrumb items={breadcrumbItems} type="default" size="medium" />
);


export const Custom = () => (
  <Breadcrumb items={breadcrumbItems} type="custom" size="medium" />
);


export const Small = () => (
  <Breadcrumb items={breadcrumbItems} type="default" size="small" />
);

export const Medium = () => (
  <Breadcrumb items={breadcrumbItems} type="default" size="medium" />
);

export const Large = () => (
  <Breadcrumb items={breadcrumbItems} type="default" size="large" />
);
