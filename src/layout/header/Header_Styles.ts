import theme from "../styles/Theme";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${theme.colors.text};
  padding: 10px 0px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
export const S = {
    Header,
}