import React, { useState } from 'react';
import { useStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronRight,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const ImgPreNextCarousel = ({imgSrc=[]}) => {
    const classes = useStyles()
    const [currentIndex, setCurrentIndex] = useState(0)
    const backgroundImgSrc = {
        backgroundImage: `url(${imgSrc[currentIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const onClickNext = () => {
        if(currentIndex === (imgSrc.length-1)){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const onClickPrev = () => {
        if(currentIndex === 0){
            setCurrentIndex(imgSrc.length-1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return(
        <div className={classes.carouselWrapper}>
            <div className={classes.prevBtn} onClick={onClickNext}>
                <FontAwesomeIcon icon={faChevronLeft} className="fa-4x"/>
            </div>
            <div className={classes.imageBlock} style={backgroundImgSrc}></div>
            <div className={classes.nextBtn} onClick={onClickPrev}>
                <FontAwesomeIcon icon={faChevronRight} className="fa-4x"/>
            </div>
        </div>
    );
};

export default ImgPreNextCarousel;