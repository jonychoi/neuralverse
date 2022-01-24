import React from 'react';
import {Row} from '../../components/common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import { GlobalBgStyler } from '../../styles';
import Main from './main';

export const Trends = ({route}) => {
    const {darkMode} = ThemeEvent();
    return (
        <Row bg={GlobalBgStyler(darkMode)} style={{display: route == 1 ? 'flex': 'none', paddingTop: 110}} justify="center">
            <Main darkMode={darkMode} />
        </Row>
    )
};

export default Trends;