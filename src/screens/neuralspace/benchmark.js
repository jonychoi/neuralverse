import React, { useEffect } from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/common/base';
import { bgStyler } from '../../styles';
import {GithubIcon, PaperIcon} from '../../icons/utilities';
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

export const Benchmarks = ({model, darkMode}) => {
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