import React from 'react';
import { CardItemStyle } from './styles';
import { SubmitButton } from 'Components/MUI/ButtonTypes';

const CardItem = ({cardStatus}) => {
    const classes = CardItemStyle();

    return(
        <ul className={classes.CardItem}>
            <li className={classes.CardImgWrapper}>
                <img
                    className={classes.img} 
                    src={cardStatus.img}
                    alt='card image' />
            </li>
            <li>Estimated Market Value: {cardStatus.estMarketValue}</li>
            <li>Loan Request: {cardStatus.loanRequest}</li>
            <li>Accumulated: {cardStatus.accumulated}</li>
            <li>Investors: {cardStatus.investors}</li>
            <li className={classes.CardBtnWrapper}>
                <SubmitButton
                    label="EXPLORE"
                />
            </li>
        </ul>
    );
};

export default CardItem;