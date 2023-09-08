import React from 'react';
import styled from "styled-components";
import theme from "../layout/styles/Theme";



export const Button = styled.button`
    width: 150px;
    height: 40px;
  font-family: "Nimbus Sans";
  align-self: center;
  margin: 20px;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  z-index: 0;


  &::before{
    content:'';
    display: inline-block;
    width: 100%;
    height: 20px;
    left: 0;
    top: 20px;
    border-radius: 0px;
    background-color: ${theme.colors.accent};
    position: absolute;
    z-index: -1;
    transition: ${theme.animations.transition};
  }

  
  
  &:hover{
    &::before{
      height: 40px;
      top: 0;
      width: 100%;
      left: 0;
    }
  }
  
  
`