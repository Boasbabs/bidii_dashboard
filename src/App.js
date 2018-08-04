import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import customs components
import ProductListTable from './components/ProductListTable';
import TopMenu from './components/TopMenu';
import SecondaryMenu from './components/SecondaryMenu';
import PrimaryMenu from './components/PrimaryMenu';
import LoadingContent from './components/LoadingContent';
import {PATH_PRODUCT, PATH_BASE} from './constants'


function onfilterProduct(searchTerm) {
    return function(item) {
        return (
            item.attributes.manufacturer.toLowerCase().indexOf(searchTerm) >= 0 ||
            item.attributes.name.toLowerCase().indexOf(searchTerm) >= 0 ||
            // TODO: Category has some null field which is breaking on filtering
            // item.attributes.category.toLowerCase().indexOf(searchTerm) >= 0  ||
            item.attributes.code.toLowerCase().indexOf(searchTerm) >= 0
        );
    }
}

class App extends Component {

    state = {
        productList: [], // data return from API
        loadingMessage: false, // to display message before API call is completed
        searchTerm: '', // input entered into the search field
    };

    //  to fetch data from an API using axios
    fetchProductList(){
        axios(`${PATH_BASE}${PATH_PRODUCT}`)
            .then(result => {
                this.setState({productList:result.data.data, loadingMessage: false})
            })
            .catch(error => error)
    }

    //when the component mounted, do an asynchronous request
    componentDidMount(){
        const {productList} = this.state
        this.setState({loadingMessage: true})
        this.fetchProductList()

        // TODO: convert catergory null data to empty strings
        // const response = productList.attributes.category.replace(/null/g, '')
        // const parseData = JSON.parse(response);
        // this.setState({productList: parseData})
    }

    onSearchChange = ({target}) => {
        // convert target.value to string to
        this.setState({ searchTerm: target.value.toLowerCase()  })
    };



    render() {
        // destructure the states
        const {productList, loadingMessage, searchTerm} = this.state;

        // search result after filtering with input field from primary menu
        const searchResult = productList.filter(onfilterProduct(searchTerm));

        return (
            <div className="App">
                <TopMenu />
                <SecondaryMenu />
                <PrimaryMenu onSearch={this.onSearchChange}/>
                { loadingMessage ?
                    <LoadingContent/>
                    : <ProductListTable productList={searchResult}/>
                }
            </div>
        );
    }
}

export default App;
