import styled from "styled-components";
import theme from "../styles/Theme";
import {font} from "../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.text};
  padding: 20px;
  position: relative;
`

const Nina = styled.h2`
  color: ${theme.colors.text2};
  ${font({weight: 700, fmax: 50, fmin: 36, color: theme.colors.text2})};
`


const SocialList = styled.ul`
    list-style: none;
    display: flex;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  `

const Copyright = styled.small`
  color: ${theme.colors.text2};
  margin-top: 20px;
  font-family: FreeMono;
`

//FooterIcon
const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
`



export const S = {
    Footer,
    SocialItem,
    SocialList,
    SocialLink,
    Copyright,
    FooterIcon,
    Nina
}