import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";
import theme from "../styles/Theme";
import FooterIcon from "./footericon/FooterIcon";
import {IconWrapper} from "../../components/IconWrapper";

const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <SectionTitle>Nina</SectionTitle>
            <SocialList>
                <SocialItem>
                    <SocialLink href={'https://www.instagram.com/nina_uprt/'}>
                        <IconWrapper>
                            <FooterIcon iconId={'instagram'}/>
                        </IconWrapper>

                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href={'https://t.me/ninamatushkina'}>
                        <IconWrapper>
                            <FooterIcon iconId={'telegram'}/>
                        </IconWrapper>

                    </SocialLink>
                </SocialItem>
                <SocialItem>

                        <SocialLink href={'https://vk.com/this_is_death'}>
                            <IconWrapper>
                            <FooterIcon iconId={'vk'}/>
                            </IconWrapper>
                        </SocialLink>

                </SocialItem>
            </SocialList>
                <Copyright>2023 Junior Nina, Happy Hacking!</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
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


export default Footer;