import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../../components/common/base';
import { ConvertIcon } from '../../../../icons/utilities';
import { bgStyler } from '../../../../styles';
import { InputBar } from './components';
import city from '../imgs/city.jpg';

export const Generator = ({model, open, setOpen, darkMode}) => {
    const [img, setImg] = useState(city);
    const [result, setResult] = useState(null);
    return (
        <Col position="relative" width="100%" height="100%" align="center" justify="center">
            <InputBar api={"https://hf.space/gradioiframe/akhaliq/YOLOv5/+/api/predict/"} result={result} setResult={setResult} img={img} setImg={setImg} open={open} setOpen={setOpen} darkMode={darkMode} />
            <Row align="center" jsutify="center" width="100%" height="100%" padding={`padding-left: ${open ? '20%' : 0}`}>
                <Col flex={1} width="100%" height="100%" align="center" justify="center">
                    <Image width="100%" height="100%" of="cover" src={img} />
                </Col>
            </Row>
            <Row shadow={true} align="center" position="absolute" padding="padding: 5px 15px 8px 15px;" br="10px" bg={bgStyler(darkMode, 0.8)} to="cursor" style={{bottom: 10, right: 10}}>
                <ConvertIcon width={15} height={15} stroke={darkMode ? "white" : "black"} />
                <Text margin="margin-left: 8px;" size="12" weight="500">Show Original Image</Text>
            </Row>
        </Col>
    )
};

export default Generator;