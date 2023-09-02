import styled from "styled-components";
import theme from "../../styles/Theme";

//About

const About = styled.section`
 
`
const Parts = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 30px 30px 30px;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`

//Part
type StyledPart1PropsType = {
    text1?: string
    text2?: string
    img: string
}



const Strelka = styled.div`
  width: 40px;
  height: 40px;
  background-color: #faf5e3;
  opacity: 0.7;
  display: flex;
  top: 70px;
  left: 50px;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    transform: rotate(225deg);
    border-top: 4px solid ${theme.colors.accent};
    border-left: 4px solid ${theme.colors.accent};
    top: 12px;
    left: 14px;
  }
`


const Part = styled.div<StyledPart1PropsType>`
  display: flex;
  justify-content: center;
  opacity: 1;
  font-size: 1.5rem;
  font-weight: 500;
  width: 250px;
  height: 250px;
  background-image: url(${props => props.img});
  background-size: cover;
  box-shadow: 0px 0px 10px;
  transition: .3s;
  position: relative;
  overflow: hidden; 
  padding-top: 10px;
  border-radius: 30px;
  filter: sepia(30%);
  &:hover {
    height: 500px;
  }
`


const Text = styled.h3`
    margin: 10px;
  left: -15px;
  font-weight: bold;
  position: relative;
    z-index: 0;
    &::after{
      content:'';
      display: inline-block;
      width: 100%;
      height: 20px;
      left: 0;
      top: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      z-index: -1;
    }
  
  
  
`
const Description = styled.p`
  text-align: start;
  position: absolute;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  top: 250px;
  left: 0px;
  right: 0px;
  font-size: 20px;
  font-weight: 400;
  max-width: 250px;
  width: 100%;
  height: 250px;
  border-radius: 0px 0px 30px 30px;
  background-image: linear-gradient(to top, ${theme.colors.accent} 40%, transparent);
`

export const S = {
    About,
    Parts,
    Strelka,
    Part,
    Text,
    Description
}