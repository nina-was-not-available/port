import React from 'react';

export const Menu: React.FC<{navigationItems: Array<string>}> = (props: {navigationItems: Array<string>}) => {
    return (
        <ul>

            {props.navigationItems.map((item, index)=>{
                return <li key={index}>
                    <a href={''}>{item}</a>
                </li>
            })}

        </ul>
    );
};

