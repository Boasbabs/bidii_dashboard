import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import customs components
import ProductListTable from './components/ProductListTable';
import TopMenu from './components/TopMenu';
import SecondaryMenu from './components/SecondaryMenu';
import PrimaryMenu from './components/PrimaryMenu';
import LoadingContent from './components/LoadingContent';


const PATH_BASE = 'https://bidiibuild-test-api.herokuapp.com/api/v1/';
const PATH_PRODUCT = 'products';


class App extends Component {

    state = {
        productList: [],
        loading: false,
    };

    //  to fetch data from an API
    fetchProductList(){
        axios(`${PATH_BASE}${PATH_PRODUCT}`)
            .then(result => {
                this.setState({productList:result.data.data, loading: false})
            })
            .catch(error => error)
    }

    //when the component mounted, do an asynchronous request
    componentDidMount(){
        this.setState({loading: true})
        this.fetchProductList()
    }

    render() {
        const {productList, loading} = this.state;

        return (
            <div className="App">
                <TopMenu />
                <SecondaryMenu />
                <PrimaryMenu/>
                { loading ?
                    <LoadingContent/>
                    : <ProductListTable productList={productList}/>
                }

            </div>
        );
    }
}

export default App;
