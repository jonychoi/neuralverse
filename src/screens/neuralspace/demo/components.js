import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image, Box} from '../../../components/common/base';
import { bgStyler } from '../../../styles';
import { postRequest } from '../inference';
import city from './imgs/city.jpg';
import elephant from './imgs/elephants.jpg';
import zebra from './imgs/zebras.jpg';

const imgs = [
    city,
    elephant,
    zebra,
]

export const DragAndDrop = ({darkMode, img, api, setResult}) => {
    useEffect(() => {
        const run = () => {
            setResult(postRequest(img, api))
        }
        run();
    }, [img])
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
    opacity: ${(props) => props.img == props.item ? 1 : 0.7};
    :hover {
        opacity: 1
    };
    cursor: pointer;
`;

export const Examples = ({setImg, img, imgs}) => {
    return (
        <Col>
            {imgs.map((item) => <ImgWrap onClick={() => setImg(item)} img={img} item={item} br="20px" style={{overflow: 'hidden'}} width="100%" height="100px" margin="margin: 10px 0px;">
                <Image width="100%" height="100px" of="cover" src={item} />
            </ImgWrap>)}
        </Col>
    )
};

export const InputBar = ({api, setResult, open, img, setImg, setOpen, darkMode}) => {
    return (
        <Box width="20%" height="100%" padding="padding: 15px;" position="absolute" bg={bgStyler(darkMode)} style={{left: open ? 0 : '-25%', overflow: 'hidden', overflowY: 'scroll'}}>
            <DragAndDrop api={api} setResult={setResult} setImg={setImg} img={img} darkMode={darkMode} />
            <Examples setImg={setImg} img={img} imgs={imgs} />
        </Box>
    )
}

export const Processing = ({}) => {
    return (
        <Flex>

        </Flex>
    )
}
