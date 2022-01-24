import React from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/common/base';
import { bgStyler } from '../../styles';

export const Demo = ({darkMode}) => {
    return (
        <Flex height="500px" width="100%" br="20px" margin="margin-bottom: 30px;" bg={bgStyler(darkMode)}>

        </Flex>
    )
};

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

export const Benchmarks = ({darkMode}) => {
    return (
        <Col width="100%">
            <Demo darkMode={darkMode} />
            <Row width="100%">
                <LeaderBoards darkMode={darkMode} />
                <ModelSpecs darkMode={darkMode} />
            </Row>
        </Col>
    )
};

export default Benchmarks;