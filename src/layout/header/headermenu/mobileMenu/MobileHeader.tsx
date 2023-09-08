import React, {useState} from 'react';
import {Menu} from "../Menu/Menu";
import {S} from './../HeaderMenu_Styles'
export const MobileHeader: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen( !menuIsOpen)}
    return (
        <S.MobileHeader>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={menuIsOpen} onClick={() => {setmenuIsOpen(false)}}>
                <Menu/>
            </S.MobileMenuWrapper>
        </S.MobileHeader>

    );
};

const items = ['Home', 'About me', 'My potential skills', 'My future works',  'Contacts']




export default MobileHeader;



