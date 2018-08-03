import React, { Component } from 'react';
import { Button, Checkbox, Dropdown, Input, Icon, Menu, Table } from 'semantic-ui-react'
import './App.css';



const sections = [
    { key: 'dashboard', name: 'Dashboard'},
    { key: 'inventory', name: 'Inventory' },
    { key: 'orders', name: 'Purchase Orders' },
    { key: 'bills', name: 'Bills' },
    { key: 'receipts', name: 'Receipts' },
    { key: 'stock', name: 'Stock Control' },
    { key: 'reports', name: 'Reports' },
]

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

const TopMenu = () => (
    <Menu className='primary-color-bg m-0 border-0' size='massive' borderless inverted color={'grey'}>
        <Menu.Item>Bidii Dashboard</Menu.Item>
    </Menu>
)

const SecondaryMenu = () => <Menu className='border-0 m-0' size='' position='right' items={sections} borderless/>


class PrimaryMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        return (
            <Menu className='large m-0 border-0' borderless>
                <Dropdown text='Active Products' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Default Filters</Dropdown.Header>
                        <Dropdown.Item>All Products</Dropdown.Item>
                        <Dropdown.Item>Active Products</Dropdown.Item>
                        <Dropdown.Item>Inactive Products</Dropdown.Item>
                        <Dropdown.Item>Unicategorized Products</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>

                    <Menu.Item>
                        <Button className='secondary-color-bg white-color'>New Product</Button>
                    </Menu.Item>
                    <Menu.Item name='bars' onClick={this.handleItemClick}>
                        <Icon name='bars' />
                    </Menu.Item>
                    <Menu.Item name='th list' onClick={this.handleItemClick}>
                        <Icon name='th list' />
                    </Menu.Item>
                    <Menu.Item name='th large' onClick={this.handleItemClick}>
                        <Icon name='th large' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}


const CheckboxElement = () => <Checkbox label='' />


const ProductListTable = ({productList}) => (
    <Table singleLine striped className='m-0'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell collapsing>
                    <CheckboxElement/>
                </Table.HeaderCell>
                <Table.HeaderCell width={'4'}>Name</Table.HeaderCell>
                <Table.HeaderCell>Code</Table.HeaderCell>
                <Table.HeaderCell>Unit Price</Table.HeaderCell>
                <Table.HeaderCell>Manufacturer</Table.HeaderCell>
                <Table.HeaderCell>UOM</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Reorder Level</Table.HeaderCell>
                <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {productList.map(product => {
                return(
                    <Table.Row className='pt-1 pb-1' key={product.id}>
                        <Table.Cell>
                            <CheckboxElement/>
                        </Table.Cell>
                        <Table.Cell>{product.attributes.name}</Table.Cell>
                        <Table.Cell>{product.attributes.code}</Table.Cell>
                        <Table.Cell>{product.attributes.unit_price}</Table.Cell>
                        <Table.Cell>{product.attributes.manufacturer}</Table.Cell>
                        <Table.Cell>{product.attributes.uom}</Table.Cell>
                        <Table.Cell>{product.attributes.category}</Table.Cell>
                        <Table.Cell textAlign={'center'}>{product.attributes.reorder_level}</Table.Cell>
                        <Table.Cell>
                            <Button className='secondary-color-bg white-color'>Active</Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>
)


class App extends Component {

    state = {
        productList: productList,
    };

    render() {
        return (
            <div className="App">
                <TopMenu />
                <SecondaryMenu/>
                <PrimaryMenu/>
                <ProductListTable productList={productList}/>
            </div>
        );
    }
}

export default App;
