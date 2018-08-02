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

const CheckboxElement = () => (
    <Checkbox label='' />
)



const ProductListTable = () => (
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
            <Table.Row className='pt-1 pb-1'>
                <Table.Cell>
                    <CheckboxElement/>
                </Table.Cell>
                <Table.Cell>Cement</Table.Cell>
                <Table.Cell>PRO-0001</Table.Cell>
                <Table.Cell>GHC 24.50</Table.Cell>
                <Table.Cell>GHACEM</Table.Cell>
                <Table.Cell>Bags</Table.Cell>
                <Table.Cell>Interior Design</Table.Cell>
                <Table.Cell textAlign={'center'}>5</Table.Cell>
                <Table.Cell>
                    <Button className='secondary-color-bg white-color'>Active</Button>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)



class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
          <SecondaryMenu/>
          <PrimaryMenu/>
          <ProductListTable/>
      </div>
    );
  }
}

export default App;
