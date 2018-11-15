import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SeriesMovies.scss';
import ActionBar from '../Presentational/ActionBar';
import Footer from '../Presentational/Footer';
import ProductItem from '../Presentational/ProductItem';
import { getMediaContent, maxItems } from '../../../config.json';
import Loader from '../Presentational/Loader';


export default class Movies extends React.Component {
    // static propTypes = {
    //     route: PropTypes.string,
    // };

    // static defaultProps = {
    //     route: 'Movies',
    // }

    constructor(props) {
        super(props);
        const { route } = props;
        this.state = {
            items: [],
            isLoading: true,
            isError: false,
            route,
        };
    }

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll() {
        let moviesItems = [];
        let counter = 1;

        fetch(getMediaContent)
            .then(response => response.json())
            .then((data) => {
                data.entries.map((item) => {
                    if (counter <= maxItems && item.programType === 'movie' && item.releaseYear >= '2010') {
                        counter += 1;
                        moviesItems.push(item);
                    }
                    return moviesItems;
                });
                moviesItems = moviesItems.sort(this.compare);
                this.setState({
                    items: moviesItems,
                    isLoading: false,
                });
            })
            .catch((err) => {
                console.log('Failed to load data', err);
                this.setState({
                    isError: true,
                });
            });
    }

    compare(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    render() {
        const {
            items, isLoading, isError, route,
        } = this.state;

        return (
            <div className={styles.container}>
                <ActionBar route={route} />
                <div className={styles.content}>
                    <Loader
                        isLoading={isLoading}
                        isError={isError}
                    />
                    <div className={styles.gridContainer}>
                        {
                            items.map((item, index) => (
                                <ProductItem itemData={item} index={index} key={Number(index.toString())} />
                            ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
