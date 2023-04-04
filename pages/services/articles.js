import ArticlesContainer from '@/components/Articles/ArticlesContainer'
import { Container, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'



const Articles = () => {


    const [keyword, setKeyWord] = useState('everything')
    const [query, setQuery] = useState('')

   
  
    const handleChange = (e) => {


      setQuery(e.target.value)
      
      setKeyWord(e.target.value)
  
    }
  

  





  return (

          <Container>

                  <TextField
                    type='text'
                    placeholder='Type to search...'
                    onChange={handleChange}
                    defaultValue = {query}
                    />

                    <ArticlesContainer 
                    keyword = {keyword} 
                    setKeyWord = {setKeyWord}
                    />

          </Container>
  
            
                  
                  
          )
}

export default Articles