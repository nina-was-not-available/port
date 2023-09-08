import React from 'react';
import Conteiner from "../../components/Conteiner";
import {FlexWrapper} from "../../components/FlexWrapper";
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
                    {width < breakpoint ? <MobileHeader/>
                                        :<DesktopMenu/>}
                </FlexWrapper>
            </Conteiner>
        </S.Header>
    );
};






export default Header;



