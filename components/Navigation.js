import React from 'react'
import { Link } from '@mui/material'
import styled from 'styled-components'
import { useSession } from 'next-auth/react'
import { BiUser, BiListOl } from "react-icons/bi";


const Navigation = () => {
  const { data: session, status } = useSession()
  
  return (
    <NavContainer>
        <NavItem underline="none" href={'/'}>
          {session ? 'Dashboard ' : 'Home'} 
          <BiListOl/>
        </NavItem>
        {
          !session &&  <NavItem underline="none" href={'/login'}>Login </NavItem>
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

  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem 1.8rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


&:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

&:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
`;
export default Navigation

