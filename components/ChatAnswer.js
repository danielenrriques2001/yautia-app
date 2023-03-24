import { Card, Typography, Grid } from "@mui/material";
import styled from "styled-components";

const AnswerSection = ({storedValues}) => {

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

const ChatItem = styled.div`

background-color: #F3F6F4;
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
    content ''
}

`;

const AnswerItem = styled.div`

background-color: gray;
border-radius: 15px;
font-family: sans-serif;

`;


    return (
        <>
            <Grid
            padding={1}
            
            >
               
            {storedValues.map((value, index) => {
                    return (
                        <div key={index}>
                            <ChatItem>{value.question}
                            </ChatItem>
                            <AnswerItem>{value.answer}</AnswerItem>
                            <div>
                            <button onClick={() => {copyText(value.answer)}}></button>
                            </div>
                        </div>
                    );
                })}
            </Grid>
        </>
    )
}

export default AnswerSection;