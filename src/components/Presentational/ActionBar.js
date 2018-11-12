import React from 'react';
import styles from './ActionBar.scss';


export default class ActionBar extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.upper}>DEMO Streaming</div>
                <div className={styles.lower}>Popular Titles</div>
            </div>
        );
    }
}
