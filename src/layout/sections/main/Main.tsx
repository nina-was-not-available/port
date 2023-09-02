import React from 'react';
import photo from './../../../assets/images/my-photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Main_Styles'
import Conteiner from "../../../components/Conteiner";


const Main: React.FC = () => {
    return (

        <S.Main>
            <Conteiner>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.TextWrapper>
                        <S.Hello>Hello!</S.Hello>
                        <S.Name>I'm Nina</S.Name>
                        <S.Junior>A junior <span>Frontend developer</span></S.Junior>
                    </S.TextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=''/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Conteiner>

        </S.Main>
    );
};

export default Main;

