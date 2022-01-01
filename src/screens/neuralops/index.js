import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';

export const NeuralOps = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [modelVisual, setModelVisual] = useState(false);
    return (
        <Col align="center" bg={darkMode ? "rgb(15, 15, 15)" : "white"} style={{display: route == 6 ? 'flex': 'none', paddingTop: 80}}>
        </Col>
    )
};

export default NeuralOps