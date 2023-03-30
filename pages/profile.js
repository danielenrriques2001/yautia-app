import { HeadingPomodoroTitle, LinkNavigationContainer } from "@/public/styles";
import { Card, Typography } from "@mui/material";
import { useSession, signOut, getSession } from "next-auth/react"
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import useSWR from 'swr'


function Profile() {


  const { data: session, status } = useSession()



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
