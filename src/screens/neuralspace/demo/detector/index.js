import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../../components/common/base';
import { Loading, Timer, InputAnyImage } from '../../../../components/common/loading';
import { postRequest } from '../../inference';
import { InputBar } from './components';
import {toDataURL} from '../utilities';


export const Detector = ({model, open, setOpen, darkMode}) => {
    const [displayImage, setDisplayImage] = useState();
    const [displayImage2, setDisplayImage2] = useState();
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const run = (img) => {     
        setIsLoading(true); 
        toDataURL(img)
        .then(dataUrl =>   {
            postRequest(dataUrl, model.demo.api, setResult);
        })
    };

    useEffect(() => {
        const changer = () => {
            let data = result.data[0];
            // for two output images
            if (result.data.length == 2) {
                setDisplayImage2(result.data[1]);
            }
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
                    {displayImage ? !isLoading ? 
                        <Row>
                            <Image flex={1} height="100%" of="cover" src={displayImage} />
                            {displayImage2 && <Image flex={1} height="100%" of="cover" src={displayImage2} />}
                        </Row>
                        : <Loading /> : isLoading ? <Loading /> : <InputAnyImage />}
                </Col>

                {isLoading && <Flex position="absolute" style={{right: 10, top: 10}} zIndex={1000}>
                    <Timer defaultSec={3} />
                </Flex>}
            </Row>

        </Col>
    )
};

export default Detector;