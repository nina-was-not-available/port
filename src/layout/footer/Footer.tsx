import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import FooterIcon from "./footericon/FooterIcon";
import {IconWrapper} from "../../components/IconWrapper";
import {S} from './Fooret_Styles'


const socialItemData = [
    {
        href: 'https://www.instagram.com/nina_uprt/',
        iconId: 'instagram'
    },
    {
        href: 'https://t.me/ninamatushkina',
        iconId: 'telegram'
    },
    {
        href: 'https://vk.com/this_is_death',
        iconId: 'vk'
    },
]



const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
            <S.Nina>Nina</S.Nina>
            <S.SocialList>
                {socialItemData.map((s, index) => {
                    return (<S.SocialItem key={index}>
                        <S.SocialLink href={s.href}>
                            <IconWrapper>
                                <FooterIcon iconId={s.iconId}/>
                            </IconWrapper>
                        </S.SocialLink>
                    </S.SocialItem>)
                })}
            </S.SocialList>
                <S.Copyright>2023 Junior Nina, Happy Hacking!</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};





export default Footer;