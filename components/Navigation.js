import React from 'react'
import { Link } from '@mui/material'
import styled from 'styled-components'
import { useSession } from 'next-auth/react'
import { BiUser, BiListOl, BiLogIn } from "react-icons/bi";


const Navigation = () => {
  const { data: session, status } = useSession()
  
  return (
    <NavContainer>
        <NavItem underline="none" href={'/'}>
          {session ? 'Dashboard ' : 'Home'} 
          <BiListOl/>
        </NavItem>
        {
          !session &&  <NavItem underline="none" href={'/login'}>
            Login
            <BiLogIn/>
            </NavItem>
        }

        {
          session &&  <NavItem underline="none" href={'/profile'}>profile<BiUser/></NavItem>
        }



        
    </NavContainer>
  )
}

const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1%;
`;

const NavItem = styled.a`

  background-color: #FFFFFF;
  border: 0;
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  display: flex;
  justify-content: center;
  align-items: center;


&:hover {
  background-color: rgb(249,250,251);
}

&:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.button-38:focus-visible {
  box-shadow: none;
}
`;
export default Navigation

