import theme from "../../styles/Theme";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

//MobileMenu

const MobileHeader = styled.header`
  background-color: ${theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -120px;
  right: -100px;
  z-index: 999999999;
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.text2};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: transparent;
    `}
    
    &::before{
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.text2};
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css<{isOpen: boolean}>`
     transform: rotate(-45deg) translateY(0);
    `}
    }
    &::after{
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.text2};
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
    `}
    }
  }
  
`

const MobileMenuWrapper = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: ${theme.colors.text};
  opacity: 0.9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.6s;
  
  
  
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transition: 0.6s;
  }

  ${props => props.isOpen && css<{isOpen: boolean}>`
   transform: translateY(0);
    & ul {
      gap: 60px;
    }
  `}
  
  li {
    z-index: 0;
    position: relative;
      &::before {
        content: '';
        display: inline-block;
        height: 0px;
        position: absolute;
        background-color: ${theme.colors.accent};
        bottom: 0px;
        z-index: -1;
        left: -10px;
        right: -10px;
        transition: ${theme.animations.transition};
      }
    &:hover{
      &::before {
        height: 10px;
      }
    }
  }
`
const NavLink = styled(Link)`
    color: ${theme.colors.text2};
`


//DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  li {
    z-index: 0;
    position: relative;
      &::before {
        content: '';
        display: inline-block;
        height: 0px;
        position: absolute;
        background-color: ${theme.colors.accent};
        bottom: 0px;
        z-index: -1;
        left: -10px;
        right: -10px;
        transition: ${theme.animations.transition};
      }
    &:hover, &.active {
      &::before {
       height: 10px;
      }
    }
  }
  
  a {
    color: ${theme.colors.text2};
  }

`

export const S = {
    MobileHeader,
    BurgerButton,
    MobileMenuWrapper,
    DesktopMenu,
    NavLink
}