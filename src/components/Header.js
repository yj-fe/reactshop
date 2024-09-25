import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.shadowLight};
`

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>ReactShop</h1>
    </HeaderWrapper>
  )
}
