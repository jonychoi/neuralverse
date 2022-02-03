import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../components/common/base';
import { InputBar } from './components';
import city from './imgs/city.jpg';

export const Classifier = ({model, open, setOpen, darkMode}) => {
    const [img, setImg] = useState(city);
    const [result, setResult] = useState(null);
    return (
        <Col position="relative" width="100%" height="100%" align="center" justify="center">
            <InputBar api={"https://hf.space/gradioiframe/akhaliq/YOLOv5/+/api/predict/"} result={result} setResult={setResult} img={img} setImg={setImg} open={open} setOpen={setOpen} darkMode={darkMode} />
            <Row align="center" jsutify="center" width="100%" height="100%" padding={`padding-left: ${open ? '20%' : 0}`}>
                <Col flex={3} width="100%" height="100%" align="center" justify="center">
                    <Image width="100%" height="100%" of="cover" src={img} />
                </Col>
                <Col flex={1} width="100%" height="100%" align="center" justify="center">
                    
                </Col>
            </Row>
        </Col>
    )
};

export default Classifier;