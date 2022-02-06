import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image, Box} from '../../../../components/common/base';
import { bgStyler } from '../../../../styles';

import mountain from '../imgs/mountain.jpeg';
import monc from '../imgs/monc.jpeg';

export const DragAndDrop = ({darkMode, img, setImg}) => {
    const colorer = darkMode ? "rgb(150, 150, 150)" : "rgb(124, 124, 124)";
    return (
        <Col margin="margin-bottom: 10px;" to="cursor">
            <form>
                <input accept="image/*" style={{display: "none"}} type="file" />
                <Col br="20px" width="100%" height="100px;" align="center" justify="center" style={{border:`2px dashed ${darkMode ? "rgb(70, 70, 70)" : "rgb(224, 224, 224)"}`}}>
                    <Text margin="margin-bottom: 2.5px;" color={colorer}>Content Image</Text>
                    <Text margin="margin-top: 2.5px;" size="12" color={colorer} style={{textAlign: 'center'}}>Drag image file here or click to browse from your device</Text>
                </Col>
            </form>
            <form>
                <input accept="image/*" style={{display: "none"}} type="file" />
                <Col br="20px" width="100%" height="100px;" align="center" margin="margin-top: 20px;" justify="center" style={{border:`2px dashed ${darkMode ? "rgb(70, 70, 70)" : "rgb(224, 224, 224)"}`}}>
                    <Text margin="margin-bottom: 2.5px;" color={colorer}>Style Image</Text>
                    <Text margin="margin-top: 2.5px;" size="12" color={colorer} style={{textAlign: 'center'}}>Drag image file here or click to browse from your device</Text>
                </Col>
            </form>
        </Col>
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
    [mountain, monc],
]

export const TransferExamples = ({run, displayImage}) => {
    return (
        <Col>
            {imgs.map((item, index) => <ImgWrap onClick={() => run(item)} item={item} img={displayImage} key={index}>
                <Image width="50%" height="100px" of="cover" src={item[0]} />
                <Image width="50%" height="100px" of="cover" src={item[1]} />
            </ImgWrap>
            )}
        </Col>
    )
};

export const InputBar = ({run, displayImage, open, setOpen, darkMode, type}) => {
    return (
        <Box width="20%" height="100%" padding="padding: 15px;" position="absolute" bg={bgStyler(darkMode)} style={{left: open ? 0 : '-25%', overflow: 'hidden', overflowY: 'scroll'}}>
            <DragAndDrop darkMode={darkMode} />
            <TransferExamples run={run} displayImage={displayImage} />
        </Box>
    )
}