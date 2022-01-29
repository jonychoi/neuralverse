import React from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/common/base';
import { bgStyler } from '../../styles';
import Demo from './demo';

export const ModelSpecs = ({darkMode}) => {
    return (
        <Col flex={1} bg={bgStyler(darkMode)} br="20px;">
            
        </Col>
    )
};

export const LeaderBoards = ({darkMode}) => {
    return (
        <Col flex={2.5} margin="margin-right: 30px;" br="20px;" height="500px;" bg={bgStyler(darkMode)}>
            
        </Col>
    )
};

export const Benchmarks = ({darkMode, categoryBar}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 25%; padding-bottom: 100px;" : "padding: 0% 10%; padding-bottom: 100px;"}>
            <Demo darkMode={darkMode} />
            <Row width="100%">
                <LeaderBoards darkMode={darkMode} />
                <ModelSpecs darkMode={darkMode} />
            </Row>
        </Col>
    )
};

export default Benchmarks;