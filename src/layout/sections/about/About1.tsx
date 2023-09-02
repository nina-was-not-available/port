import React from 'react';
import styled from "styled-components";
import violin from './../../../assets/images/skills1/violin.jpg'
import no from './../../../assets/images/skills1/no.jpg'
import code from './../../../assets/images/skills1/code.jpg'
import Part1 from "./part/Part1";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Conteiner from "../../../components/Conteiner";



const About1 = () => {
    return (

        <StyledAbout1>
            <SectionTitle>Let me introduce myself!</SectionTitle>
            <Conteiner>
                <Parts>
                    <Part1 img={violin} text1={'I WILL'}
                           text2={'I am a professional musician by education and I know a lot about The history of art, but...'}/>
                    <Part1 img={no} text1={'DO IT'}
                           text2={'But I decided to leave the era of Romantism in the past  and keep up with the times'}/>
                    <Part1 img={code} text1={'MY WAY'}
                           text2={'So now I am really keen on Web-development and looking forward to my first project!'}/>
                </Parts>
            </Conteiner>
        </StyledAbout1>
    );
};
const StyledAbout1 = styled.section`
 
`
const Parts = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 30px 30px 30px;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`

export default About1;