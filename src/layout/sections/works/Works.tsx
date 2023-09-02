import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from './../../../assets/images/social-network.webp'
import todoImg from './../../../assets/images/todolist.webp'
import Conteiner from "../../../components/Conteiner";
import WorksNavigation from "./WorksNavigation/WorksNavigation";
import {S} from './Works_Styles'


const worksItems = ['All', 'Landing page', 'React', 'SPA']

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'It seems too difficult, but so interesting!'
    },
    {
        title: 'To Do List',
        src: todoImg,
        text: "Almost every student talks about it!"
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Conteiner>
            <SectionTitle>My future works</SectionTitle>
            <WorksNavigation navigationItems={worksItems}/>
            <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                {workData.map((w)=> {
                    return <Work title={w.title} text={w.text} src={w.src}/>
                })}
            </FlexWrapper>
            </Conteiner>
        </S.Works>
    );
};

export default Works;

