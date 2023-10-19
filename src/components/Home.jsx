// import React from 'react'
import { HomeContainer, PictureRow, PictureDiv } from '../assets/style';
import random from '../assets/random.jpg';

const Home = () => {
    return (
        <HomeContainer>
            <PictureRow>
                <PictureDiv>
                    <img
                        src={random}
                        alt='beach'
                    />
                    <div className='bottom'>Beach Name</div>
                </PictureDiv>
                <PictureDiv>
                    <img
                        src={random}
                        alt='beach'
                    />
                    <div className='bottom'>Beach Name</div>
                </PictureDiv>
                <PictureDiv>
                    <img
                        src={random}
                        alt='beach'
                    />
                    <div className='bottom'>Beach Name</div>
                </PictureDiv>
            </PictureRow>
            <PictureRow>
                <PictureDiv>
                    <img
                        src={random}
                        alt='beach'
                    />
                    <div className='bottom'>Beach Name</div>
                </PictureDiv>
                <PictureDiv>
                    <img
                        src={random}
                        alt='beach'
                    />
                    <div className='bottom'>Beach Name</div>
                </PictureDiv>
                <PictureDiv>
                    <img
                        src={random}
                        alt='beach'
                    />
                    <div className='bottom'>Beach Name</div>
                </PictureDiv>
            </PictureRow>
        </HomeContainer>
    );
};

export default Home;
