import { Button, Grid, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'

const ArticlesContainer = (data, SetURLValue) => {

  const [filteredArticles, setFilteredArticles] = useState(data.data.articles)

  const [query, setQuery] = useState('')

  useEffect(() => {
		setFilteredArticles(data.data.articles);
	}, [data]);


  const handleChange = (e) => {
    
    const inputValue = e.target.value;
  
    setQuery(inputValue)

  }

  const handleSearch = () => {
    SetURLValue(`https://newsapi.org/v2/everything?q=${query}}&apiKey=${process.env.NEXT_PUBLIC_ARTICLES_KEY}`)
  }


  return (
    <Grid
        container

    >


    <TextField
            type='text'
            placeholder='Type to search...'
            onChange={handleChange}
          />

    <Button onClick={handleSearch}>
      Search
    </Button>
        {

                filteredArticles.map((article) => {
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


    </Grid>
  )
}

export default ArticlesContainer