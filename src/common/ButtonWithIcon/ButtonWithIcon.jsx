/* eslint-disable react/prop-types */
import React from 'react';

import { StyledButton } from './styles';

export const ButtonWithIcon = ({
  buttonText,
  onClick,
  type = 'button',
  className,
  icon,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      <div style={{ marginRight: 23 }}>{icon}</div>
      {buttonText}
    </StyledButton>
  );
};
