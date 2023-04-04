import Dashboard from '@/components/Dashboard'
import { ColoredLine, FloatingButton, FloatingContainer, HeadingPomodoroTitle, LinkNavigationContainer, SettingButton, SpinnerContainer } from '@/public/styles'
import { Box, Card, Container, Grid, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import styled, {keyframes} from 'styled-components'
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
import ChatForm from '@/components/Chat/ChatForm'
import AnswerSection from '@/components/Chat/ChatAnswer'
import Quotes from '@/components/Quotes'

import CollageItem from '@/components/CollageItem'
import WhyItem from '@/components/WhyItem'

const Hero = styled.div`
  background-image: url(${props => props.image.src});
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;
const HeadingHero = styled(HeadingPomodoroTitle)`
  text-transform: uppercase;
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1.3;
  position: relative;
  color: white;
  white-space: nowrap;  
  text-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 1s ease-in-out;
  color: white; 

  @media (max-width: 768px) {
    font-size: 3rem;
    animation: none;
    
  }
`;


export default function Home() {

  const [heading, setHeading] = useState('Just Be!');
  const [openChat, setOpenChat] = useState(false)
  const [chatSpinner, setChatSpinner] = useState(false)


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

          setChatSpinner(true)

          setTimeout(() => {

            setStoredValues([
          
              {
                  question: newQuestion,
                  answer: response.data.choices[0].text,
              }

              // ...storedValues,
          ]);
          setNewQuestion('');
          setChatSpinner(false)
            
          }, 3000);


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
    
      if (isLoading) return <SpinnerContainer><ClimbingBoxLoader color = '#76EEC6' Size={100}/></SpinnerContainer> 
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
             
        <HeadingPomodoroTitle
          Size = {2}
          Weight = {600}
          Color = {'#2B3467'}
        >Ready for a Productive Day?!
        </HeadingPomodoroTitle>
        <ColoredLine Color = {'#2B3467'}/>

        <Container>
                <Quotes 
                content = {randomQuote?.text}
                author = {randomQuote?.author}
                />
        </Container>
        <Dashboard/>

      <ColoredLine/>
      
      </Grid>
     
    </>
  )
  } else {
    return (

      <>
        <Hero image={BackgroundImg}>
         <HeadingHero 
         
         LetterSpace = {1}
         >{heading}</HeadingHero> 
        </Hero>
      

        <Container>
          <Grid
            container
            justifyContent={'center'}
            alignItems = {'center'}
          >  
           
            <HeadingPomodoroTitle 
              Size ={4}
              Weight={800} 
              MTop = {1}
              Color = {'#413543'}
              >Who are we?
            </HeadingPomodoroTitle>

            <HeadingPomodoroTitle 
              Size={1.5}
              Color = {'#413543'}
              MBottom = {2}
              >We are a company specialized in administering and managing your projects in the most effective way. Everything you need to get to the top in one place.
            </HeadingPomodoroTitle>

            <ColoredLine Color = {'#EB455F'}/>
            <HeadingPomodoroTitle 
              Size={4} 
              Weight={800} 
              Color = {'#413543'}
              >Why us?</HeadingPomodoroTitle>
            <HeadingPomodoroTitle 
              Size={1.5}
              Weight={200}
              Color = {'#413543'}
              
              >Our mission is to facilitate the processes around a desired project, we achieve this with the different tools at our disposal:</HeadingPomodoroTitle>

            <LinkNavigationContainer
              ColumnNumber = {4}
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

             
            </LinkNavigationContainer>

            <ColoredLine 
              Color = {'#EB455F'}
              MBottom = {2}
              MTop = {5}
            />

            <HeadingPomodoroTitle 
              Size={4}
              Weight={800}
              Color = {'#413543'}
              >Our Promise
            </HeadingPomodoroTitle>

           
          
           
            
            <Grid
               container 
               columns={{ xs: 4, sm: 8, md: 12 }}
            >

              <LinkNavigationContainer
                Display = {'flex'}


              >
              <CollageItem item image = {collage}/>
              <HeadingPomodoroTitle 
                  Size ={4}
                  Color = {'#413543'}
                  BColor = {'#6F2473'}
                  BWidth = {5}
                >Time for yourself!</HeadingPomodoroTitle>

              </LinkNavigationContainer>
  


            <LinkNavigationContainer
                ColumnNumber = {4}
                Gap = {1}
            >
              <CollageItem item image = {collage7}/>
              
              <CollageItem item image = {collage2}/>
              
              <CollageItem item image = {collage3}/>
            </LinkNavigationContainer>

            <HeadingPomodoroTitle 
              Size ={5}
              Color = {'#413543'}
              BColor = {'#6F2473'}
              BWidth = {15}
              MBottom = {3}
              MTop = {3}
              LetterSpace = {1}
              >Make every second count!
            </HeadingPomodoroTitle>

            <Grid
              container 
              justifyContent={'center'}
              alignItems = {'center'}
              gap = {1}
            >
            <CollageItem item image = {collage4}/>
            <CollageItem item image = {collage5}/>
            <CollageItem item image = {collage6}/>
            <HeadingPomodoroTitle 
              Size ={3}
              Color = {'#4c4c47'}
              BColor = {'#6F2473'}
              BWidth = {2}
              >Joy for your Job!
            </HeadingPomodoroTitle>

            <ColoredLine Color = {'#EB455F'}/>
            </Grid>

            
            
            </Grid>


        <FloatingButton onClick={() => {setOpenChat(!openChat)}}>Chat with us!</FloatingButton>

       { 
       openChat &&
       <FloatingContainer>
            <MdClose onClick={() => {setOpenChat(false)}}/>
            <AnswerSection storedValues = {storedValues} chatSpinner = {chatSpinner}/>
            <ChatForm generateResponse={generateResponse}/>
        </FloatingContainer>
        }


            
          </Grid>

        </Container>
      

      
      </>

    
    );
  }
}


