import { Card, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components";
import SyncLoader from 'react-spinners/SyncLoader'

const AnswerSection = ({storedValues, chatSpinner}) => {

const ChatItem = styled.div`
background-color: ${props => props.answer ? "#05C4BC" : "#F3F6F4"};
padding: 15px;
border-radius: 15px;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
color: black;
text-align: end;
margin-bottom: 15px;
font-weight: 100;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

&:before {
    content: '👀 ';
}

`;

const AnswersContainer = styled.div`

    max-height: 300px;


`;


    return (
        <>
            <AnswersContainer 

            
            >
            
           
               
            {storedValues.map((value, index) => {
                    return (
                        <Grid   
                        key={index}
                        padding = {'15px'}
                            
                        >
                            <ChatItem>{value.question}
                            </ChatItem>
                            <ChatItem answer>{value.answer}</ChatItem>
                        </Grid>
                    );
                })}
                 {
                    chatSpinner && <ChatItem><SyncLoader color="#05C4BC"/></ChatItem>
                 }
            </AnswersContainer>
        </>
    )
}

export default AnswerSection;