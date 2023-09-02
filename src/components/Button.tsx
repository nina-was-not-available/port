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
  &:hover{
    &::before{
      height: 40px;
      top: 0;
      border: ${theme.colors.text2} solid 2px;
      border-radius: 10px;
    }
  }
  &::before{
    content:'';
    display: inline-block;
    width: 100%;
    height: 20px;
    left: 0px;
    top: 20px;
    border-radius: 0px;
    background-color: ${theme.colors.accent};
    position: absolute;
    z-index: -1;
    }
  }
  
`