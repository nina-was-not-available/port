import React from 'react';
import {S} from './../Works_Styles';

export type NavigationStatusType = 'all' | 'landing' | 'react' | 'spa'

type NavigationPropsType = {
    navigationItems: Array<{title: string, status: NavigationStatusType}>,
    changeFilterStatus: (value: NavigationStatusType) => void,
    currentFilterStatus: string
}

const WorksNavigation = (props: NavigationPropsType) => {
    return (
        <S.WorksNavigation>
            <ul>

                {props.navigationItems.map((item, index)=>{
                    return <S.ListItem key={index}>
                        <S.Link active={props.currentFilterStatus===item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
                    </S.ListItem>
                })}

            </ul>
        </S.WorksNavigation>
    );
};






export default WorksNavigation;