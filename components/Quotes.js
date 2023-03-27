import { HeadingPomodoroTitle } from '@/public/styles'
import { Card, Typography } from '@mui/material'
import styled from 'styled-components'

const QuoteContent = styled(HeadingPomodoroTitle)`

font-size: 45px;
text-align: center;
text-transform: uppercase;

`;

const QuoteAuthor = styled(HeadingPomodoroTitle)`
    margin: 0;
    padding: 0;
    font-size: 4rem;
    text-align: center;

`;
const Quotes = ({content, author}) => {


  return (
    <Card>
        <QuoteContent slogan>{content}</QuoteContent>
        <QuoteAuthor>{author}</QuoteAuthor>
    </Card>

  )
}

export default Quotes