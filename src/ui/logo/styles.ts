import styled, { css } from 'styled-components'
import { LogoProps } from './logo'

export const LogoModifiers = {
  sizes: {
    small: () => css`
      width: 50px;
      height: 30px;
    `,
    medium: () => css`
      width: 100px;
      height: 50px;
    `,
    large: () => css`
      width: 130px;
      height: 50px;
    `
  }
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size = 'medium' }) => css`
    display: flex;
    align-items: center;

    ${!!size && LogoModifiers.sizes[size]()}
  `}
`
