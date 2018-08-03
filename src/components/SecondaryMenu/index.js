import React from 'react';
import { Menu } from 'semantic-ui-react';
import Sections from '../../constants/secondaryMenuSections'

const SecondaryMenu = () => <Menu
    className='border-0 m-0'
    size='small'
    position='right'
    items={Sections}
    borderless/>

export default SecondaryMenu;

/*
export default class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >
                    Editorials
                </Menu.Item>

                <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                    Reviews
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    Upcoming Events
                </Menu.Item>
            </Menu>
        )
    }
}

export default class MenuExampleNameProp extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='reviews'
                    active={activeItem === 'reviews'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

*/