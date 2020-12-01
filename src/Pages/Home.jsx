import React from 'react';
import LandingTopPage from 'PageComponents/HomePage/LandingTopPage';
import LandingTopPageBgImg from 'PageComponents/HomePage/LandingTopPageBgImg';
import ListBlockDetail from 'Components/Blocks/ListBlocks/ListBlockDetail';
import CardItem from 'Components/Blocks/Card/CardItem';
import { ListBlockDetailSrc, cardStatusList } from './mockData';
import { homeStyles } from './styles';

const Home = () => {
    const classes = homeStyles();


    return(
        <div>
            <LandingTopPageBgImg imgSrc="https://res.cloudinary.com/paf1david/image/upload/v1605649351/itap-of-some-more-beach-houses-wallpaper_vil2bt.jpg">
                <div className={classes.landingChildren}>
                    <div><h1>ESTATE VENTURE</h1></div>
                    <div><h2>Invest real estate together</h2></div>
                </div>
            </LandingTopPageBgImg>
            <ListBlockDetail {...ListBlockDetailSrc}/>
            <div className={classes.CardWrapper}>
                {
                    cardStatusList.map((item, index)=>
                        <CardItem key={`${index}-list`} cardStatus={item}/>
                    )
                }
            </div>
            <h1>4nd block</h1>
        </div>
    )
}

export default Home; 