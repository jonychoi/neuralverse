import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../components/common/base';
import { Loading, Timer } from '../../../components/common/loading';
import { bgStyler } from '../../../styles';
import { postRequest } from '../inference';
import { InputBar } from './components';

import city from './imgs/city.jpg';
import elephant from './imgs/elephants.jpg';
import zebra from './imgs/zebras.jpg';

const api = "https://hf.space/gradioiframe/akhaliq/DETR/+/api/predict/"

export const Classifier = ({model, open, setOpen, darkMode}) => {
    const [imgs, setImgs] = useState({
        city: city,
        elephant: elephant,
        zebra: zebra,
    });
    const [result, setResult] = useState(null);
    const [_displayImage, _setDisplayImage] = useState();
    const [displayImage, setDisplayImage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))

    const run = (name) => {     
        setDisplayImage(name);        
        toDataURL(imgs[name])
        .then(dataUrl => {
            setIsLoading(true);
            postRequest(dataUrl, model.demo.api, setResult);
            _setDisplayImage(name);
        })
    };

    useEffect(() => {
        const changer = () => {
            let data = result.data[0];
            let _imgs = imgs;
            _imgs[_displayImage] = data;
            setImgs(_imgs);
            setDisplayImage(_displayImage);
            setIsLoading(false);
        };
        result && changer();
    }, [result]);

    const InputAnyImage = () => (
        <Flex>
            <Text>Please Input Any Image to Model 😊</Text>
        </Flex>
    )

    return (
        <Col position="relative" width="100%" height="100%" align="center" justify="center">
            <InputBar run={run} displayImage={displayImage} open={open} setOpen={setOpen} darkMode={darkMode} />

            <Row align="center" justify="center" width="100%" height="100%" padding={`padding-left: ${open ? '20%' : 0}`}>

                <Col flex={3} width="100%" height="100%" align="center" justify="center">
                    {displayImage ? !isLoading ? <Image width="100%" height="100%" of="cover" src={imgs[displayImage]} /> : <Loading /> : <InputAnyImage />}
                </Col>

                {/* <Col flex={1} width="100%" height="100%" align="center" justify="center">
                    
                </Col> */}
                {isLoading && <Flex position="absolute" style={{right: 10, top: 10}} zIndex={1000}>
                    <Timer defaultSec={3} />
                </Flex>}
            </Row>

        </Col>
    )
};

export default Classifier;