import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {SearchModel, Main} from './components';
import {ThemeEvent, SideBarEvent, VisualizerEvent} from '../../contexts/GlobalContext';
import { GlobalBgStyler } from '../../styles';

export const Models = ({route}) => {
    const {darkMode} = ThemeEvent();
    const {sideBar} = SideBarEvent();
    const {visualizer} = VisualizerEvent();
    return (
        <Col align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 2 ? 'flex': 'none', paddingTop: 80}}>
            <Main visualizer={visualizer} sideBar={sideBar} darkMode={darkMode} />
        </Col>
    )
};

export default Models