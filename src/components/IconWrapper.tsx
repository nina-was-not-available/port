import theme from "../layout/styles/Theme";
import styled from "styled-components";

export const IconWrapper =styled.div`
  position: relative;
  &::before{
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.text2};
    transform: rotate(45deg) translate(-50%, -50%);
    position: absolute;
    border: ${theme.colors.accent} solid 2px;
    left: 50%;
    top: 50%;
    transform-origin: top left;
    
  }
`