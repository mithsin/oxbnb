import React from 'react';

const Home = () => {
    const imgSrc = "https://a0.muscache.com/im/pictures/11efec50-4ab2-44af-8c4a-d63633dbd4ba.jpg?aki_policy=large"
    return(
        <div>
            <div>
                <div>Prev</div>
                <img className={imgSrc} src={imgSrc} alt="headerImages" />
                <div>Next</div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Home; 