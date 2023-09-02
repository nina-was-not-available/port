import React from 'react';
import {S} from './../Works_Styles'
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={''}/>
                <Button>In progress...</Button>
            </S.ImageWrapper>

            <S.Tittle>{props.title}</S.Tittle>
            <S.Text>{props.text}</S.Text>
        </S.Work>
    );
};

export default Work;