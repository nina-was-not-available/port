
import styled from "styled-components";
import theme from "../../styles/Theme";

//Skills
const Slider = styled.section`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  
`


//Kinopoisk
const Kinopoisk = styled.div`
  flex-wrap: wrap;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  gap: 25px;
  @media ${theme.media.mobile} {
    gap: 20px;
  }
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

type SlidePropsType = {
    pic?: string
}


const Slide = styled.div<SlidePropsType>`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url(${props => props.pic});
  // background-size: cover;
  background-image: radial-gradient(${theme.colors.primaryBg} 10%, ${theme.colors.text2} 90%);
  position: relative;
  z-index: 0;
 
  &:hover {
    scale: 1.2;
    transition: scale .6s;
    box-shadow: 0px 0px 10px;
    z-index: 1;
    background-color: ${theme.colors.text};
    opacity: 0.8;
    
    background-image: none;
    
    ${SomeText} {
      opacity: 1;
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
  transition: opacity .3s;
  &:hover {
    opacity: 0;
  }
`


export const S = {
    Kinopoisk,
    SomeText,
    Slide,
    Img,
    Slider
}