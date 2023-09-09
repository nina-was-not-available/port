import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import Conteiner from "../../../components/Conteiner";
import {S} from './Contscts_Styles'
import {AttentionSeeker} from "react-awesome-reveal";

const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Conteiner>
            <SectionTitle>Contacts</SectionTitle>
            <S.Form>
                <S.Field placeholder={'Enter your name'}/>
                <S.Field placeholder={'Enter your email'}/>
                <S.Field as={'textarea'} placeholder={'Enter your message'}/>
                <AttentionSeeker effect={'pulse'} triggerOnce={false}>
                <Button type={"submit"}>Send message</Button>
                </AttentionSeeker>
            </S.Form>
            </Conteiner>
        </S.Contacts>
    );
};



export default Contacts;