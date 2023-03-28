import { ColoredLine, HeadingPomodoroTitle } from '@/public/styles'
import { Card, Typography } from '@mui/material'
import styled from 'styled-components'


const QuoteContainer = styled(Card)`

  transition:  all .5s ease-in;
  padding: 15px;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;
const Quotes = ({content, author}) => {


  return (
    <QuoteContainer>
        <HeadingPomodoroTitle
          Size = {3}
          Weight = {500}
        >{`''`}{content}{`''`}</HeadingPomodoroTitle>
        <HeadingPomodoroTitle
          Size = {1}
          Weight = {300}
        >{author}</HeadingPomodoroTitle>
    </QuoteContainer>

  )
}

export default Quotes