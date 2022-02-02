import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image, Box} from '../../../components/common/base';
import { bgStyler } from '../../../styles';
import city from './imgs/city.jpg';
import elephant from './imgs/elephants.jpg';
import zebra from './imgs/zebras.jpg';

const imgs = [
    city,
    elephant,
    zebra,
]

export const DragAndDrop = ({darkMode}) => {
    return (
        <Flex margin="margin-bottom: 10px;" to="cursor">
            <Flex br="20px" width="100%" height="100px;" style={{border:`2px dashed ${darkMode ? "rgb(70, 70, 70)" : "rgb(224, 224, 224)"}`}}>

            </Flex>
        </Flex>
    )
};

export const ImageResult = ({}) => {
    return (
        <Flex>
            
        </Flex>
    )
}

export const Softmax = ({}) => {
    return (
        <Col>
        
        </Col>
    )
};

const ImgWrap = styled(Flex)`
    opacity: 0.78;
    :hover {
        opacity: 1
    };
    cursor: pointer;
`;

export const Examples = ({imgs}) => {
    return (
        <Col>
            {imgs.map((item) => <ImgWrap br="20px" style={{overflow: 'hidden'}} width="100%" height="100px" margin="margin: 10px 0px;">
                <Image width="100%" height="100px" of="cover" src={item} />
            </ImgWrap>)}
        </Col>
    )
};

export const InputBar = ({open, setOpen, darkMode, component}) => {
    return (
        <Box width="20%" height="100%" padding="padding: 15px;" position="absolute" bg={bgStyler(darkMode)} style={{left: open ? 0 : '-25%', overflow: 'hidden', overflowY: 'scroll'}}>
            <DragAndDrop darkMode={darkMode} />
            <Examples imgs={imgs} />
        </Box>
    )
}

export const Processing = ({}) => {
    return (
        <Flex>

        </Flex>
    )
}
