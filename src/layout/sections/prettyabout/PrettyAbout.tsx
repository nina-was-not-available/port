import React from 'react';
import styled from "styled-components";
import Conteiner from "../../../components/Conteiner";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Slider from "../../../components/slider/Slider";




const PrettyAbout: React.FC = () => {
    return (
        <StyledPrettyAbout>
            <Conteiner>
                <SectionTitle>Let me introduce myself!</SectionTitle>
                <FlexWrapper align={'center'} justify={'center'}>
                <Slider/>
                </FlexWrapper>
            </Conteiner>
        </StyledPrettyAbout>
    );
};

export default PrettyAbout;

const StyledPrettyAbout = styled.section`
`





