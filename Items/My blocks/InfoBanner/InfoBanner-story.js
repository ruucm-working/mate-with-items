import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import Items!
import Title from './Title';
import CardRight from './CardRight';

// import Heading2 from './Heading2';
// import Paragraph from './Paragraph';
// import Span from './Span';

storiesOf('😃 InfoBanner', module)
  .add('Title', () => <Title />)
  .add('CardRight', () => <CardRight />)

