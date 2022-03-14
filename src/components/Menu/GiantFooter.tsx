import React from 'react'
import styled from 'styled-components'
import { Text, Flex } from 'fortcake-uikit'
import { FooterLinks } from './config'
import SocialLinks from './SocialLinks'
import ThemeToggler from '../ThemeTogglerButton'

const Footer = styled(Flex)`
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 1px ${({ theme }) => theme.colors.backgroundDisabled};
  align-items: center;
  padding: 56px 20px;
  margin-bottom: 50px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 56px 40px 36px;
    justify-content: center;
    flex-direction: row;
    flex-direction: column;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
  }
`

const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  max-width: ${({ theme }) => theme.siteWidth}px;
`

const MenuSection = styled.ul`
  margin-bottom: 40px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
  }
`

const LinksContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 42px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    margin-bottom: 36px;
  }
`
const MenuCategory = styled.li`
  font-weight: 600;
  list-style-type: none;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 8px;
  color: ${({ theme }) => (theme.isDark ? '#56C9AC' : theme.colors.text)};
`

const StyledLink = styled.li`
  &:hover {
    text-decoration: underline;
  }
  margin-bottom: 8px;
  font-weight: 400;
  list-style-type: none;
`

const SocialsContainer = styled(Flex)`
  /* margin: 1rem 0; */
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.lg} {
    /* margin: 1rem 0 0; */
  }
`

const GiantFooter: React.FC = () => {
  return (
    <Footer>
      <Wrapper>
        <LinksContainer>
          {FooterLinks.map(({ label, items }) => (
            <MenuSection>
              <MenuCategory key={label}>{label}</MenuCategory>
              {items.map((links) => (
                <StyledLink>
                  <Text key={links.label} href={links.href} as="a">
                    {links.label}
                  </Text>
                </StyledLink>
              ))}
            </MenuSection>
          ))}
          <Text />
        </LinksContainer>
        <SocialsContainer>
          <SocialLinks />
          <ThemeToggler />
        </SocialsContainer>
      </Wrapper>
    </Footer>
  )
}

export default GiantFooter
