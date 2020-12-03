import React from 'react';
import { CardItemStyle } from './styles';

const TwoCompareInfoBlock = ({info, title}) => {
    return(
        <div >
            <span>{info}</span>
            <span>{title}</span>
        </div>
    );
};

export default TwoCompareInfoBlock;