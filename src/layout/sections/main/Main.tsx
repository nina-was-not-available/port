import React from 'react';
import photo from './../../../assets/images/my-photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Main_Styles'
import Conteiner from "../../../components/Conteiner";
import Typewriter from 'typewriter-effect';



const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Conteiner>
                <FlexWrapper align={'start'} justify={'space-around'}  wrap={'wrap'} >
                    <S.TextWrapper>

                        <S.Hello>
                            <Typewriter
                            options={{
                                strings: ['Hello!'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </S.Hello>

                        <S.Name>I'm Nina</S.Name>
                        <S.Junior>A junior <h1>Frontend developer</h1></S.Junior>
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

