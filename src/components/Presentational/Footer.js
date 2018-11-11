import React from 'react';
import styles from './Footer.scss';
import {FacebookIcon, TwitterIcon, InstagramIcon, AppStoreIcon} from '../SVGIconComp/SvgIcons';


export default class Footer extends React.Component {

    render() {
            return (
                <div className={styles.container}>
	                <div className={styles.innerContainer}>
		                <nav>
		                    <a href="">Home</a>
		                    <a href="">Terms and Conditions</a>
		                    <a href="">Privacy Policy</a>
		                    <a href="">Collection Statement</a>
		                    <a href="">Help</a>
		                    <a href="">Manage Account</a>
		                </nav>
		                <div>Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</div>
		                <div className={styles.external}>
		                	<div className='social'>
		                		<FacebookIcon
		                		fill1='#fff'
		                		viewBox='0 0 166.1 299' />
		                		<TwitterIcon
		                		fill1='#fff'
		                		viewBox='0 0 368.40001 299.39999' />
		                		<InstagramIcon
		                		fill1='#fff'
		                		viewBox='-589 1042.5 200 200' />
		                	</div>
		                	<div className='store'>
		                		<AppStoreIcon
		                		fill1='#fff'
		                		viewBox='-589 1042.5 200 200' />
		                	</div>
		                </div>
	                </div>
                </div>
                    )
            }

}