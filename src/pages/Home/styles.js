import styled from "styled-components";

import coverImg from '../../assets/cover.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-image: url(${coverImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: grid;
    grid-template-rows:11rem auto;
    grid-template-areas: 
    "header"
    "welcome";

    > h1 {
        font-family: 'Great Vibes', cursive;
    }
`

export const Welcome = styled.div`
    grid-area: welcome;

    display: flex;
    flex-direction: column;
    

    margin: auto;

    > h1 {
        font-family: 'Great Vibes', cursive;
        font-weight: 400;
        font-size: 13vw;
        color: ${({theme}) => theme.colors.light200};

        margin-top: 9rem;
    }

     > p {
        margin: -2rem auto 3rem;
        
        font-size: 1.8rem;
        color: ${({theme}) => theme.colors.light200};
     }

     `;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    > button {
    font-size: 2.2rem;
    color: ${({theme}) => theme.colors.light200};

    padding-block: 1rem;

    width: 20rem;

    background-color: transparent;

    border: 1px solid ${({theme}) => theme.colors.light200};
    border-radius: .5rem;

    transition: all ease-in-out .2s;
    }

    > button:hover {
    background-color: ${({theme}) => theme.colors.backgroundTrans};
    }

`;