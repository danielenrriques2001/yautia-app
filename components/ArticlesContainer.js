import { Grid, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'

const ArticlesContainer = (data, setKeyWord) => {

  const [filteredArticles, setFilteredArticles] = useState(data.data.articles)

  useEffect(() => {
		setFilteredArticles(data.data.articles);
	}, [data]);


  const handleChange = (e) => {
    
    const inputValue = e.target.value;
  
    setKeyWord(inputValue)

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