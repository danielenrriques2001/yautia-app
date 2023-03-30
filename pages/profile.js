import { HeadingPomodoroTitle, LinkNavigationContainer } from "@/public/styles";
import { Card, Typography } from "@mui/material";
import { useSession, signOut, getSession } from "next-auth/react"
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import useSWR from 'swr'


function Profile() {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data: climate, error, isLoading } = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${'berlin'}&appid=d5eeb7ba23ce10b29a169018a324bb7e`, fetcher)

  const { data: session, status } = useSession()

  console.log(climate.main)


  if(session) {
    return (
      <>
      <LinkNavigationContainer
        Display = {'flex'}
        Gap = {0}
      > 
        <HeadingPomodoroTitle
          Size = {3}
          
        >Welcome!
        </HeadingPomodoroTitle>
        <HeadingPomodoroTitle
          Size = {5}
          Weight = {500}
         
          
        >{session.user.name}</HeadingPomodoroTitle>

        </LinkNavigationContainer>
        <Card>
          <HeadingPomodoroTitle Size = {5} Weight = {800}  Shadow = {'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px'}>{climate?.name}</HeadingPomodoroTitle>
          <HeadingPomodoroTitle slogan Size={3}>{climate?.weather[0].description}</HeadingPomodoroTitle>
          <HeadingPomodoroTitle 
            MBottom={10} 
            MTop = {8}>
            It feels like: 
            <HeadingPomodoroTitle Size={5} Weight={500}> {climate.main?.feels_like}</HeadingPomodoroTitle>
            </HeadingPomodoroTitle>
          <HeadingPomodoroTitle>
            
            Humidity: 
            <HeadingPomodoroTitle Size={5} Weight={500}>{climate.main?.humidity}</HeadingPomodoroTitle>
            
          
          </HeadingPomodoroTitle>
          <HeadingPomodoroTitle>
            
            Temp: 
            <HeadingPomodoroTitle Size={5} Weight={500}> {climate.main?.temp}</HeadingPomodoroTitle>
           
            </HeadingPomodoroTitle>
        </Card>
        </>
     
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
