import React from 'react';
import styled from "styled-components";
import Navigation from "../../components/navigation/Navigation";
import Conteiner from "../../components/Conteiner";
import {FlexWrapper} from "../../components/FlexWrapper";
import theme from "../styles/Theme";
import MobileHeader from "./mobileMenu/MobileHeader";
export const Header = () => {
    return (
        <StyledHeader>
            <Conteiner>
                <FlexWrapper justify={'center'} align={'center'}>
            <Navigation navigationItems={items}/>
                    <MobileHeader navigationItems={items}/>
                </FlexWrapper>
            </Conteiner>
        </StyledHeader>
    );
};

const items = ['Home', 'About me', 'My potential skills', 'My future works',  'Contacts']


const StyledHeader = styled.header`
  background-color: ${theme.colors.text};
  padding: 20px 0px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`

export default Header;



