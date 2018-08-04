import React, {Component} from "react";
import { Button, Dropdown, Input, Icon, Menu} from 'semantic-ui-react';

// Component that contains the menu
class PrimaryMenu extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { onSearch } = this.props
        return (
            <Menu className='large m-0 border-0' borderless>
                <Dropdown text='Active Products' pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Default Filters</Dropdown.Header>
                        <Dropdown.Item>All Products</Dropdown.Item>
                        <Dropdown.Item>Active Products</Dropdown.Item>
                        <Dropdown.Item>Inactive Products</Dropdown.Item>
                        <Dropdown.Item>Uncategorized Products</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input className='icon'
                               icon='search'
                               placeholder='Search...'
                               name="search"
                               type="text"
                               onChange={onSearch} />
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

export default PrimaryMenu;