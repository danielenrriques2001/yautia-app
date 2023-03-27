import { Card, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import AppointmentItem from './AppointmentItem'


const AppointmentsContainer = styled.div`

--auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;


`;

const AppointmentList = ({data}) => {
  return (
      <AppointmentsContainer> 
      {
          data.map(e => {
            return(
            <AppointmentItem 
              key = {e._id}
              id = {e._id}
              description = {e.description}
              title = {e.title}
              date = {e.date}
            />
            )
          })
        }



      </AppointmentsContainer>
    )
}

export default AppointmentList

