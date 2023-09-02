import React from 'react';
import iconsSprite from '../../assets/images/sprite.svg'


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '25px'} height={props.height || '25px'} viewBox={props.viewBox || '0 0 25 25'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

export default Icon;