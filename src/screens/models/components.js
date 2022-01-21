import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image, Input, Box} from '../../components/common/base';
import gan from '../../imgs/gan.png';
import Button from '../../components/buttons/button';
import {bgStyler, hueStyler, btnStyler, blueColor, redColor, purLowColor, purColor, blueLowColor} from '../../styles';
import {RightIcon, BenchmarkIcon, SearchIcon} from '../../icons/utilities';
import { VisualizerEvent } from '../../contexts/GlobalContext';

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

export const Model = ({darkMode}) => {
    const {visualizer, setVisualizer} = VisualizerEvent();
    return (
        <Box margin="margin: 30px 0px;" padding="padding: 25px" style={{flexDirection: 'row', flex: 1, height: 220}} bg={bgStyler(darkMode)} br="20px;">
            <Flex flex={1} style={{minHeight: 150, minWidth: 150}} align="center" jsutify="center">
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
                    <Button color={blueLowColor} hoverColor={blueColor} width="150px" height="30px" br="20px" margin="margin: 10px 0px;" size="12.8" text="Paper" />
                    <Button color={blueLowColor} hoverColor={blueColor} width="150px" height="30px" br="20px" margin="margin: 10px 0px;" size="12.8" text="Code" />
                    <Button color={purLowColor} func={setVisualizer} arg={!visualizer} hoverColor={purColor} width="150px" height="30px" br="20px" margin="margin: 10px 0px;" size="12.8" text="Customize Model" />
                    {/* <Flex to="cursor" align="center" justify="center"  bg={blueColor} >
                        <Text color={"white"} className="bold" size="12.8">Paper</Text>
                    </Flex>
                    <Flex to="cursor" align="center" justify="center" width="150px" height="30px" br="20px" bg={blueColor} margin="margin: 10px 0px;">
                        <Text color={"white"} className="bold" size="12.8">Code</Text>
                    </Flex>
                    <Flex to="cursor" onClick={() => setVisualizer(!visualizer)} align="center" justify="center" width="150px" height="30px" br="20px" bg={purColor} margin="margin: 10px 0px;">
                        <Text color={"white"} className="bold" size="12.8">Customize Model</Text>
                    </Flex> */}
                </Col>
            </Row>
        </Box>
    )
}

export const Models = ({darkMode, title}) => {
    return (
        <Col>
            <Text size="20" className="bold">TRENDINGS</Text>
            <Col>
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export const Tasks = ({darkMode, title, margin = 25}) => {
    return (
        <Box align="center" padding="padding: 10px;" justify="center" position="relative" to="cursor" br="20px" bg={bgStyler(darkMode)} flex={1} height="120px;" style={{overflow: 'hidden', marginRight: margin}}>
            <Text style={{alignSelf: "center", textAlign: "center"}} margin="margin-bottom: 10px;" className="light" weight="600" size="14">{title}</Text>
            <Row align="center">
                <BenchmarkIcon height={12} width={12} stroke={purColor} />
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

export const StateOfTheArt = ({darkMode}) => {
    return (
        <Col>
            <Row align="flex-end">
                <Col flex={3}>
                    <Text size="30" className="bold">STATE OF THE ART</Text>
                    <Text margin="margin: 10px 0px;" className="light" weight="500" style={{opacity: 0.75}}>2579 benchmarks • 944 tasks • 1694 datasets • 22385 papers with code</Text>
                </Col>
                <SearchModel darkMode={darkMode} />
            </Row>
            <TaskMenu darkMode={darkMode} />
            <Col margin="margin: 25px 0px;">
                <Models darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export const Main = ({visualizer, sideBar, darkMode}) => {
    return (
        <Flex style={{paddingLeft: '15%', paddingRight: sideBar || visualizer ? '50%' : '15%', paddingTop: 50, transition: 'all 300ms'}}>
            <StateOfTheArt darkMode={darkMode} />
        </Flex>
    )
}
