import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 15vh;
    bottom: 0;
`;

export const HomeContainer = styled.div`
    max-width: 1440px;
    margin: auto;
`;

export const PictureRow = styled.div`
    display: flex;
    margin: 5vh 0;
    justify-content: space-around;
`;

export const PictureDiv = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 20vw;
        height: 25vh;
    }
    .bottom {
        font-size: 35px;
    }
`;


export const NavContainer = styled.div`
    position: fixed;
    top:0;
    width: 100%;
    height: 15vh;
    background-color: #306bac;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const H1 = styled.h1`
    margin: 0 4vw;
    font-size: 56px;
    color: white;
`;


export const Modal = styled.div`
    position: absolute;
    left: 33vw;
    background-color: white;
    padding: 5vh 5vw;
    display: flex;
    flex-direction: column;
    border: 1px solid #306bac;
    border-radius: 8px;

    img {
        width: 25vw;
        height: auto;
    }
`;
