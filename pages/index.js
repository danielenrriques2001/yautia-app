import Dashboard from '@/components/Dashboard'
import { Card, Container, Grid, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default function Home() {


  const { data: session, status } = useSession()


  const [randomQuote, SetrandomQuote] = useState('Maria lava la ropa!')

  console.log(randomQuote)



  function generateRandomQuotes(array) {
        const randomNumber = Math.floor((Math.random() * array.length));
     
        const randomItem = array[randomNumber]
     
         SetrandomQuote(randomItem)

     
      }


      const [data, setData] = useState(null)
      const [isLoading, setLoading] = useState(false)
    
      useEffect(() => {
        setLoading(true)
        fetch('https://type.fit/api/quotes')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
            generateRandomQuotes(data)
          })
      }, [])
    
      if (isLoading) return <p>Loading...</p>
      if (!data) return <p>No profile data</p>

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
              <Card>
                <Typography variant='h5'>{randomQuote?.text}</Typography>
                <Typography variant='h6'>{randomQuote?.author}</Typography>

              </Card>
        </Container>
        <Dashboard/>

      </Grid>
     
    </>
  )
  } else {
    return <p>Loading.......</p>
  }
}
