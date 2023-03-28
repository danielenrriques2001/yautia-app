 import styled from "styled-components";
 import { Box, Typography } from "@mui/material";
 import Image from "next/image";
 
 const WhyItem = ({image, title}) => {

    const ItemBox = styled(Box)`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 2rem;
      border-radius: 45%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      cursor: pointer;
      font-family: 'Yanone Kaffeesatz', sans-serif;
      font-weight: 100;

    `;
  
    return (
    <>
        <ItemBox
  
        >
        <Image src={image.src} alt = {`This is ${image}`} width={'50'} height={'50'}></Image>
        <h2>{title}</h2>
        </ItemBox>
    
    </>
  )
  }

  export default WhyItem;