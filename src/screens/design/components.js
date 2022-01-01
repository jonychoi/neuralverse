import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image, Input} from '../../components/common/base';
import gan from '../../imgs/gan.png';
import Button from '../../components/buttons/button';
import {bgStyler, hueStyler, btnStyler, blueColor, redColor, purLowColor, purColor, blueLowColor} from '../../styles';
import {RightIcon, BenchmarkIcon, SearchIcon, CloseIcon} from '../../icons/utilities';
import styled from 'styled-components';
import Architect from './architect';

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

export const Models = ({modelVisual, setModelVisual, darkMode, title}) => {
    return (
        <Col>
            <Text size="22" className="bold" weight="600">TRENDING MODELS</Text>
            <Architect />
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

export const Design = ({setSideBar, sideBar, darkMode}) => {
    return (
        <Col>
            <Row align="flex-end">
                <Col flex={3}>
                    <Text size="30" className="bold">DESIGN YOUR SOTA</Text>
                    <Text margin="margin: 10px 0px;" className="light" weight="500" style={{opacity: 0.75}}>200 Blocks • 500 Methods • 1694 datasets</Text>
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

export const Main = ({setSideBar, sideBar, darkMode}) => {
    return (
        <Flex style={{paddingLeft: '15%', paddingRight: sideBar ? '30%' : '15%', paddingTop: 70, transition: 'all 300ms'}}>
            <Design setSideBar={setSideBar} sideBar={sideBar} darkMode={darkMode} />
        </Flex>
    )
}
