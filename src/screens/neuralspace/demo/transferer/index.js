import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../../components/common/base';
import { Loading, Timer, InputAnyImage} from '../../../../components/common/loading';
import { postRequest } from '../../inference';
import { InputBar } from './components';
import {toDataURL} from '../utilities';

export const Transferer = ({model, open, setOpen, darkMode}) => {
    const [inputs, setInputs] = useState([null, null]);
    const [displayImage, setDisplayImage] = useState();
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const run = (raw) => {
        setDisplayImage(raw);
        setIsLoading(true);
        console.log(raw);
        
        // convert content img
        toDataURL(raw[0])
        .then(dataUrl => {
            let copy = inputs;
            copy[0] = dataUrl;
            setInputs(copy)
        })
        // convert style img
        toDataURL(raw[1])
        .then(dataUrl => {
            let copy = inputs;
            copy[1] = dataUrl;
            setInputs(copy);
            postRequest(inputs, model.demo.api, setResult)
        })
    };

    
    useEffect(() => {
        const changer = () => {
            let data = result.data[0];
            setDisplayImage(data);
            setIsLoading(false);
        };
        result && changer();
    }, [result]);

    return (
        <Col position="relative" width="100%" height="100%" align="center" justify="center">
            <InputBar run={run} displayImage={displayImage} open={open} setOpen={setOpen} darkMode={darkMode} />

            <Row align="center" justify="center" width="100%" height="100%" padding={`padding-left: ${open ? '20%' : 0}`}>

                <Col flex={3} width="100%" height="100%" align="center" justify="center">
                    {displayImage ? !isLoading ? <Image width="100%" height="100%" of="cover" src={displayImage} /> : <Loading /> : <InputAnyImage />}
                </Col>

                {isLoading && <Flex position="absolute" style={{right: 10, top: 10}} zIndex={1000}>
                    <Timer defaultSec={3} />
                </Flex>}
            </Row>

        </Col>
    )
};

export default Transferer;