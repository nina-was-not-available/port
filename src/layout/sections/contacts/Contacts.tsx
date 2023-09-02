import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import Conteiner from "../../../components/Conteiner";
import theme from "../../styles/Theme";

const Contacts = () => {
    return (
        <StyledContacts>
            <Conteiner>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <StyledField placeholder={'Enter your name'}/>
                <StyledField placeholder={'Enter your email'}/>
                <StyledField as={'textarea'} placeholder={'Enter your message'}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
            </Conteiner>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 160px;
  }
`

const StyledField = styled.input`
  width: 100%;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.text};
  padding: 7px 15px;
  font-family: "Nimbus Sans";
  font-weight: 500;
  font-size: 12px;
  color: ${theme.colors.text};
  &:focus-visible {
  outline: 2px solid ${theme.colors.accent};
}
`
export default Contacts;