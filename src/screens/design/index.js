import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import {Main} from './components';
import { SideBarEvent } from '../../contexts/GlobalContext';

export const Design = ({route}) => {
    const {darkMode} = ThemeEvent();
    const {sideBar, setSideBar} = SideBarEvent();
    return (
        <Col align="center" style={{display: route == 4 ? 'flex': 'none', paddingTop: 80}}>
            <Main sideBar={sideBar} setSideBar={setSideBar} darkMode={darkMode} />
        </Col>
    )
};

export default Design