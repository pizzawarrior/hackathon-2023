import { useState } from 'react'
import axios from 'axios';
import { HomeContainer, PictureRow, PictureDiv, Modal } from '../assets/style';
import { WEATHER_API_KEY, PEXELS_API_KEY } from '../secrets';
import Cloudbreak from '../assets/Cloudbreak.jpg';
import Mavs from '../assets/Mavs.jpg';
import Nazare from '../assets/Nazare.jpg';
import Pipeline from '../assets/Pipeline.jpg';
import PuertoEscondido from '../assets/PuertoEscondido.jpg';
import Teahupoo from '../assets/Teahupoo.jpg';
import happypic from '../assets/happy.jpg'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [happy, setHappy] = useState(false)
    const [image, setImage] = useState('')

    const findImage = (mood) => {
        axios
          .get(`https://api.pexels.com/v1/search?query=${mood}&per_page=1`, {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          })
          .then(({data}) => setImage(data.photos[0].src.original));
          console.log(image)
      };


    const findWaves = (lat, lon) => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`
            )
            .then(({data}) => {
                let mood;
                if (data.wind.speed <= 10) {
                mood = 'happy';
                setHappy(true);
            } else {
                mood = 'sad';
                setHappy(false);
            }
                console.log(mood)
                findImage(mood)
                setShowModal(true)
                console.log(data.wind.speed)
            });
    };


    return (
        <HomeContainer>

            {showModal && <Modal>
                {happy ? 'Firing!' : "Not Firing"}
                <img src={image} alt="test" />
                <button
                onClick={() => {
                    setShowModal(false);
                    setHappy(false);
                    }
                }
                >
                    Close
                    </button>
            </Modal>}

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

                <PictureDiv onClick={() => findWaves(37.491958, -122.500584)}>
                    <img
                        src={Mavs}
                        alt='beach'
                    />
                    <div className='bottom'>Mavericks</div>
                </PictureDiv>

                <PictureDiv onClick={() => findWaves(39.601875,-9.071212)}>
                    <img
                        src={Nazare}
                        alt='beach'
                    />
                    <div className='bottom'>Nazare</div>
                </PictureDiv>
            </PictureRow>

            <PictureRow>
                <PictureDiv onClick={() => findWaves(21.664019,-158.053852)}>
                    <img
                        src={Pipeline}
                        alt='beach'
                    />
                    <div className='bottom'>Pipeline</div>
                </PictureDiv>

                <PictureDiv onClick={() => findWaves(15.87037,-97.07726)}>
                    <img
                        src={PuertoEscondido}
                        alt='beach'
                    />
                    <div className='bottom'>Puerto Escondido</div>
                </PictureDiv>
                <PictureDiv onClick={() => findWaves(-17.8416633, -149.266998932)}>
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
