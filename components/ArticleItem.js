import { HeadingPomodoroTitle, StyledButton } from '@/public/styles'
import { Box, Card, Link, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 100%;
`;

const ArticleCard = styled(Card)`
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const StyledLink = styled(Link)`

  text-decoration-line: none;

`;

const ArticleItem = ({title, image, author, content, publishedAt, url, source}) => {
  return (

    <ArticleCard>
           <Typography>{title}</Typography>
           <StyledImage
            alt = {title}
            src = {image}
           />
           <Typography variant="h6" component="h2">{author}</Typography>
           <Typography>{content}</Typography>
           <Typography variant='h6'>{publishedAt}</Typography>
           <StyledButton>
              <StyledLink href={url}>Read More</StyledLink>
           </StyledButton>
          

        

    </ArticleCard>
 
  )
}

export default ArticleItem