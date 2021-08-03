import { Fragment } from 'react';

import CartButton from './CartButton';

import styles from './Header.module.css';

const Header = () => {
    const IMAGE_URL = 'https://chooseveg.com/mercy4animals.wpengine.com/sites/445/2018/11/Healthy-Foods-1440x570.jpg';

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Food Order</h1>

                <CartButton />
            </header>
            
            <div className={styles['main-image']}>
                <img src={IMAGE_URL} alt="Vegan food" />
            </div>
        </Fragment>
    )
};

export default Header;