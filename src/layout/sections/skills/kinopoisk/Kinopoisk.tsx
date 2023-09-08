import React from 'react';
import first from './../../../../assets/images/skills1/image_part_001.png';
import second from './../../../../assets/images/skills1/image_part_002.png';
import third from './../../../../assets/images/skills1/image_part_003.png';
import forth from './../../../../assets/images/skills1/image_part_004.png';
import fifth from './../../../../assets/images/skills1/image_part_005.png';
import sixth from './../../../../assets/images/skills1/image_part_006.png';
import reactpng from './../../../../assets/images/skills1/reactpng.png';
import csspng from './../../../../assets/images/skills1/csspng.png';
import htmlpng from './../../../../assets/images/skills1/htmlpng.png';
import scpng from './../../../../assets/images/skills1/scpng.png';
import enpng from './../../../../assets/images/skills1/enpng.png';
import jspng from './../../../../assets/images/skills1/noun-js-4882515.png';
import {S} from './../Skill_Styles'



const Kinopoisk: React.FC = () => {
    return (
        <S.Kinopoisk>
            <S.Slide pic={first}><S.Img src={reactpng}/><S.SomeText>Today I can only "Create React App", but I believe it won't for long</S.SomeText></S.Slide>
            <S.Slide pic={second}><S.Img src={scpng}/><S.SomeText>I've already got to know "Styled Components", and it's really convenient!</S.SomeText></S.Slide>
            <S.Slide pic={third}><S.Img src={htmlpng}/><S.SomeText>I've studied HTML in college, but it was a piece of a subject "Musical Informatics" </S.SomeText></S.Slide>
            <S.Slide pic={forth}><S.Img src={csspng}/><S.SomeText>In the "Musical Informatics" we've been writing some articles about modern musicians</S.SomeText></S.Slide>
            <S.Slide pic={fifth}><S.Img src={enpng}/><S.SomeText>I'm learning English all my life and now I'm in B2 level</S.SomeText></S.Slide>
            <S.Slide pic={sixth}><S.Img src={jspng}/><S.SomeText>My favourite book is "Java Script for children"</S.SomeText></S.Slide>
        </S.Kinopoisk>
    );
};





export default Kinopoisk