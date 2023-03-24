import { Card, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components";

const AnswerSection = ({storedValues}) => {

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

&:before {
    content: '👀 ';
}

`;

const AnswerItem = styled.div`

background-color: gray;
border-radius: 15px;
font-family: sans-serif;

&:before {
    content: '🕶';
}

`;

const AnswersContainer = styled.div`

    height: 200;
    overflow: scroll;

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
            </AnswersContainer>
        </>
    )
}

export default AnswerSection;