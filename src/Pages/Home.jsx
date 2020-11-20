import React from 'react';
import LandingTopPage from 'PageComponents/HomePage/LandingTopPage';
import LandingTopPageBgImg from 'PageComponents/HomePage/LandingTopPageBgImg';
import ListBlockDetail from 'Components/Blocks/ListBlocks/ListBlockDetail';
import { homeStyles } from './styles';

const Home = () => {
    const classes = homeStyles();

    const ListBlockDetailSrc = {
        flip: false,
        lgImg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
        sm1: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
        sm2: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
        sm3: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
        sm4: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
        description: 'alter, manipulate, or treat so as to give a spuriously (see spurious sense 2) genuine appearance to : doctor faked the lab results. 2 : counterfeit, simulate, concoct faked a heart attack. 3 : to deceive (an opponent) in a sports contest by means of '
    }

    return(
        <div>
            <LandingTopPageBgImg imgSrc="https://res.cloudinary.com/paf1david/image/upload/v1605649351/itap-of-some-more-beach-houses-wallpaper_vil2bt.jpg">
                <div className={classes.landingChildren}>
                    <div><h1>ESTATE VENTURE</h1></div>
                    <div><h2>Invest real estate together</h2></div>
                </div>
            </LandingTopPageBgImg>
            <ListBlockDetail {...ListBlockDetailSrc}/>
            <h1>2nd block</h1>
        </div>
    )
}

export default Home; 