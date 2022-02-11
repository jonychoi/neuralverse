import React, {useState, useEffect} from 'react';
import {Col, Row, Flex, Image, Text} from '../../../components/common/base';
import { DemoIcon } from '../../../icons/utilities';

import Classifier from './classifier';
import Generator from './generator';
import Detector from './detector';
import Transferer from './transferer';

export const Demo = ({model, darkMode}) => {
    const [open, setOpen] = useState(true);
    const demo = model.demo.type.split("/");
    console.log(demo);
    const type = demo[0];
    const subtype = demo[1];
    return (
        <Col>
            <Row align="center" margin="margin-bottom: 30px; margin-left: 20px;">
                <DemoIcon width={23} height={23} />
                <Text className='bold' size="22" margin="margin-left: 12px;">{model.demo.title ? model.demo.title : model.title} Demo</Text>
            </Row>
            <Flex shadow={true} height="470px" width="100%" margin="margin-bottom: 30px;" br="20px" bg={darkMode ? "rgba(30, 30, 30, 0.5)" : "rgba(255, 255, 255, 0.5)"} style={{overflow: 'hidden'}}>
                {type == "classification" && <Classifier model={model} open={open} setOpen={setOpen} darkMode={darkMode} subtype={subtype}/>}
                {type == "object-detection" && <Detector model={model} open={open} setOpen={setOpen} darkMode={darkMode} subtype={subtype}/>}
                {type == "style-transfer" && <Transferer model={model} open={open} setOpen={setOpen} darkMode={darkMode} subtype={subtype}/>}
                {type == "image-generation" && <Generator model={model} open={open} setOpen={setOpen} darkMode={darkMode} subtype={subtype}/>}
            </Flex>
        </Col>
    )
};

export default Demo;