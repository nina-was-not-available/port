import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from './../../../assets/images/social-network.jpg'
import todoImg from './../../../assets/images/time-organization-concept-close-up.jpg'
import Conteiner from "../../../components/Conteiner";
import WorksNavigation, {NavigationStatusType} from "./WorksNavigation/WorksNavigation";
import {S} from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion";



const NavigationItems: Array<{title: string, status: NavigationStatusType}> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'Landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    },
]

const worksData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'It seems too difficult, but so interesting!',
        type: 'spa',
        id: 1
    },
    {
        title: 'To Do List',
        src: todoImg,
        text: "Almost every student talks about it!",
        type: 'react',
        id: 2
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filtredWorks = worksData
    if (currentFilterStatus === 'landing') {
        filtredWorks = worksData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filtredWorks = worksData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filtredWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus (value: NavigationStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Conteiner>
            <SectionTitle>My future works</SectionTitle>
            <WorksNavigation navigationItems={NavigationItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
            <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                <AnimatePresence>
                {filtredWorks.map((w)=> {
                    return (
                        <motion.div style={{maxWidth: '400px', width: '400px', flexGrow: 1}}
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} key={w.id} layout={true}>
                        <Work title={w.title} text={w.text} src={w.src} key={w.id}/>
                        </motion.div>
                    );
                })}
                </AnimatePresence>
            </FlexWrapper>
            </Conteiner>
        </S.Works>
    );
};

export default Works;

