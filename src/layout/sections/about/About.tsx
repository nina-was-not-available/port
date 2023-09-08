import React from 'react';
import violin from './../../../assets/images/skills1/violin.jpg'
import no from './../../../assets/images/skills1/no.jpg'
import code from './../../../assets/images/skills1/code.jpg'
import Part from "./part/Part";
import {SectionTitle} from "../../../components/SectionTitle";
import Conteiner from "../../../components/Conteiner";
import {S} from './About_Styles'



const About: React.FC = () => {
    return (

        <S.About id={'about'}>
            <SectionTitle>Let me introduce myself!</SectionTitle>
            <Conteiner>
                <S.Parts>
                    <Part img={violin} text1={'I WILL'}
                           text2={'I am a professional musician by education and I know a lot about The history of art, but...'}/>
                    <Part img={no} text1={'DO IT'}
                           text2={'But I decided to leave the era of Romantism in the past  and keep up with the times'}/>
                    <Part img={code} text1={'MY WAY'}
                           text2={'So now I am really keen on Web-development and looking forward to my first project!'}/>
                </S.Parts>
            </Conteiner>
        </S.About>
    );
};

export default About;