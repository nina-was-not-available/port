import React from 'react';
import styled from "styled-components";
import theme from "../../layout/styles/Theme";


const Navigation = (props: {navigationItems: Array<string>}) => {
    return (
        <StyledNavigation>
            <ul>

                {props.navigationItems.map((item, index)=>{
                    return <li key={index}>
                        <a href={''}>{item}</a>
                    </li>
                })}

            </ul>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  
  a {
    color: ${theme.colors.text2};
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`

export default Navigation;