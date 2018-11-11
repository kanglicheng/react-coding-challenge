import React from 'react';
import styles from './Series.scss';
// import Pagination from 'react-js-pagination';


export default class Series extends React.Component {
    constructor(props) {
    super();
    this.state = {
        data: [],
        itemsPerPage: config.itemsPerPage[0].value,
        activePage: 1,
        productsFetchStatus: null, // null, 'fetching' or 'fetched'
        start: 0
    }
}

componentDidMount() {
    fetch(config.getProducts)
    .then(response => {
        return response.json();
    })
    .then(data => {
        this.setState({
            data: data
        })
    })
    .catch((err) => {
        console.log('Failed to load data', err);
        this.setState({
          productsFetchStatus: 'error'
        });
      });
}

handlePageChange(pageNum){
    this.setState({
        activePage: pageNum,
        start: (pageNum - 1) * this.state.itemsPerPage
    })
}

handleItemsPerPageChange(selectedOption){
    this.setState({
        itemsPerPage: parseInt(selectedOption.value)
    })
}

render() {
    let {data, itemsPerPage, activePage, start} = this.state;
    return (
        <div>
            <div className={styles.headerContainer}>
                <div style={{fontSize: '22px', color: '#848484'}}>All Products</div>
                <div className={styles.headerConfig}>
                    <div style={{color: '#bbbbbb', fontSize: '14px'}}>{`${data.length} Products`}</div>
                        <ReactSelect
                        options={config.itemsPerPage}
                        onChange={this.handleItemsPerPageChange.bind(this)}
                        className='react-select-container'
                        classNamePrefix="react-select"
                        placeholder={config.itemsPerPage[0].label}
                        />
                </div>
            </div>
            <div className={styles.gridContainer}>
            {
                data.map((item, index) => {
                    if(index >= start && index <= (start + itemsPerPage - 1)){
                        return (
                            <ProductItem
                            itemData={item}
                            index={index}
                            key={index} />
                        )
                    }
                })
            }
            </div>
            <div className={styles.paginationPanel}>
            <Pagination
                activePage={activePage}
                totalItemsCount={data.length}
                onChange={this.handlePageChange.bind(this)}
                itemsCountPerPage={itemsPerPage}
                prevPageText='< Previous page'
                nextPageText='Next page >'
                pageRangeDisplayed={10}
                firstPageText='<< First page'
                lastPageText='Last page >>'
                hideFirstLastPages={true}
              />
            </div>
        </div>
            )
    }
}