import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 /* 모바일 반응형 */
  @media (max-width: 768px) {
    body {
      font-family: 'Inter', sans-serif;
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    }
  }
`
