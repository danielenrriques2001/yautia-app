import Navigation from "./Navigation";
import styled from "styled-components";
import { Grid } from "@mui/material";



 const Header = () => {

  return (
  <Grid
    container 
    flexDirection={'column'}
    justifyContent = {'Center'}
    alignItems = {'center'}
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
  margin: 0 auto;
  font-size: 100px;
  color: #353739;
  cursor: pointer;
  display: block;
  font-weight: 800;
  letter-spacing: 15px;
  text-decoration: none;

  
 display: flex;
 justify-content: center;
`;

const HeadingBorder = styled.div`


`;





export default Header;