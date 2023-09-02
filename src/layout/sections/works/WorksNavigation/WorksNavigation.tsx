import React from 'react';
import {S} from './../Works_Styles'



const WorksNavigation = (props: {navigationItems: Array<string>}) => {
    return (
        <S.WorksNavigation>
            <ul>

                {props.navigationItems.map((item, index)=>{
                    return <S.ListItem key={index}>
                        <S.Link href={''}>{item}</S.Link>
                    </S.ListItem>
                })}

            </ul>
        </S.WorksNavigation>
    );
};






export default WorksNavigation;