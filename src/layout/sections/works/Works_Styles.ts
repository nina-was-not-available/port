import styled from "styled-components";
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
  background-color: rgba(252, 218, 179, 0.76);
  box-shadow: 0px 0px 10px;
  max-width: 400px;
  width: 100%;
  padding: 10px;
  @media ${theme.media.desktop} {
    max-width: 400px;
  }
`

const ImageWrapper = styled.div `
  position: relative;
  filter: sepia(30%);
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-60%, -100%);

    &::before{
      height: 40px;
      top: 0;
      border: ${theme.colors.text2} solid 2px;
      border-radius: 10px;
    }
  }
  
  &:hover {
    ${Button} {
      opacity: 1;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 23px;
      background-color: rgba(153, 55, 2, 0.29);
      backdrop-filter: blur(3px);
    }
  }
  
   @media ${theme.media.tablet} {
      ${Button} {
  opacity: 1;
}
&::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 23px;
  background-color: rgba(153, 55, 2, 0.29);
  backdrop-filter: blur(3px);
}
 `


const Image = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
  margin-bottom: 20px;
 
`

const Tittle = styled.h3`
  margin: 20px;
 ${font({weight: 600, fmax: 40, fmin: 30, color: theme.colors.text})};
  position: relative;
  display: inline;
  z-index: 0;
  &::before{
    content:'';
    display: inline-block;
    width: 100%;
    height: 20px;
    left: 0px;
    top: 25px;
    border-radius: 0px;
    background-color: ${theme.colors.accent};
    position: absolute;
    z-index: -1;
    @media ${theme.media.tablet} {
      height: 15px;
    }
  }
  @media ${theme.media.mobile} {
    margin: 10px 0px;
  }
`

const Text = styled.p`
    margin: 20px;
  ${font({weight: 400, fmax: 25, fmin: 15, color: theme.colors.text, family: 'Waree'})};
  @media ${theme.media.mobile} {
    margin: 10px 0px;
  }
  
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
    position: relative;
`
const Link = styled.a`
  &:hover {
    &::before {
      content: '';
      display: inline-block;
      height: 2px;
      position: absolute;
      background-color: ${theme.colors.accent};
      bottom: 10px;
      left: -10px;
      right: -10px;
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
    ListItem
}