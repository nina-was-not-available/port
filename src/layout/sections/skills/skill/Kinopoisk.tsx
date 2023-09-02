import React from 'react';
import styled from "styled-components";
import first from './../../../../assets/images/skills1/image_part_001.png';
import second from './../../../../assets/images/skills1/image_part_002.png';
import third from './../../../../assets/images/skills1/image_part_003.png';
import forth from './../../../../assets/images/skills1/image_part_004.png';
import fifth from './../../../../assets/images/skills1/image_part_005.png';
import sixth from './../../../../assets/images/skills1/image_part_006.png';
import reactpng from './../../../../assets/images/skills1/reactpng.png';
import csspng from './../../../../assets/images/skills1/csspng.png';
import htmlpng from './../../../../assets/images/skills1/htmlpng.png';
import scpng from './../../../../assets/images/skills1/scpng.png';
import enpng from './../../../../assets/images/skills1/enpng.png';
import jspng from './../../../../assets/images/skills1/noun-js-4882515.png';
import theme from "../../../styles/Theme";

type SlidePropsType = {
    pic: string
}

const Kinopoisk = () => {
    return (
        <StyledKinopoisk>
            <Slide pic={first}><Img src={reactpng}/><SomeText>Today I can only "Create React App", but I believe it won't for long</SomeText></Slide>
            <Slide pic={second}><Img src={scpng}/><SomeText>I've already got to know "Styled Components", and it's really convenient!</SomeText></Slide>
            <Slide pic={third}><Img src={htmlpng}/><SomeText>I've studied HTML in collage, but it was a piece of a subject "Musical Informatics" </SomeText></Slide>
            <Slide pic={forth}><Img src={csspng}/><SomeText>In the "Musical Informatics" we've been writing some articles about modern musicians</SomeText></Slide>
            <Slide pic={fifth}><Img src={enpng}/><SomeText>I'm learning English all my life and now I'm in B2 level</SomeText></Slide>
            <Slide pic={sixth}><Img src={jspng}/><SomeText>My favourite book is "Java Script for children"</SomeText></Slide>
        </StyledKinopoisk>
    );
};


const StyledKinopoisk = styled.div`
  flex-wrap: wrap;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  gap: 20px;
`

const SomeText = styled.div`
  color: ${theme.colors.text2};
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  font-size: 1.5rem;
  position: absolute;
  z-index: -1;
  @media ${theme.media.mobile} {
    font-size: 1rem;
  }
`

const Slide = styled.div<SlidePropsType>`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.pic});
  background-size: cover;
  position: relative;
  &:hover {
    scale: 1.25;
    transition: .5s;
    box-shadow: 0px 0px 20px;
    z-index: 1;
    
    
    ${SomeText} {
      opacity: 1;
      backdrop-filter: brightness(30%);
    }
  }
  
  @media ${theme.media.mobile} {
    width: 145px;
    height: 145px;
  }
`
const Img = styled.img`
  height: 100%;
  width: 100%;
  padding: 20%;
  opacity: 0.7;
  transition: .9s;
  &:hover {
    opacity: 0;
  }
`


export default Kinopoisk