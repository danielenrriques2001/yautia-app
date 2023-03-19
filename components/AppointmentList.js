import { Card, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import AppointmentItem from './AppointmentItem'



const AppointmentList = ({data}) => {
  return (
      <Grid
        container
        flexDirection={'Column'}
        gap={2}
      >
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
      </Grid>
   
    )
}

export default AppointmentList

