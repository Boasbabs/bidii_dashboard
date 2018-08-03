import React, { Component } from 'react';
import './App.css';

// import customs components
import ProductListTable from './components/ProductListTable';
import TopMenu from './components/TopMenu';
import SecondaryMenu from './components/SecondaryMenu';
import PrimaryMenu from './components/PrimaryMenu';


const productList = [
    {
        "id": "1",
        "type": "product",
        "attributes": {
            "name": "Product 1",
            "code": "P1000",
            "image": "https://res.cloudinary.com/bidiibuildcpm/image/upload/v1533145679/9_lznoma.png",
            "unit_price": "25.64",
            "manufacturer": "Adidas",
            "uom": "pieces",
            "category": "general",
            "reorder_level": 10,
            "is_active": true,
            "created_at": "2018-08-01T22:20:15.829Z",
            "updated_at": "2018-08-01T22:20:15.829Z"
        }
    },
    {
        "id": "2",
        "type": "product",
        "attributes": {
            "name": "Product 2",
            "code": "P1001",
            "image": "https://res.cloudinary.com/bidiibuildcpm/image/upload/v1533145679/10_yvsxog.png",
            "unit_price": "100.64",
            "manufacturer": "Adidas",
            "uom": "pieces",
            "category": "general",
            "reorder_level": 20,
            "is_active": true,
            "created_at": "2018-08-01T22:20:15.844Z",
            "updated_at": "2018-08-01T22:20:15.844Z"
        }
    },
    {
        "id": "3",
        "type": "product",
        "attributes": {
            "name": "Product 3",
            "code": "P1002",
            "image": "https://res.cloudinary.com/bidiibuildcpm/image/upload/v1533145679/8_eueyoa.png",
            "unit_price": "200.64",
            "manufacturer": "Adidas",
            "uom": null,
            "category": "general",
            "reorder_level": 5,
            "is_active": true,
            "created_at": "2018-08-01T22:20:15.851Z",
            "updated_at": "2018-08-01T22:20:15.851Z"
        }
    },
]

class App extends Component {

    state = {
        productList: productList,
    };

    render() {
        return (
            <div className="App">
                <TopMenu />
                <SecondaryMenu />
                <PrimaryMenu/>
                <ProductListTable productList={productList}/>
            </div>
        );
    }
}

export default App;
