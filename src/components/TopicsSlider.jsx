import React from "react";
import Slider from "react-slick";
import styles from './Styles/TopicsSlider.module.css';

function TopicsSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                <div>
                    <img src="#" height={65} width={65} alt="HTML Image" />
                    <h3>HTML</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="#" height={65} width={65} alt="CSS Image" />
                    <h3>CSS</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="#" height={65} width={65} alt="JS Image" />
                    <h3>JS</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="#" height={65} width={65} alt="React Image" />
                    <h3>React</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="#" height={65} width={65} alt="Node.js Image" />
                    <h3>Node.js</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="#" height={65} width={65} alt="DevOps Image" />
                    <h3>DevOps</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </Slider>
        </div>
    );
}

export default TopicsSlider