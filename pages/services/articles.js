import ArticlesContainer from '@/components/ArticlesContainer'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'



const Articles = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    

    const [filteredArticles, setFilteredArticles] = useState([])

    const [keyword, setKeyWord] = useState('everything')

    const URL = `https://newsapi.org/v2/everything?q=${keyword}}&apiKey=${process.env.NEXT_PUBLIC_ARTICLES_KEY}`;
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [urlValue, SetURLValue] = useState()
  
    useEffect(() => {
      setLoading(true)
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [urlValue, URL])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

  return (<ArticlesContainer data = {data} SetURLValue ={SetURLValue}/>)
}

export default Articles