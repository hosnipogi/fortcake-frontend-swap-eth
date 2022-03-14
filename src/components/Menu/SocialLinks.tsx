import React from 'react'
import { Flex, Link, IconComponent, useMatchBreakpoints } from 'fortcake-uikit'
import { socials } from './config'

const SocialLinks: React.FC = ({ ...props }) => {
  const { isXl } = useMatchBreakpoints()
  return (
    <Flex {...props}>
      {socials.map((social, index) => {
        const iconProps = {
          iconName: social.icon,
          width: '20px',
          style: { cursor: 'pointer' },
        }

        const lastIndex = index < socials.length - 1
        const mr = lastIndex && isXl ? '24px' : lastIndex && !isXl ? '18px' : 0
        return (
          <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
            <IconComponent {...iconProps} />
          </Link>
        )
      })}
    </Flex>
  )
}

export default React.memo(SocialLinks, () => true)
