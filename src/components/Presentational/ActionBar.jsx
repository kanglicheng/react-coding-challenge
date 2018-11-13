import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.scss';


export default function ActionBar(props) {
    ActionBar.propTypes = {
        route: PropTypes.string,
    };

    ActionBar.defaultProps = {
        route: 'Titles',
    };

    const { route } = props;
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div>DEMO Streaming</div>
                <div className={styles.actionBox}>
                    <div>Login</div>
                    <div className={styles.trial}>Start your free trial</div>
                </div>
            </div>
            <div className={styles.lower}>{`Popular ${route || 'Titles'}`}</div>
        </div>
    );
}
