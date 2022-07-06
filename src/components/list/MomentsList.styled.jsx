import styled from "styled-components";


export const CtMomentList = styled.div`
    justify-content: center;
    grid-template-columns: 20% 20% 20% 20%;
    display: grid;
    gap: 2em;  
    background-color: white;
    /* background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('https://wallpaperaccess.com/full/475322.jpg');  */


@media only screen and (max-width:820px) {
    grid-template-columns: 50% 50%;
}

@media only screen and (max-width:450px) {
   grid-template-columns: 100%;
} 

`;



