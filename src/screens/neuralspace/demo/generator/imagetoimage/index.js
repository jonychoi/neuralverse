import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../../../components/common/base';
import { Loading, Timer, InputAnyImage } from '../../../../../components/common/loading';
import { postRequest } from '../../../inference';
import { InputBar } from './components';
import {toDataURL} from '../../utilities';
import { bgStyler, extremehueBlue } from '../../../../../styles';
import styled from 'styled-components';

const SelectBtn = styled(Flex)`
    opacity: 0.8;
    :hover {
        opacity: 1;
    };
    transition: all 300ms;
    cursor: pointer;
`;


export const ImagetoImage = ({model, open, setOpen, darkMode, type}) => {
    const [displayImage, setDisplayImage] = useState();
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    // if models exists
    const [modelSelect, setModelSelect] = useState(false);
    const [_model, set_Model] = useState(null);

    useEffect(() => {
        if (model.demo.models){
            set_Model(model.demo.models[0]);
        };
    }, [])

    const run = (img) => {     
        setIsLoading(true); 
        toDataURL(img)
        .then(dataUrl =>   {
            postRequest(dataUrl, model.demo.api, setResult, _model);
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
                    {displayImage ? !isLoading ? <Image width="100%" height="100%" of="cover" src={displayImage} /> : <Loading /> : isLoading ? <Loading /> : <InputAnyImage />}
                </Col>

                {isLoading && <Flex position="absolute" style={{right: 10, top: 10}} zIndex={1000}>
                    <Timer defaultSec={3} />
                </Flex>}
            </Row>
            {model.demo.models && !isLoading &&
            <Col position="absolute" shadow={true} 
                onClick={() => setModelSelect(!modelSelect)}
                bg={bgStyler(darkMode)}
                padding="padding: 0px 5px"
                style={{width: 'auto', height: modelSelect ? 45 * model.demo.models.length : 40, transition: 'all 300ms', right: 10, top: 10, overflow: 'hidden'}} 
                br="20px">
                <Text color={darkMode ? extremehueBlue : "black"} to="cursor" size="14" weight="600" padding="padding: 10px 15px;">Model Selected: {_model}</Text>
                {model.demo.models.map(item => 
                    <SelectBtn 
                        padding="padding: 10px 15px;"
                        to="cursor"
                        key={item} onClick={() => set_Model(item)}><Text size="14" color={darkMode ? extremehueBlue : "black"}>{item}</Text>
                    </SelectBtn>)}
            </Col>}
        </Col>
    )
};

export default ImagetoImage;