import React from 'react';
import styles from './SeriesMovies.scss';
import ActionBar from '../Presentational/ActionBar';
import Footer from '../Presentational/Footer';


export default class Series extends React.Component {

    render() {
            return (
                <div className={styles.container}>
                <ActionBar />
                    Hello Series
                <Footer />
                </div>
                    )
            }

}