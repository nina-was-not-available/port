import styled, {css} from "styled-components";
import theme from "../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {font} from "../../styles/Common";


//Works

const Works = styled.section`

 ${FlexWrapper} {
   gap: 20px;
 }
`
//Work

const Work = styled.div`
  background-image: linear-gradient(180deg, transparent 1%, ${theme.colors.text2} 90%);
  position: relative;
  max-width: 400px;
  width: 100%;
  padding: 10px;
  @media ${theme.media.desktop} {
    max-width: 400px;
  }
  @media screen and (max-width: 859px) {
    background-image: linear-gradient(180deg, ${theme.colors.primaryBg} 1%, ${theme.colors.text2} 90%);
  }
`

const ImageWrapper = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: sepia(30%);
  height: 230px;
  width: 100%;
  
  ${Button} {
    opacity: 0;
    position: absolute;
    transform: translateY(20%);
    transition: ${theme.animations.transition};
    
    &::before{
      height: 40px;
      top: 0;
    }
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(153, 55, 2, 0.29);
    backdrop-filter: blur(3px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }
  
  &:hover {
    ${Button} {
      opacity: 1;
      transform: translateY(0%);
    }
    &::before {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    ${Button} {
      opacity: 1;
      transform: translateY(0%);
    }
    &::before {
      opacity: 1;
      
    }
  }
`


const Image = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
  
 
`

const Tittle = styled.h3`
 ${font({weight: 600, fmax: 40, fmin: 30, color: theme.colors.text})};
  display: inline-block;
  margin-bottom: 10px;
`

const TextWrapper = styled.div`
 width: 100% ;
  padding: 20px;
  @media ${theme.media.mobile} {
    padding: 10px;
  }
`

const Text = styled.p`
  ${font({weight: 400, fmax: 20, fmin: 12, color: theme.colors.text, family: 'Waree'})};
`

//WorksNavigation
const WorksNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 350px;
 margin: 0 auto 20px;
  }
  
  a {
    color: ${theme.colors.text2};
    
  }
`
const ListItem = styled.li`

`
const Link = styled.a<{active: boolean}>`
  z-index: 0;
  position: relative;
    &::before {
      content: '';
      display: inline-block;
      height: 0px;
      transition: ${theme.animations.transition};
      position: absolute;
      background-color: ${theme.colors.accent};
      bottom: 0px;
      z-index: -1;
      left: -10px;
      right: -10px;

      ${props => props.active && css<{active:boolean}>`
          height: 10px;
      `}
      }
      &:hover {
        &::before {
          height: 10px;
        }
      }
      `





export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Tittle,
    Text,
    WorksNavigation,
    Link,
    ListItem,
    TextWrapper
}