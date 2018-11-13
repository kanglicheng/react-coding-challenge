import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.scss';


export default class ActionBar extends React.Component {
    static propTypes = {
        route: PropTypes.string,
    };

    static defaultProps = {
        route: 'Titles',
    };

    render() {
        const { route } = this.props;
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
}
