import styled, { keyframes } from 'styled-components';
import CountdownAnimation from '@/components/Pomodoro/CountDownAnimation';
import { bounce } from 'react-animations'

import { Typography, Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, {useContext, useEffect} from 'react'
import {Roboto} from 'next/font/google'


const fadeInAnimation = keyframes`${bounce}`;

export const ReponsiveGrid = styled(Grid)`

  display:  flex;
  justify-content: center;
  align-items: center;
  

  @media (max-width: 762px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

`;

export const SettingButton = styled.button`
  
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


  

&:hover {
  background-color: #fff;
}

&:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {

    min-width: 120px;
    padding: 0 25px;
}

`;

export const StyledButton = styled.button`

  align-items: center;
  background-color: #FFFFFF;
  background: ${props => props.selected ? "#BAF6C4" : "FFFFFF"};
  color: #191919;
  /* color: rgba(0, 0, 0, 0.85); */
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
 
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  @media (max-width: 768px) {
      display: block;
      width: 100%;
      height: 45px;
      margin-bottom: 15px;
  }


&:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

&:hover {
  transform: translateY(-1px);
}

&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

`;

export const PauseButton = styled.button`

  background: #FFFFFF;
  border: 0 solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1A202C;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  border: 1px solid black;


`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  animation: 1s ${fadeInAnimation};
  padding: 45px;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 45px;
  
  border:  1px gray ;
  padding-bottom: 0;
  margin-bottom: 35px;

`;

export const HeadingNavButton = styled(Button)`

  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background: ${props => props.selected ? "#fbeee0" : "white"};
&:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
    padding: 0.25em 0.75em;
}
`;

export const HeadingPomodoroTitle = styled.p`

  font-family: 'lobster two';
  margin: 0;
  padding: 0;
  font-family: ${props => props.slogan ? 'Segoe UI': 'lobster two'};
  font-size: ${props => props.slogan ? '1.1rem' : '5rem'};
  font-weight: ${props => props.slogan ? '100' : '700'};
  margin-bottom: ${props => props.slogan ? '10px' : '0px'};




`;



export const StyledSettingButton = styled(Button)`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  

&:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

&:hover:after {
  transform: translate(0, 0);
}

&:active {
  background-color: #ffdeda;
  outline: 0;
}

&:hover {
  outline: 0;
  color: white;
}

@media (min-width: 768px) {
    padding: 0 40px;

}
`;

export const StyledInput = styled.input`

  margin: 0;
  border:  10px solid #BAF6C4;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  transition: all ease-in .3s;
  cursor: pointer;

  margin-bottom: 45px;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 800;
  font-size: 120px;

  outline: none;


  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }

    &:hover, 
    &:active, 
    &:focus {
        border: #e06666 1px solid;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
        color: #e06666;

    }

`;

export const StyledLabel = styled.label`

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 500;

`;

export const SettingContainer = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: center;



    @media (max-width: 768px) {
    flex-direction: column;
  }


`;
 

export const FloatingButton = styled(SettingButton)`

  position: fixed;
  bottom: 10%;
  left: 90%;
  width: 20px;
  height: 100px;
  background-color: #fefdfb;
  z-index: 1;
  border-radius: 50%;

`;