import Dashboard from '@/components/Dashboard'
import { Card, Container, Grid, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'

export default function Home() {

  const { data: session, status } = useSession()

  if(session) {
    return (
    <>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      > 
             
        <Typography variant='h5'>Ready for a Productive Day!</Typography>

        <Container>
              <Card>{'Insert the Quote her!'}</Card>
        </Container>
        <Dashboard/>


      </Grid>
     
    </>
  )
  } else {
    return (<h1>Youre not </h1>)
  }
}
