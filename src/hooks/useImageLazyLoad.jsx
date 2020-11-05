import React from 'react';
const styles = {
    width: "100%",
    height: "100%",
};

const useImageLazyLoad = (src, alt='image') => {
    const imgSrc = src.split('upload/')

    return (
        <picture>
            <source media="(min-width: 90em)" srcset={`${imgSrc[0]}/upload/w_1440/${imgSrc[1]}`} />
            <source media="(min-width: 45em)" srcset={`${imgSrc[0]}/upload/w_720/${imgSrc[1]}`} />
            <source media="(min-width: 32em)" srcset={`${imgSrc[0]}/upload/w_540/${imgSrc[1]}`} />
            <img src={src} alt={alt} style={styles} loading="lazy"/>
        </picture>
    );
};

export default useImageLazyLoad;