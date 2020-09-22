import React from 'react';
import ImgPreNextCarousel from 'Components/ImageBlock/ImgPreNextCarousel';
import { useStyles } from './styles';
import { imgSrc } from 'Utils/imageSrc';

const Home = () => {
    const classes = useStyles()
    return(
        <div style={{paddingTop: "100px"}}>
            <div className={classes.imgCarouselWrapper}>
                <ImgPreNextCarousel imgSrc={ imgSrc } />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home; 