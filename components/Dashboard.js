import styled from 'styled-components'
import { Link } from '@mui/material'
import React from 'react'
import Pomodoro from '../public/pomodoro.jpg'
import { NavigationItemLink, LinkNavigationContainer } from '@/public/styles'
const Dashboard = () => {
  return (
    <LinkNavigationContainer ColumnNumber = {2} Gap = {2} >
        <NavigationItemLink href='/services/pomodoro'>Pomodoro Timer</NavigationItemLink>
        <NavigationItemLink href='/services/appointment'>Appointment Administrator</NavigationItemLink>
        <NavigationItemLink href='/services/budget'>Budget Tracker</NavigationItemLink>
        <NavigationItemLink href='/services/tasks'>To-do List</NavigationItemLink>
        <NavigationItemLink href='/services/articles'>Learn More...</NavigationItemLink>
    </LinkNavigationContainer>
  )
}

export default Dashboard


