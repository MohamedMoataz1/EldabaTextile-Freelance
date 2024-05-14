import React from 'react'
import '../assets/css/videocarousel.css'
import { Carousel } from 'react-bootstrap';
import vid1 from '../assets/videos/comp2.mp4';
import vid2 from '../assets/videos/vid1.mp4';
import vid3 from '../assets/videos/vid1.mp4';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
    const videoProperties = [
        {
            id: 1,
            title: "video 1 ",
            src: vid1,
            credit: "video elghasl w elnaseg"
        },
        {
            id: 2,
            title: "video 2 ",
            src: vid2,
            credit: "video elghasl w elnaseg"
        },
        {
            id: 3,
            title: "video 3 ",
            src: vid3,
            credit: "video elghasl w elnaseg"
        },
    ]
    return (
        <div className='carouselcontainer' >
            <Carousel 
            interval={null}
            >
                {videoProperties.map((videoObj) => {
                    return (
                        <Carousel.Item key={videoObj.id}>
                            <ReactPlayer
                                url={videoObj.src}
                                pip={true}
                                controls={true}

                            />
                            <Carousel.Caption>
                                <h3>{videoObj.title}</h3>
                                <p>{videoObj.credit}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )

                })}
            </Carousel>
        </div>
    )
}

export default VideoCarousel