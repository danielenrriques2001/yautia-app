import styled from 'styled-components'
import { Link } from '@mui/material'
import React from 'react'
import Pomodoro from '../public/pomodoro.jpg'

const NavigationItemLink = styled.a`

  width: 450px;
  padding: 45px;
  text-decoration: none;
  border-radius: 15px;
  font-family: sans-serif;
  font-weight: 100;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: all .2s ease-in-out;
  font-size: 15px;
  color: #414141; 

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    min-height: 10px;
  }

`;

const LinkNavigationContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

  }
      
`;

const Dashboard = () => {
  return (
    <LinkNavigationContainer>
        <NavigationItemLink href='/services/pomodoro'>Pomodoro Timer</NavigationItemLink>
        <NavigationItemLink href='/services/appointment'>Appointment Administrator</NavigationItemLink>
        <NavigationItemLink href='/services/budget'>Budget Tracker</NavigationItemLink>
        <NavigationItemLink href='/services/tasks'>To-do List</NavigationItemLink>
        <NavigationItemLink href='/services/articles'>Learn More...</NavigationItemLink>
    </LinkNavigationContainer>
  )
}

export default Dashboard


