import React from 'react';
import { InfoWrapper } from './styles';

export default function Info({ children }) {
  return (
    <InfoWrapper>
      <p>{children}</p>
    </InfoWrapper>
  );
}
