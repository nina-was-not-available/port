import theme from "../../styles/Theme";
import {font} from "../../styles/Common";
import styled from "styled-components";

const Main = styled.section`
  min-height: 100%;
  display: flex;
  position: relative;

`
const PhotoWrapper = styled.div`
 position:relative;

  &::before {
    content: '';
    width: 350px;
    height: 430px;
    border: 12px solid ${theme.colors.text2};
    position: absolute;
    bottom: 30px;
    left: 30px;
    z-index: 2;

    @media ${theme.media.mobile} {
      width: 300px;
      height: 380px;
      bottom: 20px;
      left: 20px;
      border: 8px solid ${theme.colors.text2};
    }
  }

  &::after {
    content: '';
    width: 350px;
    height: 430px;
    border: 12px solid ${theme.colors.accent};
    position: absolute;
    left: -30px;
    bottom: -30px;
    z-index: 0;

    @media ${theme.media.mobile} {
      width: 300px;
      height: 380px;
      left: -20px;
      bottom: -20px;
      border: 8px solid ${theme.colors.accent};
    }
  }
  
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  z-index: 1;
  position: relative;
  box-shadow: -3px 3px 10px;
  @media ${theme.media.mobile} {
    width: 300px;
    height: 380px;
   
  }
`

const TextWrapper = styled.div`
  flex-wrap: wrap;
  margin-right: 40px;
  @media ${theme.media.tablet} {
    padding-bottom: 50px;
  }
`

const Name = styled.h2`
   ${font({weight: 700, fmax: 50, fmin: 36})};
`
const Hello = styled.span`
  ${font({weight: 400, color: theme.colors.text, fmax: 30, fmin: 20})};
`
const Junior = styled.span`
  ${font({weight: 400, color: theme.colors.text, fmax: 36, fmin: 28})};
  span {
    white-space: nowrap;
    position: relative;
    z-index: 0;
    &::before{
      content:'';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
      
      @media ${theme.media.tablet} {
        height: 15px;
      }
    }
  }
`

export const S = {
    Main,
    PhotoWrapper,
    Photo,
    TextWrapper,
    Name,
    Hello,
    Junior
}