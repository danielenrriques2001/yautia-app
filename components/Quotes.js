import { HeadingPomodoroTitle } from '@/public/styles'
import { Card, Typography } from '@mui/material'
import React from 'react'

const Quotes = ({content, author}) => {
  return (
    <Card>
        <HeadingPomodoroTitle slogan>{content}</HeadingPomodoroTitle>
        <HeadingPomodoroTitle>{author}</HeadingPomodoroTitle>
    </Card>

  )
}

export default Quotes