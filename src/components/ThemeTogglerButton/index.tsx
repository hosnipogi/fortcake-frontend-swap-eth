import React, { useContext } from 'react'
import { Button, Flex, Text } from 'fortcake-uikit'
import { MoonIcon, SunIcon } from 'components/Icons'
import { ThemeContext } from '../../ThemeContext'

const ThemeToggler = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <Button variant="text" onClick={() => toggleTheme()}>
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <SunIcon color={!isDark ? 'textDisabled' : '#32fa99'} width="24px" />
        <Text color="textDisabled" mx="4px">
          /
        </Text>
        <MoonIcon color={!isDark ? 'text' : 'textDisabled'} width="24px" />
      </Flex>
    </Button>
  )
}

export default ThemeToggler
