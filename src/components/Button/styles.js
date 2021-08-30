import { Link as LinkWouter } from "wouter";
import styled from '@emotion/styled'

const SIZES = {
  small: '1rem',
  medium: '2rem',
  large: '3rem'
}

const getFontSize = props => {
  const size = SIZES[props.size]
  if (!size) {
    console.warn(`[Button Styled Component] This size is not correct. Use ${Object.keys(SIZES).join(', ')}`)
    return SIZES.small
  }
  return size
}

export const Link = styled(LinkWouter)`
  background-color: #8A2BE2;
  border: 1px solid transparent;
  color: #FFFFFF;
  cursor: pointer;
  font-size: ${getFontSize};
  padding: .5rem 1rem;
  :hover {
    background-color: var(--brand-color_2);
  }
  [disabled] {
    opacity: .3;
    pointer-events: none;
  }
`

export const Button = Link.withComponent('button')