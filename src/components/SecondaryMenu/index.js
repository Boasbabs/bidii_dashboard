import React from 'react';
import { Menu } from 'semantic-ui-react';
import {SECONDARY_MENU} from '../../constants'

const SecondaryMenu = () => <Menu
    className='border-0 m-0'
    size='small'
    position='right'
    items={SECONDARY_MENU}
    borderless/>

export default SecondaryMenu;