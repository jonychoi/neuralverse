import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {SearchModel, Main} from './components';
import {Visualizer} from './visualizer';
import {ThemeEvent, SideBarEvent} from '../../contexts/GlobalContext';
import { SideBar } from '../../components/read_engine';

export const Models = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [modelVisual, setModelVisual] = useState(false);
    const {sideBar} = SideBarEvent();
    return (
        <Col align="center" bg={darkMode ? "rgb(15, 15, 15)" : "white"} style={{display: route == 2 ? 'flex': 'none', paddingTop: 80}}>
            <Main sideBar={sideBar} setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
            <Visualizer setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
        </Col>
    )
};

export default Models