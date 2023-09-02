import React from 'react';
import {S} from './../HeaderMenu_Styles'
import {Menu} from "../Menu/Menu";


export const DesktopMenu: React.FC<{navigationItems: Array<string>}> = (props: {navigationItems: Array<string>}) => {
    return (
        <S.DesktopMenu>
        <Menu navigationItems={props.navigationItems}/>
        </S.DesktopMenu>
    );
};



