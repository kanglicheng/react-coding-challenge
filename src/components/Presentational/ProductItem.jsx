import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.scss';


export default function ProductItem(props) {
    ProductItem.propTypes = {
        itemData: PropTypes.shape.isRequired,
        index: PropTypes.number.isRequired,
    };

    const { itemData, index } = props;

    return (
        <div className={styles.gridItem} key={index}>
            <div className={styles.productImageContainer}>
                <div className={styles.productImage}><img src={itemData.images['Poster Art'].url} alt="" /></div>
            </div>
            <div className={styles.productDetailsContainer}>
                <div className={styles.productTitle}>{itemData.title}</div>

            </div>
        </div>
    );
}
