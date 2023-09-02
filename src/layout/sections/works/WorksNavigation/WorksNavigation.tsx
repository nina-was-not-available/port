import React from 'react';
import styled, {keyframes} from "styled-components";
import theme from "../../../styles/Theme";



const WorksNavigation = (props: {navigationItems: Array<string>}) => {
    return (
        <StyledWorksNavigation>
            <ul>

                {props.navigationItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href={''}>{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledWorksNavigation>
    );
};

const StyledWorksNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    max-width: 350px;
 margin: 0 auto 10px;
  }
  
  a {
    color: ${theme.colors.text2};
  }
`
const ListItem = styled.li`
    position: relative;
`
const Link = styled.a`
  &:hover {
    &::before {
      content: '';
      display: inline-block;
      height: 2px;
      position: absolute;
      background-color: ${theme.colors.accent};
      bottom: 10px;
      left: -10px;
      right: -10px;
    }
  }
`





export default WorksNavigation;