import React from 'react';
import styled from "styled-components";
import Conteiner from "../../components/Conteiner";
import {FlexWrapper} from "../../components/FlexWrapper";
import theme from "../styles/Theme";
import MobileHeader from "./headermenu/mobileMenu/MobileHeader";
import {S} from './Header_Styles'
import {DesktopMenu} from "./headermenu/desktopmenu/DesktopMenu";
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
}, []);

    return (
        <S.Header>
            <Conteiner>
                <FlexWrapper justify={'center'} align={'center'}>
                    {width < breakpoint ? <MobileHeader navigationItems={items}/>
                                        :<DesktopMenu navigationItems={items}/>}
                </FlexWrapper>
            </Conteiner>
        </S.Header>
    );
};

const items = ['Home', 'About me', 'My potential skills', 'My future works',  'Contacts']




export default Header;



