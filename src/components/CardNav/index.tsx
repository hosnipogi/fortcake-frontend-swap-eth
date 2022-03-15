import React from "react";
import styled from "styled-components";
import { ButtonMenu, ButtonMenuItem } from "fortcake-uikit";
import { Links } from "../Menu/config";

const StyledNav = styled.div`
  margin-bottom: 40px;
`;

const Nav = ({ activeIndex = 1 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="pool-nav-link" href={Links.bsc} as="a">
        BSC
      </ButtonMenuItem>
      <ButtonMenuItem id="swap-nav-link" href={Links.eth} as="a">
        ETH
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" href={Links.pol} as="a">
        POL
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
);

export default Nav;
