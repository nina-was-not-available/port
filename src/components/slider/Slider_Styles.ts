import styled from "styled-components";
import theme from "../../layout/styles/Theme";


const Slider = styled.div`
  background-image: linear-gradient(transparent 1%,  ${theme.colors.text2} 90%);
  padding: 20px;
  max-width: 300px;
  width: 100%;
`
const Slide = styled.div`
    margin: 20px 0px;
`

const Pagination = styled.span`
    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: ${theme.colors.accent};
      border-radius: 20px;
      & + span {
        margin-left: 5px;
      }
      &.active {
        width: 20px;
      }
    }
`

const Picture = styled.img`
  height: 100px;
  opacity: 0.8;
`
const Text = styled.p`
    margin-top: 50px;
  position: relative;
`


export const S = {
    Text,
    Picture,
    Slide,
    Slider,
    Pagination
}