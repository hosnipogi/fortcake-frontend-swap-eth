import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'fortcake-uikit'
// import TranslatedText from '../TranslatedText'
import Links from '../../constants/links'

const { eth, bsc, pol } = Links

const StyledNav = styled.div`
  margin-bottom: 40px;
`

const Nav = ({ activeIndex = 1 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="pool-nav-link" href={bsc} as="a">
        BSC
      </ButtonMenuItem>
      <ButtonMenuItem id="swap-nav-link" href={eth} as="a">
        ETH
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" href={pol} as="a">
        POL
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
