import React, {useState} from 'react';
import {S} from './../HeaderMenu_Styles'
import {NavigationStatusType} from "../../../sections/works/WorksNavigation/WorksNavigation";


const items = [
    {title: 'Home',
    href: 'home'},
    {title: 'About me',
        href: 'about'},
    {title: 'My potential skills',
        href: 'skills'},
    {title: 'My future works',
        href: 'works'},
    {title: 'Contacts',
        href: 'contacts'}
]


export const Menu: React.FC = () => {
    return (

        <ul>
            {items.map((item, index)=>{
                return <li key={index}>
                    <S.NavLink to={item.href} smooth={true} offset={-60} activeClass={'active'}>{item.title}</S.NavLink>
                </li>
            })}

        </ul>
    );
};

// const items = ['Home', 'About me', 'My potential skills', 'My future works',  'Contacts']