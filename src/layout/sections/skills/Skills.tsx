import React from 'react';
import Kinopoisk from "./kinopoisk/Kinopoisk";
import {SectionTitle} from "../../../components/SectionTitle";
import Conteiner from "../../../components/Conteiner";
import {S} from './Skill_Styles'

export const Skills: React.FC = () => {
    return (
        <S.Slider id={'skills'}>
            <Conteiner>
            <SectionTitle>My potential skills</SectionTitle>
            <Kinopoisk/>
            </Conteiner>
        </S.Slider>
    );
};



export default Skills;

