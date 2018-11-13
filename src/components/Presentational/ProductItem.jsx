import React from 'react';
import styles from './ProductItem.scss';


export default class ProductItem extends React.Component {
    render() {
        const { itemData, index } = this.props;
        return (
            <div className={styles.gridItem} key={index}>
                <div className={styles.productImageContainer}>
                    <div className={styles.productImage}><img src={itemData.images['Poster Art'].url} /></div>
                </div>
                <div className={styles.productDetailsContainer}>
                    <div className={styles.productTitle}>{itemData.title}</div>

                </div>
            </div>
        );
    }
}
