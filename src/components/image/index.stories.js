import React from 'react';
import Image from './';

const imageUrl =
  'https://images.freeimages.com/images/small-previews/05e/on-the-road-6-1384796.jpg';

export default {
  title: 'Image',
  component: Image,
};

export const Basic = () => <Image src={imageUrl} size='300px' />;
export const Rounded = () => <Image shape='rounded' src={imageUrl} size='300px' />;
export const Round = () => <Image shape='round' src={imageUrl} size='300px' />;
export const Shadow = () => <Image shape='round' boxShadow={3} src={imageUrl} size='300px' />;
