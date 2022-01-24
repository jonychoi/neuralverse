import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import {Main} from './components';
import { SideBarEvent } from '../../contexts/GlobalContext';
import DesignBar from './designbar';
import Space from './space';
import { GlobalBgStyler } from '../../styles';

export const Design = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [bar, setBar] = useState(0);
    return (
        <Col align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 4 ? 'flex': 'none', paddingTop: 80}}>
            <Space bar={bar} setBar={setBar} darkMode={darkMode} />
            <DesignBar bar={bar} setBar={setBar} darkMode={darkMode} />
        </Col>
    )
};

export default Design