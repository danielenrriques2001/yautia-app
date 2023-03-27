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

const QuoteContainer = styled(Card)`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  transition:  all .5s ease-in;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;
const Quotes = ({content, author}) => {


  return (
    <QuoteContainer>
        <QuoteContent slogan>{content}</QuoteContent>
        <QuoteAuthor>{author}</QuoteAuthor>
    </QuoteContainer>

  )
}

export default Quotes