import styled from 'styled-components'
import { Link } from '@mui/material'
import React from 'react'
import Pomodoro from '../public/pomodoro.jpg'

const LinkItem = styled.a`
  display: block;
  width: 450px;
  padding: 45px;
  color: white;
  text-decoration: none;
  color: black;
  background-color: antiquewhite;
  border-radius: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 35px;
  font-weight: 100;

`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Dashboard = () => {
  return (
    <LinkContainer>
        <LinkItem href='/services/pomodoro'>Pomodoro Timer</LinkItem>
        <LinkItem href='/services/appointment'>Appointment Administrator</LinkItem>
        <LinkItem href='/services/budget'>Budget Tracker</LinkItem>
        <LinkItem href='/services/tasks'>To-do List</LinkItem>
        <LinkItem href='/'>Learn More...</LinkItem>
    </LinkContainer>
  )
}

export default Dashboard


