import React from 'react';
import LandingTopPage from 'PageComponents/HomePage/LandingTopPage';
import { homeStyles } from './styles';

const Home = () => {
    const classes = homeStyles()
    return(
        <div>
            <LandingTopPage />
            <h1>2nd block</h1>
        </div>
    )
}

export default Home; 