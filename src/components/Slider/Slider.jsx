import SliderShow from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames/bind"
import styles from './Slider.module.scss'
const cx = classNames.bind (styles)

import { assets, feedbacks } from "../../assets/assets";
import { useEffect, useRef } from "react";

// Thành phần tùy chỉnh cho mũi tên trước
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <div className={cx("prev-slick-arrow")}>
                <img src={assets.btn_left} alt="Previous" />
            </div>
        </div>
    );
};

// Thành phần tùy chỉnh cho mũi tên sau
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <div className={cx("next-slick-arrow")}>
                <img src={assets.btn_right} alt="Next" />
            </div>
        </div>
    );
};

const Slider = () => {

    const sliderRef = useRef(null)

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay()
        }
    },[])

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow sliderRef={sliderRef} />,
        nextArrow: <NextArrow sliderRef={sliderRef} />,
    };

    return (
        <div className={cx('slider')} >
            <SliderShow {...settings}>
                {feedbacks.map((feedback, index) => {
                    return (
                        <div key={index} className={cx('box-slider')}>
                            <div className={cx("box-slider-top")}>
                                <div className={cx('user')}>
                                    <img src={feedback.images} alt="" />
                                    <div className={cx("name-address")}>
                                        <b>{feedback.name}</b>
                                        <p>{feedback.address}</p>
                                    </div>
                                </div>
                                <div className={cx("star")}>
                                    <p>{feedback.star}</p>
                                    <img src={assets.icon_star} alt="" />
                                </div>
                            </div>
                            <div className={cx("box-slider-bottom")}>
                                {feedback.text_fb}
                            </div>
                        </div>
                    )
                })}
            </SliderShow>
        </div>
    )
}

export default Slider
