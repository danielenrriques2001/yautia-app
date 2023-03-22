import ArticlesContainer from '@/components/ArticlesContainer'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'



const Articles = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const [keyword, setKeyWord] = useState('everything')





    const { data, error, isLoading, mutate } = useSWR(`https://newsapi.org/v2/everything?q=${ keyword.length > 3 ? keyword : 'you'}&apiKey=${process.env.NEXT_PUBLIC_ARTICLES_KEY}`, fetcher)


    useEffect(() => {

        mutate();

    }, [keyword])
    

   
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (<ArticlesContainer data = {data} setKeyWord = {setKeyWord}/>)
}

export default Articles