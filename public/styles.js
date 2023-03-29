import styled, { keyframes } from 'styled-components';
import CountdownAnimation from '@/components/Pomodoro/CountDownAnimation';
import { bounce } from 'react-animations'

import { Typography, Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, {useContext, useEffect} from 'react'

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

  background: ${(props) => props.BGColor || '#FFFFFF'};
  border: 0 solid #E2E8F0;
  border-style: ${(props) => props.BStyle || 'solid'};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: ${(props) => props.TextColor || '#1A202C'};
  font-family: 'Yanone Kaffeesatz' , sans-serif;
  font-size: ${(props) => props.FontSize || 1}rem;
  font-weight: ${(props) => props.FontWeight || 800};
  height: 56px;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: ${(props) => props.Padding || 24}px;
  text-decoration: none;
  min-width: 10px;
  width: ${(props) => props.Width || 100}%;
  border-radius: ${(props) => props.BRadius || 8}px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: ${(props) => props.MTop || 0}px;
  margin-bottom: ${(props) => props.MBottom || 0}px;
  
  &:hover,
&:focus {
  opacity: .75;
}

@media (max-width: 768px) {
  width: 100%;
}
  
  
  



`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  animation: 1s ${fadeInAnimation};
  padding: 1rem;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 45px;
  
  border:  1px gray ;

  margin-bottom: 35px;
  
`;

export const HeadingNavButton = styled(Button)`

  font-family:  'Yanone Kaffeesatz', sans-serif;
  font-size: 25px;
  letter-spacing: 15px;
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
  background: ${props => props.selected ? "#BAD7E9" : "white"};
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

  margin: 0;
  padding: 0;
  font-family: ${props => props.slogan ? 'Yanone Kaffeesatz, sans-serif': 'Nunito, sans-serif'};
  /* font-size: ${props => props.slogan ? '1rem' : '5rem'}; */
  font-weight: ${(props) => props.Weight || 100};
  font-size: ${(props) => props.Size || 1}rem;
  color: ${(props) => props.Color || '#2D2727'};
  letter-spacing: 1px;
  margin-top: ${(props) => props.MTop || 0}rem;
  margin-bottom: ${(props) => props.MBottom || 0}rem;
  border-bottom-color: ${(props) => props.BColor || 'transparent'};
  border-bottom-width: ${(props) => props.BWidth || 1}px;
  letter-spacing: ${(props) => props.LetterSpace || 0}rem;
  border-bottom-style: solid;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

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
  border:  10px solid #2B3467;
  width: 200px;
  height: 200px;
  font-family: ;
  border-radius: 50%;
  text-align: center;
  transition: all ease-in .3s;
  cursor: pointer;
  margin-bottom: 45px;
  font-weight: 1000;
  font-size: 100px;
  outline: none;
  font-family: 'Nunito', sans-serif;


  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }

    &:hover, 
    &:active, 
    &:focus {
        border: #EB455F 1px solid;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
        color: #EB455F;

    }

`;

export const StyledLabel = styled.label`

    font-family:  'Yanone Kaffeesatz', sans-serif;;
    font-size: 2rem;
    font-weight: 300;

`;

export const SettingContainer = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: center;



    @media (max-width: 768px) {
    flex-direction: column;
  }


`;
 
export const FloatingButton = styled.button`

  position: fixed;
  bottom: 10%;
  right: 90%;
  width: 20px;
  height: 100px;
  background-color: #fefdfb;
  z-index: 1;
  border-radius: 50%;

  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  font-size: 20px;
  font-weight: 800;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  font-family:  'Yanone Kaffeesatz', sans-serif;


&:hover {
  background: #F6F9FE;
  color: #174ea6;
}

&:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

&:focus {
  outline: none;
  border: 2px solid #4285f4;
}

&:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

&:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

&:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

&:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

&:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}


@media (max-width: 768px) {
 
  position: fixed;
  top: 90%;
  margin: 0;
  right: 40%;




}

`;
export const SpinnerContainer = styled.div`

width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
text-align: center;

`;

export const ModalContent = styled.div`

  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 45px 15px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -15%;
  left: 25%;
  
  padding: ${props => props.task ? '45px': '20px'};


`;

export const NavigationItemLink = styled.a`
  width: ${(props) => props.Width || 450}px;
  height: ${(props) => props.Height || 'auto'};
  padding: 45px;
  text-decoration: none;
  border-radius: 15px;
  font-family:  'Yanone Kaffeesatz', sans-serif;
  font-weight: 300;
  min-height: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all .2s ease-in-out;
  color: ${(props) => props.TextColor || '#E5E5E5'} ; 
  text-shadow: text-shadow: 1px 1px 2px pink; 
  font-size: ${(props) => props.FontSize || 30}px;
  display: flex;  
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-color: ${(props) => props.BColor || 'transparent'};
  margin-top: 5px;
  background-color: ${(props) => props.BGColor || 'white'};
  

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    min-height: 10px;
    width: 100%;
  }

`;

export const LinkNavigationContainer = styled.div`

  display: ${(props) => props.Display || 'grid'};
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.FlexDirection || 'row'} ;
  
  grid-template-columns:  repeat(${(props) => props.ColumnNumber || 2}, 1fr);
  gap: ${(props) => props.Gap || 5}rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
      
`;

export const EditButton = styled.button`


  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;




&:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
    padding: 10px 30px;
}

`;

export const DeleteButton = styled.button`

  border: 1px solid rgb(209,213,219);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: ${props => props.delete ? '#BC3F67': '#FFFFFF'};
  color: ${props => props.delete ? 'white': 'black'};

&:hover {
  background-color: rgb(249,250,251);
  color: black;
}

&:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

&:focus-visible {
  box-shadow: none;
}

`;

export const ColoredLine = styled.div`
    width: 100%;
    height: ${(props) => props.Height || .2}rem;
    margin: 2rem;
    border-radius: 45px;
    margin-top: ${(props) => props.MTop || 1}rem;
    margin-bottom: ${(props) => props.MBottom || 1}rem;
    background-color: ${(props) => props.Color || 'gray'};
`;


export const FloatingContainer = styled.div`
width: 500px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
position: fixed;
bottom: 1%;
right: 1%;
padding: 20px;
border-radius: 15px;
background-color: #F8F8F8;
`;

