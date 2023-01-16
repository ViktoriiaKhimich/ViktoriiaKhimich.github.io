import * as React from 'react';

import { Logo } from '../../assets/icons/Logo';

import { StyledHeader, StyledNav } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <ul>
          <li>Assets</li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};
