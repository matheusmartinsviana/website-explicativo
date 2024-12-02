import React from "react";
import Slider from "react-slick";
import styles from "./Styles/TopicsSlider.module.css";
import js from "../assets/images/js/jslogo.webp";
import html from "../assets/images/html/htmllogo.webp";
import ghpages from "../assets/images/docker/dockerlogo.webp";
import nodejs from "../assets/images/nodejs/nodejs.webp";
import css from "../assets/images/css/csslogo.webp";
import react from "../assets/images/react/reactlogo.webp";
import { Link } from "react-router-dom";

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className="section-topics-technology">
          <Link to={"/html"}>
            <img
              className="logo-technology-topics"
              src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
              width={65}
              height={"auto"}
              alt="HTML Image"
            />
            <h3>HTML</h3>
          </Link>
        </div>
        <div className="section-topics-technology">
          <Link to={"/css"}>
            <img
              className="logo-technology-topics"
              src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
              width={65}
              height={"auto"}
              alt="CSS Image"
            />
            <h3>CSS</h3>
          </Link>
        </div>
        <div className="section-topics-technology">
          <Link to={"/javascript"}>
            <img
              className="logo-technology-topics"
              src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
              width={65}
              height={"auto"}
              alt="JS Image"
            />
            <h3>JS</h3>
          </Link>
        </div>
        <div className="section-topics-technology">
          <Link to={"/reactjs"}>
            <img
              className="logo-technology-topics"
              src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
              width={65}
              height={"auto"}
              alt="React Image"
            />
            <h3>React</h3>
          </Link>
        </div>
        <div className="section-topics-technology">
          <Link to={"/nodejs"}>
            <img
              className="logo-technology-topics"
              src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
              width={65}
              height={"auto"}
              alt="Node.js Image"
            />
            <h3>Node.js</h3>
          </Link>
        </div>
        <div className="section-topics-technology">
          <Link to={"/devops"}>
            <img
              className="logo-technology-topics"
              src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
              width={65}
              height={"auto"}
              alt="DevOps Image"
            />
            <h3>DevOps</h3>
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default TopicsSlider;
