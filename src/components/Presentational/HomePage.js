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
                    
                        <Link to='/movies'>
                            <div>Check products</div>
                        </Link>
                    <Footer />
                </div>
                    )
            }

}