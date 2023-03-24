import Dashboard from '@/components/Dashboard'
import { FloatingButton, HeadingPomodoroTitle, SettingButton } from '@/public/styles'
import { Box, Card, Container, Grid, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import styled from 'styled-components'
import useSWR from 'swr'
import BackgroundImg from '/public/workplaceBG.jpg'
import balance from '/public/balance.png'
import cooperation from '/public/cooperation.png'
import effectiveness from '/public/effectiveness.png'
import time from '/public/time.png'
import Image from 'next/image'
import { Configuration, OpenAIApi } from 'openai';
import {MdClose} from 'react-icons/md'

import collage from '/public/collage.jpg'
import collage1 from '/public/collage.jpg'
import collage2 from '/public/collage2.jpg'
import collage3 from '/public/collage3.jpg'
import collage4 from '/public/collage4.jpg'
import collage5 from '/public/collage5.jpg'
import collage6 from '/public/collage6.jpg'
import collage7 from '/public/collage7.jpg'
import ChatForm from '@/components/ChatForm'
import AnswerSection from '@/components/ChatAnswer'

const FloatingHover = styled.div`

width: 500px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: fixed;
bottom: 1%;
right: 1%;
padding: 20px;
border-radius: 15px;

`;
const Hero = styled.div`

  background-image: url(${props => props.image.src});
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

const HeadingHero = styled(HeadingPomodoroTitle)`

  text-transform: uppercase;
  font-family: sans-serif;
  color: white;
  font-size: 10rem;
  text-align: center;
  font-weight: 900;
  margin: 0;
  padding: 0;
  line-height: 1.3;
  position: relative;
  white-space: nowrap;  
  text-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  -webkit-text-stroke:  black 2px;
  transition: all 1s ease-in-out;
  

  &:after 
    --deco-height: 0.3125em;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(var(--deco-height) * -0.625);
    height: var(--deco-height);
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='%2300FDCF' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-size: auto 100%;
    background-repeat: round;
    background-position: 0em;
  
    &:before {
      content: 'Be';
      font-family: 'lobster two';
      text-transform : capitalize ;
      position: absolute;
      top: -40%;
      left: 45%;
      color: white;
      -webkit-text-stroke:  black 2px;


    }

`;

const IntroHeading = styled(Typography)`

    font-family: monospace;
    text-align: center;
    font-weight: 100;
    line-height: 2;
    

`;

const ColoredLine = styled.div`
    width: 100%;
    height: 4px;
    background-color: #EE769E;
    margin: 2rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
    border-radius: 45px;
`;


export default function Home() {

  const [heading, setHeading] = useState('Just Be!');
  const [openChat, setOpenChat] = useState(false)

  useEffect(() => {

 
    const interval = setInterval(() => {
      const headings = ['Productive', 'Unstoppable', 'You', 'Hardworking', 'Understanding', 'Energetic']
        
      const randomNumber = Math.floor((Math.random() * headings.length));

      const randomItem = headings[randomNumber]
      setHeading(randomItem);
    }, 2000);

    return () => clearInterval(interval);
  }, [heading]);

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});

  const openai = new OpenAIApi(configuration);
  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
        model: 'text-davinci-003',
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ['/'],
    };

    let completeOptions = {
        ...options,
        prompt: newQuestion,
    };
    
      const response = await openai.createCompletion(completeOptions);

        console.log(response.data.choices[0].text);

        if (response.data.choices) {
          setStoredValues([
          
              {
                  question: newQuestion,
                  answer: response.data.choices[0].text,
              },

              ...storedValues,
          ]);
          setNewQuestion('');
      }


  }

  const { data: session, status } = useSession()


  const [randomQuote, SetrandomQuote] = useState('Maria lava la ropa!')


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
    return (

      <>
        <Hero image={BackgroundImg}>
         <HeadingHero>{heading}</HeadingHero> 
        </Hero>
      

        <Container>
          <Grid
            container
            justifyContent={'center'}
            alignItems = {'center'}
          >  
            <ColoredLine/>
            <HeadingPomodoroTitle>Who are we?</HeadingPomodoroTitle>
            <IntroHeading variant='h5'>We are a company specialized in administering and managing your projects in the most effective way. Everything you need to get to the top in one place.</IntroHeading>

            <ColoredLine/>
            <HeadingPomodoroTitle>Why us?</HeadingPomodoroTitle>
            <IntroHeading variant='h5'>Our mission is to facilitate the processes around a desired project, we achieve this with the different tools at our disposal:</IntroHeading>

            <Grid
              container 
              justifyContent={'space-evenly'}
              alignItems = {'center'}
              marginTop={'3rem'}
              marginBottom={'3rem'}
              
            >

            <WhyItem image = {effectiveness} 
            title = {'Effectiveness'}
            />
            <WhyItem image = {balance} 
            title = {'Balance'}
            />

            <WhyItem image = {time} 
            title = {'Time'}
            />
            <WhyItem image = {cooperation} 
            title = {'Cooperation'}
            />

            </Grid>

            <HeadingPomodoroTitle>Our Promise</HeadingPomodoroTitle>
            <ColoredLine/>
           
            
            <Grid
               container 
               columns={{ xs: 4, sm: 8, md: 12 }}
               

            >

              <Grid
                container
                justifyContent={'center'}
                alignItems='center'
                gap={5}
                margin = {5}
              >
              <CollageItem item image = {collage}/>
              <HeadingPomodoroTitle>Time for yourself!</HeadingPomodoroTitle>

              </Grid>
  



            <Grid
              display={'grid'}
              gridTemplateColumns="repeat(3, 1fr)" gap={2}
            >
              <CollageItem item image = {collage7}/>
              
              <CollageItem item image = {collage2}/>
              
              <CollageItem item image = {collage3}/>
            </Grid>

            <HeadingPomodoroTitle>Make every second count!</HeadingPomodoroTitle>

            <Grid
              container 
              justifyContent={'center'}
              alignItems = {'center'}
              gap = {1}
            >
            <CollageItem item image = {collage4}/>
            <CollageItem item image = {collage5}/>
            <CollageItem item image = {collage6}/>
            <HeadingPomodoroTitle>Joy for your Job!</HeadingPomodoroTitle>
            </Grid>

            
            
            </Grid>


        <FloatingButton onClick={() => {setOpenChat(!openChat)}}>Chat with us!</FloatingButton>

       { 
       openChat &&
       <FloatingHover>
            <MdClose onClick={() => {setOpenChat(false)}}/>
            <AnswerSection storedValues = {storedValues}/>
            <ChatForm generateResponse={generateResponse}/>
        </FloatingHover>
        }


            
          </Grid>

        </Container>
      

      
      </>

    
    );
  }
}

export const WhyItem = ({image, title}) => {

  const ItemBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 25px;
    border-radius: 45%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transition: all .1s ease-in-out;

    &:hover {
      transform: translateY(-15px);
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    

  `;

  return (
  <>
      <ItemBox

      >
      <Image src={image.src} alt = {`This is ${image}`} width={'50'} height={'50'}></Image>
      <Typography variant='h6' >{title}</Typography>
      </ItemBox>
  
  </>
)
}

export const CollageItem = ({image, title, content}) => {

  const StyledImage = styled(Image)`

  width: fit-content;
  height: fit-content;
  transition: all .3s ease-out;
  border-radius: 45px;
    &:hover {
      cursor: pointer;
      transform: translateY(-15px);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }


  `;


  return (
  
      <StyledImage src={image.src} alt = {`This is ${image}`} width={300} height={300}></StyledImage>
)
}

