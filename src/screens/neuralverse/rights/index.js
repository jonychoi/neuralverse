import React, {useState, useEffect} from 'react';
import useInput from '../../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input, Box} from '../../../components/common/base';
import { SearchIcon } from '../../../icons/utilities';
import {bgStyler, blueLowColor, extremehueBlue} from '../../../styles';
import styled from 'styled-components';

export const Search = ({darkMode}) => {
    return (
        <Row align="center" position="relative" width="100%">
            <Input color={darkMode ? "white" : "black"} width="100%" padding="padding: 10px 0px; padding-right: 20px;" className="light" weight="400" margin="margin: 5px 0px;" size="14" bg="rgba(0,0,0,0)" placeholder="Search" style={{border: 0, borderBottomWidth: 1, borderBottomColor:"rgb(100, 100, 100)", borderBottomStyle: "solid"}} />
            <Flex position="absolute" style={{right: 0}}>
                <SearchIcon stroke={"rgb(100, 100, 100)"} width={18} height={18} />
            </Flex>
        </Row>
    )
}

const data = [
    "StyleGAN3",
    "VRT",
    "moolib",
    "Objectron",
    "A ConvNet for the 2020s",
    "Learning Super-Features for Image Retrieval",
    "Instant Neural Graphics Primitives",
]

const Hashtag = styled(Flex)`
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 15px;
    padding-bottom: 7px;
    border-radius: 20px;
    background-color: ${props => props.darkMode ? "rgb(18, 18, 18)" : "rgb(255, 255, 255)"}
`;

export const Trendings = ({darkMode}) => {
    return (
        <Box width="280px" padding="padding: 15px;" margin="margin-bottom: 10px;" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="bold" size="15">Trendings</Text>
            <Search darkMode={darkMode} />
            <Flex style={{display: 'block'}} margin="margin-top: 15px;">
                {data.map(item => <Hashtag shadow={true} darkMode={darkMode}>
                    <Text size="13" className="light" weight="500"># {item}</Text>
                </Hashtag>)}
            </Flex>
            <Text className="light" weight="600" margin="margin: 10px 0px;" size="12.8">View all trendings</Text>
        </Box>
    )
}

export const Trendingsa = ({darkMode}) => {
    return (
        <Box width="280px" padding="padding: 15px;" height="600px" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="bold" size="15" margin="margin-bottom: 5px;">ToDos Trendings</Text>
            <Col>
                <Text color="rgb(150, 150, 150)">follow btn color change</Text>
                <Text color="rgb(150, 150, 150)">Hashtag color</Text>
                <Text color="rgb(150, 150, 150)">To Do</Text>
                <Text color="rgb(150, 150, 150)">Done minor things first and do gradually</Text>
                <Text color="rgb(150, 150, 150)">- Premium user have neural logo right name with circle</Text>
                <Text color="rgb(150, 150, 150)">- Trendings (Expand when click bottom)</Text>
                <Text color="rgb(150, 150, 150)">- Model section and dataset section</Text>
                <Text color="rgb(150, 150, 150)">- Paper & Code & Studio</Text>
                <Text color="rgb(150, 150, 150)">- Datasets</Text>
                <Text color="rgb(150, 150, 150)">- get user papers from google scholar (paper click, get specific data)</Text>
                <Text color="rgb(150, 150, 150)">- hashtags inside paragraph</Text>
                <Text>- my saved papers</Text>
                <Text>- Paper I read</Text>
                <Text>- Paper I'm going to read</Text>
                <Text>- Team workspace - creating models, papers, read papers</Text>
                <Text>- Team members' saved papers</Text>
                <Text>Add comparision between models ex) resnet의 각 분포 convnet의 각 분포</Text>
                <Text>Model save btn</Text>
            </Col>
            <Text className="light" margin="margin: 10px 0px;" size="12.8">View all Recommendations</Text>
        </Box>
    )
}


export const Rights = ({darkMode}) => {
    return (
        <Col width="280px">
            <Col>
                <Trendings darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export default Rights;