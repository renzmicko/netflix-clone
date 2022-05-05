import React from 'react';

import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';

import billboardHeroImg from './assets/st-nextgames.webp';

import styles from './Billboard.module.css';

const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt="" />
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                  
                    <div className={styles.description}>
                        Step inside the minds of the most innovative designers in a variety of disciplines and learn how
                        design impacts every aspect of life.
                    </div>
                    <div className={styles.links}>
                        <a href="/">
                            <PlayIcon />
                            <span>Play</span>
                        </a>
                        <button type="button">
                            <InfoIcon />
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;