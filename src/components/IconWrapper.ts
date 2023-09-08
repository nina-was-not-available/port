import theme from "../layout/styles/Theme";
import styled from "styled-components";



export const IconWrapper =styled.div`
  position: relative;
  padding-left: 5px;
  &::before{
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.text2};
    transform: translateX(-50%);
    position: absolute;
    top: -10%;
    left: 50%;
    transition: ${theme.animations.transition};
  }
  
  &:hover::before {
    background-color: ${theme.colors.accent};
  }
`