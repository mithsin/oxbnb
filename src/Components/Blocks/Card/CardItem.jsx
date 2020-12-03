import React from 'react';
import { CardItemStyle } from './styles';
import { SubmitButton } from 'Components/MUI/ButtonTypes';

const CardItem = ({cardStatus}) => {
    const classes = CardItemStyle();
    const percentageOfHouseMarketValue = () => 
        Math.round((parseInt(cardStatus.loanRequest) / parseInt(cardStatus.estMarketValue)) * 100);
        
    return(
        <ul className={classes.CardItem}>
            <li className={classes.CardImgWrapper}>
                <img
                    className={classes.img} 
                    src={cardStatus.img}
                    alt='card image' />
            </li>
            <li>Estimated Market Value: {cardStatus.estMarketValue}</li>
            <li>Loan Request: {cardStatus.loanRequest} {percentageOfHouseMarketValue()}</li>
            <li>Accumulated: {cardStatus.accumulated}</li>
            <li>Investors: {cardStatus.investors}</li>
            <li>Location: {cardStatus.PropertyDetails.location.city}, {cardStatus.PropertyDetails.location.state}</li>
            <li className={classes.CardBtnWrapper}>
                <SubmitButton
                    label="EXPLORE"
                />
            </li>
        </ul>
    );
};

export default CardItem;