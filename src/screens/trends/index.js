import React from 'react';
import {Row} from '../../components/common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import { Lefts, Rights, Main } from './components';

export const Trends = ({route}) => {
    const {darkMode} = ThemeEvent();
    return (
        <Row style={{display: route == 1 ? 'flex': 'none', paddingTop: 100}} justify="center">
            <Lefts darkMode={darkMode} />
            <Main darkMode={darkMode} />
            <Rights darkMode={darkMode} />
        </Row>
    )
};

export default Trends;