import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {Main} from './components';
import {ThemeEvent, SideBarEvent} from '../../contexts/GlobalContext';

export const Datasets = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [modelVisual, setModelVisual] = useState(false);
    const {sideBar} = SideBarEvent();
    return (
        <Col align="center" bg={darkMode ? "rgb(15, 15, 15)" : "white"} style={{display: route == 3 ? 'flex': 'none', paddingTop: 80}}>
            <Main sideBar={sideBar} setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
        </Col>
    )
};

export default Datasets