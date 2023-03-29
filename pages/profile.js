import { HeadingPomodoroTitle } from "@/public/styles";
import { Card, Typography } from "@mui/material";
import { useSession, signOut, getSession } from "next-auth/react"
import { useState, useEffect } from "react";
import styled from 'styled-components';
import useSWR from 'swr'


function Profile() {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data: climate, error, isLoading } = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${'berlin'}&appid=d5eeb7ba23ce10b29a169018a324bb7e`, fetcher)

  console.log(climate)
  const { data: session, status } = useSession()


  if(session) {
    return (
      <div> 
        <HeadingPomodoroTitle>Welcome!</HeadingPomodoroTitle>
        <HeadingPomodoroTitle>{session.user.name}</HeadingPomodoroTitle>
        

        <Card>
          <Typography variant="h4">{climate?.name}</Typography>
          <Typography variant="h4">{climate?.weather[0].description}</Typography>
        </Card>

      </div>
    )
  } else {
    <div>You have to sign in!</div>
  }
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });


  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
      props: { session },
  };
}

export default Profile;
