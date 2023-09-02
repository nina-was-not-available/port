import React from 'react';
import {Menu} from "../Menu/Menu";
import {S} from './../HeaderMenu_Styles'
export const MobileHeader: React.FC<{navigationItems: Array<string>}> = (props: {navigationItems: Array<string>}) => {
    return (

        <S.MobileHeader>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={false}>
                <Menu navigationItems={props.navigationItems}/>
            </S.MobileMenuWrapper>
        </S.MobileHeader>

    );
};

const items = ['Home', 'About me', 'My potential skills', 'My future works',  'Contacts']




export default MobileHeader;



