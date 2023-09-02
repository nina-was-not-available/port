import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Navigation from "../../../components/navigation/Navigation";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from './../../../assets/images/social-network.webp'
import todoImg from './../../../assets/images/todolist.webp'
import Conteiner from "../../../components/Conteiner";
import WorksNavigation from "./WorksNavigation/WorksNavigation";


const worksItems = ['All', 'Landing page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <Conteiner>
            <SectionTitle>My future works</SectionTitle>
            <WorksNavigation navigationItems={worksItems}/>
            <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                <Work title={'Social Network'} text={'It seems too difficult, but so interesting!'} src={socialImg}/>
                <Work title={'To Do List'} text={"Almost every student talks about it!"} src={todoImg}/>
            </FlexWrapper>
            </Conteiner>
        </StyledWorks>
    );
};

export default Works;

const StyledWorks = styled.section`
 ${FlexWrapper} {
   gap: 20px;
 }
`