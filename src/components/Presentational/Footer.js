import React from 'react';
import styles from './Footer.scss';
import {FacebookIcon, TwitterIcon, InstagramIcon} from '../SVGIconComp/SvgIcons';
import appStoreLogo from '../../../assets/store/app-store.svg';
import playStoreLogo from '../../../assets/store/play-store.svg';
import windowsStoreLogo from '../../../assets/store/windows-store.svg';


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
		                	<div className={styles.social}>
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
		                	<div className={styles.store}>
		                		<img src={appStoreLogo} height='40' />
		                		<img src={playStoreLogo} height='40' />
		                		<img src={windowsStoreLogo} height='40' />
		                	</div>
		                </div>
	                </div>
                </div>
                    )
            }

}