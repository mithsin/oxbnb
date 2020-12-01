import React from 'react';
import { CardItemStyle } from './styles';

const CardItem = ({cardStatus}) => {
    const classes = CardItemStyle();

    return(
        <ul className={classes.CardItem}>
            <li>
                <img
                    className={classes.img} 
                    src={cardStatus.img}
                    alt='card image' />
            </li>
            <li>Estimated Market Value: {cardStatus.estMarketValue}</li>
            <li>Loan Request: {cardStatus.loanRequest}</li>
            <li>Accumulated: {cardStatus.accumulated}</li>
            <li>Investors: {cardStatus.investors}</li>
            <li>Start Date: {cardStatus.startDate}</li>
            <li>End Date: {cardStatus.endDate}</li>
        </ul>
    );
};

export default CardItem;