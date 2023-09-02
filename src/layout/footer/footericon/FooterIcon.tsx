import React from 'react';
import iconsSprite from './../../../assets/images/sprite.svg'
import styled from "styled-components";
import theme from "../../styles/Theme";


type FooterIconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
const FooterIcon = (props: FooterIconPropsType) => {
    return (
        <StyledFooterIcon>
        <svg width={props.width || '25px'} height={props.height || '25px'} viewBox={props.viewBox || '0 0 25 25'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
        </StyledFooterIcon>
    );
};

const StyledFooterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 30px;
`

export default FooterIcon;