import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.scss';
import ActionBar from './ActionBar';
import Footer from './Footer';


export default class HomePage extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <ActionBar />
                <div className={styles.content}>
                    <Link to="/series">
                        <div>Series</div>
                    </Link>
                    <Link to="/movies">
                        <div>Movies</div>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }
}
