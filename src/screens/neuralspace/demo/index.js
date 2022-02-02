import React, {useState, useEffect} from 'react';
import {bgStyler} from '../../../styles';
import {Col, Row, Flex, Image, Text} from '../../../components/common/base';
import {postRequest} from '../inference';
import { DemoIcon } from '../../../icons/utilities';

import Classifier from './classifier';
import Generator from './generator';
import Detector from './detector';

export const Demo = ({model, darkMode}) => {
    const [result, setResult] = useState(null);
    const [open, setOpen] = useState(true);
    
    return (
        <Col>
            <Row align="center" margin="margin-bottom: 30px; margin-left: 20px;">
                <DemoIcon width={23} height={23} />
                <Text className='bold' size="22" margin="margin-left: 12px;">{model.title} Demo</Text>
            </Row>
            <Flex shadow={true} height="470px" width="100%" margin="margin-bottom: 30px;" br="20px" bg={darkMode ? "rgba(30, 30, 30, 0.5)" : "rgba(255, 255, 255, 0.5)"} style={{overflow: 'hidden'}}>
                <Classifier model={model} open={open} setOpen={setOpen} darkMode={darkMode} />
            </Flex>
        </Col>
    )
};

export default Demo;