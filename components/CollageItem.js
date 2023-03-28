import Image from "next/image";
import styled from "styled-components";


const CollageItem = ({image, title, content}) => {

    const StyledImage = styled(Image)`
  
    width: fit-content;
    height: fit-content;
    transition: all .3s ease-out;
    border-radius: 45px;
      &:hover {
        cursor: pointer;
        transform: translateY(-15px);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      }
  
  
    `;
  
  
    return (
    
        <StyledImage src={image.src} alt = {`This is ${image}`} width={300} height={300}></StyledImage>
  )
}

export default CollageItem;
  