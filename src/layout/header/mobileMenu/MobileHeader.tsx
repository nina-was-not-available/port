import React from 'react';
import styled, {css} from "styled-components";
import theme from "../../styles/Theme";
import Conteiner from "../../../components/Conteiner";
export const MobileHeader = (props: {navigationItems: Array<string>}) => {
    return (

        <StyledMobileHeader>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={false}>
            <ul>

                {props.navigationItems.map((item, index)=>{
                    return <li key={index}>
                        <a href={''}>{item}</a>
                    </li>
                })}

            </ul>
            </MobileMenuWrapper>
        </StyledMobileHeader>

    );
};

const items = ['Home', 'About me', 'My potential skills', 'My future works',  'Contacts']


const StyledMobileHeader = styled.header`
  background-color: ${theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
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
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
  }

  a {
    color: ${theme.colors.text2};
  }
`

export default MobileHeader;



