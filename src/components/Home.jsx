// import React from 'react'
import axios from 'axios';
import { HomeContainer, PictureRow, PictureDiv } from '../assets/style';
import { WAVES_API_KEY } from '../../secrets';
import Cloudbreak from '../assets/Cloudbreak.jpg';
import Mavs from '../assets/Mavs.jpg';
import Nazare from '../assets/Nazare.jpg';
import Pipeline from '../assets/Pipeline.jpg';
import PuertoEscondido from '../assets/PuertoEscondido.jpg';
import Teahupoo from '../assets/Teahupoo.jpg';

const Home = () => {
    const findWaves = (lat, lng) => {
        axios
            .get(
                `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=waveHeight`,
                {
                    headers: {
                        Authorization: WAVES_API_KEY,
                    },
                }
            )
            .then((data) => console.log(data));
    };
    return (
        <HomeContainer>
            <PictureRow>
                <PictureDiv
                    onClick={() => findWaves(-17.8537111, 177.20084722222222)}
                >
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
