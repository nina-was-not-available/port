import styled from "styled-components";
import React from 'react';
import Kinopoisk from "./skill/Kinopoisk";
import {SectionTitle} from "../../../components/SectionTitle";
import Conteiner from "../../../components/Conteiner";

export const Skills1 = () => {
    return (
        <StyledSlider>
            <Conteiner>
            <SectionTitle>My potential skills</SectionTitle>
            <Kinopoisk/>
            </Conteiner>
        </StyledSlider>
    );
};

const StyledSlider = styled.section`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`


export default Skills1;

