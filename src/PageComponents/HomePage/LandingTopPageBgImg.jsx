import React from 'react';
import ImgPreNextCarousel from 'Components/ImageBlock/ImgPreNextCarousel';
import { LandingTopPageBgImgStyles } from './styles';
import useImageLazyLoad from 'hooks/useImageLazyLoad';

const LandingTopPageBgImg = ({imgSrc, children}) => {
    
    const imgSetting = imgSrc.split('upload/');
    
    const props = {
        imgHd: `${imgSetting[0]}upload/w_1440/${imgSetting[1]}`,
        imgMd: `${imgSetting[0]}upload/w_1440/${imgSetting[1]}`,
        imgLd: `${imgSetting[0]}upload/w_1240/${imgSetting[1]}`,
        imgMod: `${imgSetting[0]}upload/w_1240/${imgSetting[1]}`,
    };

    const classes = LandingTopPageBgImgStyles(props);
    return(
        <div className={classes.landingWrapper}>
            <div className={classes.topWrapper}>
                {children}
            </div>
        </div>
    )
}

export default LandingTopPageBgImg; 