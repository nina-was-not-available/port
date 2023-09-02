import React from 'react';
import {S} from './../About_Styles'

type StyledPart1PropsType = {
    text1?: string
    text2?: string
    img: string
}


const Part: React.FC<StyledPart1PropsType> = (props:StyledPart1PropsType) => {
    return (
        <S.Part img={props.img}>
            <S.Strelka></S.Strelka>
            <S.Text>{props.text1}</S.Text>
            <S.Description>{props.text2}</S.Description>
        </S.Part>
    );
};


export default Part;