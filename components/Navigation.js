import React from 'react'
import { Link } from '@mui/material'
import styled from 'styled-components'
import { signOut, useSession } from 'next-auth/react'
import { BiUser, BiListOl, BiLogIn, BiLogOut} from "react-icons/bi";

const UserIcon = styled(BiUser)`

  width: 65px;
  height: 25px;
`;

const LogOutIcon = styled(BiLogOut)`

  
  width: 65px;
  height: 25px;

`;
const Navigation = () => {
  const { data: session, status } = useSession()
  
  return (
    <NavContainer>
        {
          !session &&  <NavItem underline="none" href={'/login'}>
            Login
            <BiLogIn/>
            </NavItem>
        }

        {
          session &&  <NavItem underline="none" href={'/profile'}><UserIcon/></NavItem>
        }
        {
          session &&  <NavItem underline="none" onClick={signOut}><LogOutIcon/></NavItem>
        }



        
    </NavContainer>
  )
}

const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1%;

  

    @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

const NavItem = styled.a`

  background-color: white;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-weight: 600;
  padding: .75rem 1rem;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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

@media (max-width: 768px) {
   width: 100%;
   height: 3rem;
}
`;
export default Navigation

