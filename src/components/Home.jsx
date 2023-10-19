// import React from 'react'
import { HomeContainer, PictureRow, PictureDiv } from '../assets/style';
import Cloudbreak from '../assets/Cloudbreak.jpg';
import Mavs from '../assets/Mavs.jpg';
import Nazare from '../assets/Nazare.jpg';
import Pipeline from '../assets/Pipeline.jpg';
import PuertoEscondido from '../assets/PuertoEscondido.jpg';
import Teahupoo from '../assets/Teahupoo.jpg';


const Home = () => {
    return (
        <HomeContainer>
            <PictureRow>
                <PictureDiv>
                    <img
                        src={Cloudbreak}
                        alt='beach'
                    />
                    <div className='bottom'>Cloudbreak</div>
                </PictureDiv>

                <PictureDiv>
                    <img
                        src={Mavs}
                        alt='beach'
                    />
                    <div className='bottom'>Mavericks</div>
                </PictureDiv>

                <PictureDiv>
                    <img
                        src={Nazare}
                        alt='beach'
                    />
                    <div className='bottom'>Nazare</div>
                </PictureDiv>
            </PictureRow>

            <PictureRow>
                <PictureDiv>
                    <img
                        src={Pipeline}
                        alt='beach'
                    />
                    <div className='bottom'>Pipeline</div>
                </PictureDiv>

                <PictureDiv>
                    <img
                        src={PuertoEscondido}
                        alt='beach'
                    />
                    <div className='bottom'>Puerto Escondido</div>
                </PictureDiv>
                <PictureDiv>
                    <img
                        src={Teahupoo}
                        alt='beach'
                    />
                    <div className='bottom'>Tehapuoo</div>
                </PictureDiv>
            </PictureRow>
        </HomeContainer>
    );
};

export default Home;
