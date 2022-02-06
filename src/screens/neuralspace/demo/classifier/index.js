import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../../components/common/base';
import { Loading, Timer, InputAnyImage } from '../../../../components/common/loading';
import { postRequest } from '../../inference';
import { InputBar } from './components';
import {toDataURL} from '../utilities';
import { bgStyler, extremehueBlue } from '../../../../styles';


export const Classifier = ({model, open, setOpen, darkMode}) => {
    const [displayImage, setDisplayImage] = useState(null);
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [label, setLabel] = useState(null);

    const run = (img) => {
        setAnimate(false);
        setDisplayImage(img);
        setIsLoading(true); 
        toDataURL(img)
        .then(dataUrl =>   {
            postRequest(dataUrl, model.demo.api, setResult);
        })
    };

    useEffect(() => {
        const changer = () => {
            let data = result.data[0];
            setLabel(data);
            setIsLoading(false);
            setTimeout(() => setAnimate(true), 100);
        };
        result && changer();
    }, [result]);

    return (
        <Col position="relative" width="100%" height="100%" align="center" justify="center">
            <InputBar run={run} displayImage={displayImage} open={open} setOpen={setOpen} darkMode={darkMode} />

            <Row align="center" justify="center" width="100%" height="100%" padding={`padding-left: ${open ? '20%' : 0}`}>
        
                <Col flex={3} width="100%" height="100%" align="center" justify="center">
                    {displayImage ? isLoading ? <Loading /> : <Image width="100%" height="100%" of="cover" style={{opacity: isLoading ? 0.3 : 1, transition: 'all 300ms'}} src={displayImage} /> : <InputAnyImage />}
                </Col>

                {isLoading && <Flex position="absolute" style={{right: 10, top: 10}} zIndex={1000}>
                    <Timer defaultSec={3} />
                </Flex>}
                <Col flex={1} height="100%">
                    {label && !isLoading &&
                        <Col padding="padding: 15px;" height="100%" bg={bgStyler(darkMode)}>
                            <Text className="light" size="14" margin="margin-bottom: 20px;" style={{alignSelf: "center"}}>{label.label}</Text>
                            {label.confidences.map((item, index) => <Row align="center" margin="margin: 5px 0px;" key={index}>
                                <Col width="100%">
                                    <Row justify="space-between">
                                        <Text className="light" weight="500" size="12.8" margin="margin-right: 20px;">{item.label}</Text>
                                        <Text size="12.8" style={{opacity: 0.7}}>({(item.confidence * 100).toFixed(2)}%)</Text>
                                    </Row>
                                    <Flex margin="margin-top: 5px;" style={{width: animate ? `${100 * item.confidence}%` : 0, transition: 'all 300ms'}} height="1px" bg={extremehueBlue} />
                                </Col>
                            </Row>)}
                        </Col>
                    }
                </Col>
            </Row>

        </Col>
    )
};

export default Classifier;