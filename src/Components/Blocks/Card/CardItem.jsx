import React from 'react';
import { Link } from 'react-router-dom';
import { CardItemStyle } from './styles';
import { SubjectInfoBlock } from 'Components/Blocks/InfoBlocks';
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
            <li>Investors: {cardStatus.investors}</li>
            <li>Location: {cardStatus.PropertyDetails.location.city}, {cardStatus.PropertyDetails.location.state}</li>
            <li>
                <SubjectInfoBlock
                    info={`$${cardStatus.accumulated}`}
                    title={`Asked: ${cardStatus.loanRequest}, ${percentageOfHouseMarketValue()}% est. market value`}
                />
            </li>
            <li className={classes.CardBtnWrapper}>
                <SubmitButton
                    label="EXPLORE"
                    onClick={()=> <Link to={`/project-detail/${cardStatus.projectId}`}/>}
                />
            </li>
        </ul>
    );
};

export default CardItem;