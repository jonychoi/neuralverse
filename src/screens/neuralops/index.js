import React, {useState} from 'react';
import {Col, Row} from '../../components/common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import { GlobalBgStyler } from '../../styles';

export const NeuralOps = ({route}) => {
    const {darkMode} = ThemeEvent();
    return (
        <Col align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 5 ? 'flex': 'none', paddingTop: 80}}>
        </Col>
    )
};

export default NeuralOps