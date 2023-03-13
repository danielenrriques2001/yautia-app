import Navigation from "./Navigation";
import styled from "styled-components";



 const Header = () => {
  return (
  <>
    <Heading>YAUTIA</Heading>
    <Navigation/>
  </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-family: 'Dancing Script', cursive;
  text-transform: uppercase;
`;





export default Header;