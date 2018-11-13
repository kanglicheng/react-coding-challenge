import React from 'react';
import styles from './SeriesMovies.scss';
import ActionBar from '../Presentational/ActionBar';
import Footer from '../Presentational/Footer';
import ProductItem from '../Presentational/ProductItem';
import { getMediaContent, maxItems } from '../../../config.json';


export default class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            productsFetchStatus: null, // null, 'fetching' or 'fetched'
        };
    }

    componentDidMount() {
        this.setState({
            productsFetchStatus: 'fetching',
        }, this.fetchAll);
    }

    fetchAll() {
        const seriesItems = [];
        let counter = 1;

        fetch(getMediaContent)
            .then(response => response.json())
            .then((data) => {
                data.entries.map((item) => {
                    if (counter <= maxItems && item.programType === 'series' && item.releaseYear >= '2010') {
                        counter += 1;
                        seriesItems.push(item);
                    }
                    return seriesItems;
                });
                this.setState({
                    items: seriesItems,
                    productsFetchStatus: 'fetched',
                });
            })
            .catch((err) => {
                console.log('Failed to load data', err);
                this.setState({
                    productsFetchStatus: 'error',
                });
            });
    }

    render() {
        const { items, productsFetchStatus } = this.state;
        let route = this.props.location.pathname;
        route = route.replace('/', '').charAt(0).toUpperCase() + route.slice(2).toLowerCase();

        return (
            <div className={styles.container}>
                <ActionBar route={route} />
                <div className={styles.content}>
                    {productsFetchStatus === 'fetched'
                        && (
                            <div className={styles.gridContainer}>
                                {
                                    items.map((item, index) => (
                                        <ProductItem itemData={item} index={index} key={Number(index.toString())} />
                                    ))
                                }
                            </div>
                        )
                    }
                    {productsFetchStatus === 'fetching'
                        && <div style={{ margin: '35px 130px' }}>Loading...</div>
                    }
                    {productsFetchStatus === 'error'
                        && <div style={{ margin: '35px 130px' }}>Oops, something went wrong...</div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}
