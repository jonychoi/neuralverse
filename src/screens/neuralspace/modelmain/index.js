import React, { useState, useEffect } from 'react';
import {Flex, Col, Row, Text, Image} from '../../../components/common/base';
import { bgStyler } from '../../../styles';
import Demo from '../demo';
import Example from './example';

export const ModelSpecs = ({model, darkMode}) => {
    return (
        <Col flex={1}>
            <Text size="22" className="bold" margin="margin-bottom: 30px;">Model Specs</Text>
            <Flex bg={bgStyler(darkMode)} br="20px;" height="500px"></Flex>
        </Col>
    )
};

export const LeaderBoards = ({model, darkMode}) => {
    return (
        <Col flex={2.5} margin="margin-right: 30px;">
            <Text size="22" className="bold" margin="margin-bottom: 30px;">Results from the Paper</Text>
            <Flex br="20px;" height="500px;" style={{overflow: 'hidden'}} bg={bgStyler(darkMode)}>
                <Example />
            </Flex>
        </Col>
    )
};

export const Task = ({model, darkMode}) => {
    return (
        <Row margin="margin-top: 20px; margin-bottom: 50px;">
            <Col flex={1} margin="margin-right: 25px;">
                <Text size="22" className="bold" margin="margin-bottom: 15px;">
                    Tasks
                </Text>
                <Flex style={{display: 'block'}}>{model.task.tasks.map((item) => <Text margin="margin-right: 10px;" key={item}>{item}</Text>)}</Flex>
            </Col>
            <Col flex={1} margin="margin-left: 25px;">
                <Text size="22" className="bold" margin="margin-bottom: 15px;">
                    Datasets
                </Text>
                <Flex style={{display: 'block'}}>{model.task.datasets.map((item) => <Text margin="margin-right: 10px;" key={item}>{item}</Text>)}</Flex>
            </Col>
        </Row>
    )
}

export const ModelMain = ({model, darkMode}) => {
    // const [opacity, setOpacity] = useState(1);
    // const [_model, set_Model] = useState(model);
    // useEffect(() => {
    //     const opaciter = () => {
    //         setOpacity(0);
    //         setTimeout(() => {
    //             set_Model(model);
    //             setOpacity(1)
    //         }, 300);
    //     };
    //     opaciter();
    // }, [model])
    return (
        <Col width="100%" margin="margin-top: 35px;">
            {model.demo && <Demo model={model} darkMode={darkMode} />}
            <Task model={model} />
            <Row width="100%">
                <LeaderBoards darkMode={darkMode} />
                <ModelSpecs darkMode={darkMode} />
            </Row>
        </Col>
    )
};

export default ModelMain;