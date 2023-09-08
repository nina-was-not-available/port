import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../Icon";
import theme from "../../layout/styles/Theme";
import {animateScroll as scroll} from "react-scroll";

const GoTopBtn = () => {

    const [showBtn, setshowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, []);

    return (

        <>
            {showBtn && (
            <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                <Icon iconId={'strelka'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>
            </StyledGoTopBtn>
                )}
        </>
    );
};


const StyledGoTopBtn = styled.button`
    background-color: ${theme.colors.text2};
padding-left: 8px;
  padding-top: 8px;
  padding-right: 4px;
  position: fixed;
  opacity: 0.7;
  bottom: 20px;
  right: 20px;
  &:hover {
    opacity: 1;
  }
`

export default GoTopBtn;