import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.primary}; /* 배경색 */
  color: ${({ textColor }) => textColor || '#fff'}; /* 텍스트 색상 */
  font-size: ${({ fontSize }) => fontSize || '1rem'}; /* 폰트 크기 */
  padding: ${({ padding }) => padding || '10px 20px'}; /* 패딩 */
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '50px'};
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, hoverBgColor }) =>
      hoverBgColor || theme.shadowLight};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
`

export default function Button({
  children,
  bgColor,
  textColor,
  fontSize,
  padding,
  borderRadius,
  hoverBgColor,
  ...props
}) {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      fontSize={fontSize}
      padding={padding}
      borderRadius={borderRadius}
      hoverBgColor={hoverBgColor}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
