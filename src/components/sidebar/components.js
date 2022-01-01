import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image, Input} from '../../components/common/base';
import gan from '../../imgs/gan.png';
import Button from '../../components/buttons/button';
import {bgStyler, hueStyler, btnStyler, blueColor, redColor, purLowColor, purColor, blueLowColor} from '../../styles';
import {RightIcon, BenchmarkIcon, SearchIcon, CloseIcon} from '../../icons/utilities';
import styled from 'styled-components';
import { Height } from '../../hooks/getWindow';
import { ThemeEvent, SideBarEvent } from '../../contexts/GlobalContext';

const Box = styled(Col)`
    transition: background-color .3s,color .3s,box-shadow .3s;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
      }
      
`;
export const Model = ({darkMode}) => {
    return (
        <Box margin="margin: 10px 0px;" padding="padding: 15px" style={{flexDirection: 'row', height: 180}} bg={bgStyler(darkMode)} br="20px;">
            <Col>
                <Row align="center">
                    <Flex flex={1} style={{maxHeight: 100, maxWidth: 100, overflow: 'hidden'}} br="10px" align="center" justify="center">
                        <Image src={gan} style={{height: '100%', width: '100%'}} of="cover" />
                    </Flex>
                    <Flex flex={6} margin="margin-left: 10px;">
                        <Text className="bold" size="14">
                            JoJoGAN: One Shot Face Stylization
                        </Text>
                    </Flex>
                </Row>
                <Text style={{opacity: 0.85}} size="12.8" className="light" weight="500" margin="margin: 10px 0px;">
                    mchong6/JoJoGAN •  • arXiv 2021
                </Text>
                <Text margin="margin-bottom: 5px;" size="12.8" style={{height: 50, overflow: 'hidden'}}>
                    While there have been recent advances in few-shot image stylization, these methods
                    fail to capture stylistic details that are obvious to humans. Details such as the shape
                    of the eyes, the boldness of the lines, are especially difficult for a model to learn,
                    especially so under a limited data setting. In this work, we aim to perform oneshot image stylization that gets the details right. Given a reference style image,
                    we approximate paired real data using GAN inversion and finetune a pretrained
                    StyleGAN using that approximate paired data. We then encourage the StyleGAN
                    to generalize so that the learned style can be applied to all other images.                    
                </Text>
                <Row margin="margin: 5px 0px;">
                    <Text>GAN Inversion</Text>
                    <Text>Image Stylization</Text>
                </Row>
            </Col>
        </Box>
    )
}

const sideBarHeight = Height - 80;

export const SideBar = ({}) => {
    const [model, setModel] = useState(true);
    const {darkMode} = ThemeEvent();
    const {sideBar, setSideBar} = SideBarEvent();
    return (
        <Box position="fixed" padding="padding: 20px;" style={{zIndex: 100, right: sideBar ? 0 : - 400, width: 400, height: sideBarHeight, transition: 'all 300ms ease', top: 0, marginTop: 80, overflowY: 'scroll'}} bg={darkMode ? "black" : "white"}>
            <Flex position="absolute" onClick={() => setSideBar(false)} style={{right: 20, top: 20}} to="cursor">
                <CloseIcon bg={bgStyler(darkMode)} stroke={"white"} width={23} height={23} />
            </Flex>
            <Col>
                <Row align="center" justify="space-between" margin="margin-right: 40px;">
                    <Text to="cursor" size="20" className="bold" margin="margin-bottom: 10px;">{model == true ? "My Models" : "My Datasets"}</Text>
                    <Text to="cursor" onClick={() => setModel(!model)} size="20" className="bold" size="12.8" color="rgb(100, 100, 100)" margin="margin-bottom: 10px;">{model == true ? "My Datasets" : "My Models"}</Text>
                </Row>
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Flex justify="center"><Text>More</Text></Flex>
            </Col>
            <Col margin="margin-top: 20px;">
                <Text size="20" className="bold" margin="margin-bottom: 10px;">Saved</Text>
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Col>
        </Box>
    )
}