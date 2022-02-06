import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../components/common/base';
import { Loading, Timer } from '../../../components/common/loading';
import { bgStyler } from '../../../styles';
import { postRequest } from '../inference';
import { InputBar } from './components';
import mountain from './imgs/mountain.jpeg';
import monc from './imgs/monc.jpeg';

const api = "https://hf.space/gradioiframe/akhaliq/DETR/+/api/predict/"

export const Transferer = ({model, open, setOpen, darkMode}) => {
    const [imgs, setImgs] = useState([]);
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))

    const run = () => {     
         toDataURL(mountain)
         .then(dataUrl => {
            
        })
        toDataURL(monc)
        .then(dataUrl => {
           
       })

        postRequest(model.demo.api, setResult, "style-transfer");

    };

    // useEffect(() => {
    //     const changer = () => {
    //         let data = result.data[0];
    //         let _imgs = imgs;
    //         setIsLoading(false);
    //     };
    //     result && changer();
    // }, [result]);

    const InputAnyImage = () => (
        <Flex>
            <Text>Please Input Any Image to Model 😊</Text>
        </Flex>
    )

    return (
        <Col position="relative" width="100%" height="100%" align="center" justify="center">
            <InputBar run={run} type="style-transfer" open={open} setOpen={setOpen} darkMode={darkMode} />

            <Row align="center" justify="center" width="100%" height="100%" padding={`padding-left: ${open ? '20%' : 0}`}>

                <Col flex={3} width="100%" height="100%" align="center" justify="center">
                    {!isLoading ? <Image width="100%" height="100%" of="cover" src={result} /> : <InputAnyImage />}
                </Col>

            </Row>

        </Col>
    )
};

export default Transferer;