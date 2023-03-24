import Navigation from "./Navigation";
import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";
import { zoomInDown} from 'react-animations';
const zoomInAnimation = keyframes`${zoomInDown}`;



 const Header = () => {

  return (
  <Grid
    container 
    justifyContent={'space-between'}
    alignItems='baseline'

  >

        <Heading href="/" >YAUTIA</Heading>
        <Navigation/>
  </Grid> 
  );
}

const Heading = styled.a`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  font-size: 100px;
  color: #353739;
  cursor: pointer;
  display: block;
  font-weight: 800;
  letter-spacing: 15px;
  text-decoration: none;
  animation: 1s ${zoomInAnimation};
  display: flex;
  justify-content: center;
`;

const HeadingBorder = styled.div`


`;





export default Header;