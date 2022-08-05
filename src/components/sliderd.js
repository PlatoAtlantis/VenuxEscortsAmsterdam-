import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NextArrow(props) {
  const {  onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowRight}
                     className="slick-arrow slick-next"
                     onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon icon={faArrowLeft}
                     className="slick-arrow slick-prev"
                     onClick={onClick}/>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className="section container">
        <div>
          <Slider {...settings}>
            <div>
              <StaticImage src="../../static/img/demi1.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi2.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>

              <StaticImage src="../../static/img/demi3.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi4.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi5.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi6.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi6.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi7.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi8.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
            <div>
              <StaticImage src="../../static/img/demi9.png" alt="demi" className="sliderimage"
                           objectFit="contain"
                           placeholder="none"
                           backgroundColor= "transparent"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

