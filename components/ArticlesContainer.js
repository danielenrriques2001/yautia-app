import { Alert, AlertTitle, Button, Card, Grid, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'
import useSWR from 'swr'
import styled from 'styled-components'
import { Container } from '@mui/system'
import { SpinnerContainer } from '@/public/styles'
import { RingLoader } from 'react-spinners'

const StyledGrid = styled(Grid)`

--auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;


`;

const ArticlesContainer = ({setKeyWord, keyword}) => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const URL = `https://newsapi.org/v2/everything?q=${keyword}}&language=en&apiKey=${process.env.NEXT_PUBLIC_ARTICLES_KEY}`;

  const { data, error, isLoading } = useSWR(URL, fetcher)


  if (error) return <div>failed to load</div>
  if (isLoading) return <SpinnerContainer><RingLoader size = {450} color = {'#76EEC6'}/></SpinnerContainer>

console.log(data)


  if(!data.status === 'ok') { (

    <Container>
      <Alert severity="error">  
          <AlertTitle>{data.message}</AlertTitle>
      </Alert>
        
    </Container>
   
  )} else {

    return (
    <StyledGrid
    >

        {

                data.articles.map((article) => {
                    return (
                                <ArticleItem
                                title = {article.title}
                                image = {article.urlToImage ?? null}
                                key = {article.url}
                                author = {article.author ?? 'Unknown'}
                                content = {article.content}
                                publishedAt = {article.publishedAt}
                                url = {article.url}
                                source = {article.source}
                            />)
                })


        }


    </StyledGrid>

  )}
}

export default ArticlesContainer