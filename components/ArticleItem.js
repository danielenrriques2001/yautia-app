import { HeadingPomodoroTitle, PauseButton, StyledButton } from '@/public/styles'
import { Box, Card, Link, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 100%;
`;

const ArticleCard = styled(Card)`
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const StyledLink = styled(Link)`

  text-decoration-line: none;
  color: #2B3467;
  font-size: 1.5rem;
  font-weight: 300;
`;

const ArticleItem = ({title, image, author, content, publishedAt, url, source}) => {
  return (

    <ArticleCard>
           <HeadingPomodoroTitle
            Size = {1.5}
            Weight = {300}
           >{title}</HeadingPomodoroTitle>
           <StyledImage
            alt = {title}
            src = {image}
           />
           <HeadingPomodoroTitle 
            slogan
            Size = {1}
            Weight = {300}
            >{author}</HeadingPomodoroTitle>
           <HeadingPomodoroTitle
            Size = {1.1}
           >{content}</HeadingPomodoroTitle>
           <PauseButton
             FontWeight= {300}
             MBottom = {5}
             
           >{publishedAt}</PauseButton>
           <PauseButton             
           >
              <StyledLink href={url}>Read More</StyledLink>
           </PauseButton>
          

        

    </ArticleCard>
 
  )
}

export default ArticleItem