import React from 'react';

import Card from './';

import mdx from './index.stories.mdx';

const description =
  'Lorem ipsum dolor amet twee occupy deep v cold-pressed. Street art skateboard man braid sint sed venmo in, cillum YOLO organic.';

export default {
  title: 'Card',

  parameters: {
    docs: mdx,
    component: Card,
  },
};

export const Empty = () => <Card />;
export const WithTitle = () => <Card title='Example' viewState></Card>;

WithTitle.story = {
  name: 'With title',
};

export const WithDescription = () => (
  <Card title='Example' description={description}>
    content
  </Card>
);

WithDescription.story = {
  name: 'With description',
};

export const WithOnAdd = () => (
  <Card title='Example' description={description} onAdd={() => console.log('adding')}>
    content
  </Card>
);

WithOnAdd.story = {
  name: 'With onAdd',
};

export const HiddenDividerNoDescription = () => (
  <Card hideDivider title='Example' onAdd={() => console.log('adding')}>
    content
  </Card>
);

HiddenDividerNoDescription.story = {
  name: 'Hidden divider, no description',
};

export const ViewstateHidingDescriptionAndActions = () => (
  <Card viewState title='Example' description={description} onAdd={() => console.log('adding')}>
    content
  </Card>
);

ViewstateHidingDescriptionAndActions.story = {
  name: 'viewstate hiding description and actions.',
};
