import React from 'react';
import Title from './Title';
import CardRight from './CardRight';

const InfoBanner = ({children}) => {
  return <div>{children}</div>
}

InfoBanner.Title = Title;
InfoBanner.CardRight = CardRight;

export default InfoBanner;