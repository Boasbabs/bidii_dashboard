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


// const isSearched = (searchTerm) => (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
function filterProduct(searchTerm) {
    return function(item) {
        return item.attributes.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

class App extends Component {

    state = {
        productList: [],
        loadingMessage: false,
        searchTerm: '',
        result:[],
    };

    //  to fetch data from an API
    fetchProductList(){
        axios(`${PATH_BASE}${PATH_PRODUCT}`)
            .then(result => {
                this.setState({productList:result.data.data, loadingMessage: false})
            })
            .catch(error => error)
    }

    //when the component mounted, do an asynchronous request
    componentDidMount(){
        this.setState({loadingMessage: true})
        this.fetchProductList()
    }

    onSearchChange = ({target}) => {
        const {productList} = this.state
        this.setState({ searchTerm: target.value  })

        /*const filterProduct = this.state.productList.filter( prod => {
            prod.attributes.manufacturer.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            console.log(prod.attributes.manufacturer.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        });*/
        const searchResult = productList.filter(filterProduct(this.state.searchTerm));
        console.log("search result is ----------");
        console.log(searchResult);
        this.fetchProductList();
        this.setState({productList: searchResult})
    };

    // onSearch = ({event}) => {
    //     const {searchTerm, productList} = this.state;
    //     this.state.productList.filter(filterProduct(this.state.searchTerm));
    //     this.setState({productList: [...productList]})
    // }


    render() {
        // destructure the states
        const {productList, loadingMessage, searchTerm} = this.state;
        console.log(searchTerm);

        return (
            <div className="App">
                <TopMenu />
                <SecondaryMenu />
                <PrimaryMenu onSearch={this.onSearchChange}/>
                { loadingMessage ?
                    <LoadingContent/>
                    : <ProductListTable productList={productList}/>
                }

            </div>
        );
    }
}

export default App;
