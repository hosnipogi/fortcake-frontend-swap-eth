import { createGlobalStyle } from 'styled-components'
import Bg from '../assets/svg/bg.svg'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) =>
      theme.isDark
        ? `url(${Bg})`
        : `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+)`};
    ${({ theme }) =>
      theme.isDark &&
      `
      background-position: 50% 0%;
      background-size: cover;
      background-repeat: no-repeat;`}
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
