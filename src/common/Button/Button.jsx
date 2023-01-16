/* eslint-disable react/prop-types */
import React from 'react';

import { StyledButton } from './styles';

export const Button = ({ buttonText, onClick, type = 'button', className }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={`${className} btn`}>
      {buttonText}
    </StyledButton>
  );
};
