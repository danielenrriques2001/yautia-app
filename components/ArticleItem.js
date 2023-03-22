import { HeadingPomodoroTitle } from '@/public/styles'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`



`;

const ArticleItem = ({title, image, author, content, publishedAt, url, source}) => {
  return (

    <Card>
           <h1>{title}</h1>
           <StyledImage
            alt = {title}
            src = {image}
           />
           <p>{author}</p>
           <p>{content}</p>
           <p>{publishedAt}</p>
           <a href={url}>Read More</a>

        

    </Card>
 
  )
}

export default ArticleItem