import React from 'react';
import ImgPreNextCarousel from 'Components/ImageBlock/ImgPreNextCarousel';
import { LandingTopPageBgImgStyles } from './styles';
import useImageLazyLoad from 'hooks/useImageLazyLoad';

const LandingTopPageBgImg = ({imgSrc}) => {
    
    const imgSetting = imgSrc.split('upload/');
    
    const props = {
        imgHd: `${imgSetting[0]}upload/w_1440/${imgSetting[1]}`,
        imgMd: `${imgSetting[0]}upload/w_1240/${imgSetting[1]}`,
        imgLd: `${imgSetting[0]}upload/w_960/${imgSetting[1]}`,
        imgMod: `${imgSetting[0]}upload/w_540/${imgSetting[1]}`,
    };

    console.log('imgProps---->: ', props)
    const classes = LandingTopPageBgImgStyles(props);
    return(
        <div className={classes.landingWrapper}>
            <div className={classes.topWrapper}>
                <h1>Hello</h1>
                <h2>world</h2>
            </div>
        </div>
    )
}

export default LandingTopPageBgImg; 