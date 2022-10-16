import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image, Box} from '../../../../components/common/base';
import { bgStyler } from '../../../../styles';

import city from '../imgs/city.jpg';
import elephant from '../imgs/elephants.jpg';
import zebra from '../imgs/zebras.jpg';
import streetview from '../imgs/streetview.jpg'
import satelite from '../imgs/satelite.jpg';

export const DragAndDrop = ({darkMode, img, setImg}) => {
    return (
        <Flex margin="margin-bottom: 10px;" to="cursor">
            <form>
                <input accept="image/*" style={{display: "none"}} type="file" />
                <Flex br="20px" width="100%" height="100px;" align="center" justify="center" style={{border:`2px dashed ${darkMode ? "rgb(70, 70, 70)" : "rgb(224, 224, 224)"}`}}>
                    <Text size="12" color={darkMode ? "rgb(150, 150, 150)" : "rgb(124, 124, 124)"} style={{textAlign: 'center'}}>Drag image file here or click to browse from your device</Text>
                </Flex>
            </form>
        </Flex>
    )
};

const ImgWrap = styled(Flex)`
    opacity: ${(props) => props.img == props.item ? 1 : 0.7};
    :hover {
        opacity: 1
    };
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    height: 100px;
    margin: 10px 0px;
`;

const imgs = [
    city,
    elephant,
    satelite,
    zebra,
]

export const Examples = ({run, displayImage}) => {
    return (
        <Col>
            {imgs.map((item, index) => <ImgWrap onClick={() => run(item)} img={displayImage} item={item} key={index}>
                <Image width="100%" height="100px" of="cover" src={item} />
            </ImgWrap>)}
        </Col>
    )
};

export const InputBar = ({run, displayImage, open, setOpen, darkMode, type}) => {
    return (
        <Box width="20%" height="100%" padding="padding: 15px;" position="absolute" bg={bgStyler(darkMode)} style={{left: open ? 0 : '-25%', overflow: 'hidden', overflowY: 'scroll'}}>
            <DragAndDrop darkMode={darkMode} />
            <Examples displayImage={displayImage} run={run} />
        </Box>
    )
}