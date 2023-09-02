import styled from "styled-components";
import theme from "../styles/Theme";

const Footer = styled.footer`
  background-color: ${theme.colors.text};
  padding: 20px;
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
`

//FooterIcon
const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 30px;
`
export const S = {
    Footer,
    SocialItem,
    SocialList,
    SocialLink,
    Copyright,
    FooterIcon
}