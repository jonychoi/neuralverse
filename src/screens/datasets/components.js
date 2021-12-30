import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image, Input} from '../../components/common/base';
import gan from '../../imgs/gan.png';
import {bgStyler, hueStyler, btnStyler} from '../../styles';
import {RightIcon, BenchmarkIcon, SearchIcon} from '../../icons/utilities';
import styled from 'styled-components';

const Box = styled(Col)`
    transition: background-color .25s,color .25s,box-shadow .25s;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
`;

export const SearchModel = ({darkMode}) => {
    return (
        <Row flex={1.5} margin="margin-bottom: 10px;" to="cursor" justify="space-between" align="center" position="relative">
            <Input className="light" placeholderColor={bgStyler(!darkMode)} placeholder="Search" color={bgStyler(!darkMode)} weight="500" bg="rgba(0,0,0,0)" style={{width: '100%', borderWidth: 0, borderBottomWidth: 0.8, letterSpacing: 0.5, borderColor: bgStyler(!darkMode)}} padding="padding: 10px 2px; padding-right: 15px;" />
            <Flex position="absolute" style={{right: 2, opacity: 0.75}} align="center" justify="center" to="cursor" width="25px" height="25px">
                <SearchIcon stroke={bgStyler(!darkMode)} width={18} height={18} />
            </Flex>
        </Row>
    )
}

export const Model = ({modelVisual, setModelVisual, darkMode}) => {
    return (
        <Box margin="margin: 30px 0px;" padding="padding: 25px" style={{flexDirection: 'row', flex: 1, height: 220}} bg={bgStyler(darkMode)} br="20px;">
            <Flex flex={1} style={{minHeight: 150, minHeight: 150}} align="center" jsutify="center">
                <Image src={gan} style={{height: '100%', width: '100%'}} of="cover" />
            </Flex>
            <Row flex={4} align="center" margin="margin-left: 25px;">
                <Col>
                    <Text className="bold" size="17">
                        JoJoGAN: One Shot Face Stylization
                    </Text>
                    <Text style={{opacity: 0.85}} className="light" weight="500" margin="margin: 10px 0px;">
                        mchong6/JoJoGAN •  • arXiv 2021
                    </Text>
                    <Text margin="margin: 10px 0px;" style={{height: 80, overflow: 'hidden'}}>
                        While there have been recent advances in few-shot image stylization, these methods
                        fail to capture stylistic details that are obvious to humans. Details such as the shape
                        of the eyes, the boldness of the lines, are especially difficult for a model to learn,
                        especially so under a limited data setting. In this work, we aim to perform oneshot image stylization that gets the details right. Given a reference style image,
                        we approximate paired real data using GAN inversion and finetune a pretrained
                        StyleGAN using that approximate paired data. We then encourage the StyleGAN
                        to generalize so that the learned style can be applied to all other images.                    
                    </Text>
                    <Row margin="margin: 10px 0px;">
                        <Text>GAN Inversion</Text>
                        <Text>Image Stylization</Text>
                    </Row>
                </Col>
                <Col flex={1} margin="margin-left: 20px;">
                    <Flex to="cursor" align="center" justify="center" width="150px" height="30px" br="20px" bg={hueStyler(darkMode)} margin="margin: 10px 0px;">
                        <Text color={btnStyler(darkMode)} className="bold" size="12.8">Paper</Text>
                    </Flex>
                    <Flex to="cursor" align="center" justify="center" width="150px" height="30px" br="20px" bg={hueStyler(darkMode)} margin="margin: 10px 0px;">
                        <Text color={btnStyler(darkMode)} className="bold" size="12.8">Code</Text>
                    </Flex>
                    <Flex to="cursor" onClick={() => setModelVisual(!modelVisual)} align="center" justify="center" width="150px" height="30px" br="20px" bg={hueStyler(darkMode)} margin="margin: 10px 0px;">
                        <Text color={btnStyler(darkMode)} className="bold" size="12.8">Customize Model</Text>
                    </Flex>
                </Col>
            </Row>
        </Box>
    )
}

export const Models = ({modelVisual, setModelVisual, darkMode, title}) => {
    return (
        <Col>
            <Text size="22" className="bold" weight="600">TRENDING MODELS</Text>
            <Col>
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
                <Model modelVisual={modelVisual} setModelVisual={setModelVisual} darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export const Tasks = ({darkMode, title, margin = 25}) => {
    return (
        <Box align="center" padding="padding: 10px;" justify="center" position="relative" to="cursor" br="20px" bg={bgStyler(darkMode)} flex={1} height="120px;" style={{overflow: 'hidden', marginRight: margin}}>
            <Text style={{alignSelf: "center", textAlign: "center"}} margin="margin-bottom: 10px;" className="light" weight="600" size="14">{title}</Text>
            <Row align="center">
                <BenchmarkIcon height={12} width={12} stroke={hueStyler(darkMode)} />
                <Text size="12" margin="margin-left: 10px;">204 Benchmarks</Text>
            </Row>
            <Row align="center">
                <Text size="12">2367 papers with code</Text>
            </Row>
        </Box>
    )
}

export const TaskMenu = ({darkMode}) => {
    return (
        <Col margin="margin-top: 30px;">
            <Row align="center">
                <Text size="22" className="bold" weight="600" margin="margin-right: 15px;">COMPUTER VISION</Text>
                <Flex width="10px" height="15px" position="relative">
                    <Flex position="absolute" style={{transition: 'all 500ms', opacity: !darkMode ? 1 : 0}}>
                        <RightIcon width={10} height={15} stroke="black" />
                    </Flex>
                    <Flex position="absolute" style={{transition: 'all 500ms', opacity: darkMode ? 1 : 0}}>
                        <RightIcon width={10} height={15} stroke="white" />
                    </Flex>
                </Flex>
                <Text size="17" className="bold" weight="600" margin="margin-left: 15px;">All</Text>
            </Row>
            <Row margin="margin: 20px 0px;">
                <Tasks title="Semantic Segmentation" darkMode={darkMode} />
                <Tasks title="Object Detection" darkMode={darkMode} />
                <Tasks title="Image Classification" darkMode={darkMode} />
                <Tasks title="Domain Adaptation" darkMode={darkMode} />
                <Tasks title="Image Generation" darkMode={darkMode} margin={0} />
            </Row>
        </Col>
    )
}

export const Datasets = ({setModelVisual, modelVisual, darkMode}) => {
    return (
        <Col>
            <Row align="flex-end">
                <Col flex={3}>
                    <Text size="30" className="bold">DATASETS</Text>
                    <Text margin="margin: 10px 0px;" className="light" weight="500" style={{opacity: 0.75}}>5,303 machine learning datasets</Text>
                </Col>
                <SearchModel darkMode={darkMode} />
            </Row>
            <TaskMenu darkMode={darkMode} />
            <Col margin="margin: 25px 0px;">
                <Models setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export const Main = ({setModelVisual, modelVisual, darkMode}) => {
    return (
        <Flex style={{paddingLeft: '15%', paddingRight: '15%', paddingTop: 70, opacity: modelVisual ? 0.5 : 1, transition: 'all 300ms'}}>
            <Datasets setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
        </Flex>
    )
}
