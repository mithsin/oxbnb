import React from 'react';
import ImgPreNextCarousel from 'Components/ImageBlock/ImgPreNextCarousel';
import { LandingTopPageStyles } from './styles';
import useImageLazyLoad from 'hooks/useImageLazyLoad';

const LandingTopPage = () => {
    const classes = LandingTopPageStyles()
    const hdImage = 'https://i.pinimg.com/originals/a5/67/88/a56788472a77f38b12204034e4aeccde.jpg';
    const mdImage = 'https://www.puravidasunsets.com/wp-content/uploads/2011/12/Lot-5-House-Casa-Divina-700px.jpg';
    const mdSqure = 'https://www10.aeccafe.com/blogs/arch-showcase/files/2013/08/MC_HouseSquare_cam02__x1200_.jpg';
    const smImage = 'https://i.pinimg.com/originals/6b/db/d8/6bdbd8c62b1ce655ba69b874b72a2b96.jpg';
    return(
        <div className={classes.landingWrapper}>
            <picture>
                <source media="(min-width: 1440px)" srcset={hdImage} />
                <source media="(min-width: 940px)" srcset={mdImage} />
                <source media="(min-width: 541px)" srcset={mdSqure} />
                <source media="(max-width: 540px)" srcset={smImage} />
                <img src={mdImage} alt='image' style={{width: "100%"}} loading="lazy"/>
            </picture>
            <div className={classes.topWrapper}>
                <h1>Hello</h1>
                <h2>world</h2>
            </div>
        </div>
    )
}

export default LandingTopPage; 