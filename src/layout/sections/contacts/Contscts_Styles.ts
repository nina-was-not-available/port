import styled from "styled-components";
import theme from "../../styles/Theme";


const Contacts = styled.section`
`
const Form = styled.form`
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

const Field = styled.input`
  width: 100%;
  position: relative;
  background-color: ${theme.colors.text2};
  border: none;
  outline: none;
  padding: 7px 15px;
  font-family: FreeMono;
  font-weight: 500;
  font-size: 12px;
  color: ${theme.colors.text};
  &:focus-visible {
  border: 2px solid ${theme.colors.text};
}
`


export const S = {
    Contacts,
    Form,
    Field
}