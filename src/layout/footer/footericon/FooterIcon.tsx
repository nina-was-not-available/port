import React from 'react';
import iconsSprite from './../../../assets/images/sprite.svg'
import {S} from './../Fooret_Styles'


type FooterIconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
const FooterIcon: React.FC<FooterIconPropsType> = (props: FooterIconPropsType) => {
    return (
        <S.FooterIcon>
        <svg width={props.width || '25px'} height={props.height || '25px'} viewBox={props.viewBox || '0 0 25 25'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
        </S.FooterIcon>
    );
};



export default FooterIcon;