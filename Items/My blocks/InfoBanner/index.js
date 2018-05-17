import React from 'react';
import Title from './Title';

const InfoBanner = ({children}) => {
  return <div>{children}</div>
}

InfoBanner.Title = Title;

export default InfoBanner;