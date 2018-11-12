import React from 'react';
import styles from './ActionBar.scss';


export default class ActionBar extends React.Component {
    render() {
        const {route } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.upper}>
                	<div>DEMO Streaming</div>
                	<div className={styles.actionBox}>
	                	<div>Login</div>
	                	<div className={styles.trial}>Start your free trial</div>
	                </div>
                </div>
                <div className={styles.lower}>Popular {`${route ? route : 'Titles'}`}</div>
            </div>
        );
    }
}
