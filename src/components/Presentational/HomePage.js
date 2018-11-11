import React from 'react';
import styles from './HomePage.scss';
import {Link} from 'react-router-dom';
import ActionBar from './ActionBar';
import Footer from './Footer';


export default class HomePage extends React.Component {
    
    render() {
            return (
                <div className={styles.container}>
                    <ActionBar />
                        <Link to='/series'>
                            <div>Series</div>
                        </Link>
                        <Link to='/movies'>
                            <div>Movies</div>
                        </Link>
                    <Footer />
                </div>
                    )
            }

}