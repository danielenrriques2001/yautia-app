import Navigation from "./Navigation";
import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";
import { zoomInDown} from 'react-animations';

const zoomInAnimation = keyframes`${zoomInDown}`;

const Heading = styled.a`
  text-align: center;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-size: 100px;
  color: #EB455F;
  cursor: pointer;
  display: block;
  font-weight: 1000;
  letter-spacing: 1.3rem;
  text-decoration: none;
  animation: 1s ${zoomInAnimation};
  display: flex;
  justify-content: center;

  -webkit-text-stroke: 3px 'white';

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

 const Header = () => {

  return (
    <Grid
      container 
      justifyContent={'space-between'}
      alignItems='baseline'
    >

        <Heading href="/">yautía</Heading>
        <Navigation/>
  </Grid> 
  );
}







export default Header;