import React, {useEffect, useState} from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../../components/common/base';
import {PaperIcon, CodeIcon, DemoIcon} from '../../../icons/utilities';
import {StudioLight} from '../../../icons/headericons';
import {bgStyler, hueBlue} from '../../../styles';
import styled from 'styled-components';


const DatasetLink = styled.a`
    :hover {
        cursor: pointer;
    }
`;

export const Dataset = ({darkMode, arg}) => {
    return (
        <DatasetLink>
            <Box padding="padding: 0px 12px; padding-bottom: 6px;" margin="margin-right: 10px; margin-bottom: 10px;" br="5px" style={{display: 'inline-block'}} bg={bgStyler(darkMode)}>
                <Text className="light" weight="500" size="11"># {arg}</Text>
            </Box>
        </DatasetLink>
    )
}

export const ModelBox = styled(Flex)`
    margin: 10px 12.8px;
    &:last-child {
        margin-right: 0px;
    };
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 31%;
    height: 190px;
    bottom: 0px;
    :hover {
        bottom: 5px;
    };
    transition: 300ms;
`;

export const ModelConfig = ({model, darkMode}) => {
    return (
        <Row justify="space-around" width="100%">
            <Row padding="padding: 3px" align="center">
                <Flex margin="margin-bottom: 2px;">
                    <PaperIcon stroke={hueBlue} height={15} width={15} />
                </Flex>
                <Text color="white" className="light" margin="margin-left: 10px;" size="11" weight="500">Paper</Text>
            </Row>
            <Row padding="padding: 3px" align="center">
                <CodeIcon stroke={hueBlue} height={18} width={18} />
                <Text color="white" className="light" margin="margin-left: 10px;" size="11" weight="500">Code</Text>
            </Row>
            <Row padding="padding: 3px" align="center">
                <StudioLight stroke1={hueBlue} stroke2={hueBlue} height={18} width={18} />
                <Text color="white" className="light" margin="margin-left: 10px;" size="11" weight="500">Studio</Text>
            </Row>
            {model.demo && <Row padding="padding: 3px" align="center">
                <DemoIcon stroke1={hueBlue} stroke2={hueBlue} height={18} width={18} />
                <Text color="white" className="light" margin="margin-left: 10px;" size="11" weight="500">Demo</Text>
            </Row>}
        </Row>
    )
}

export const Model = ({setModel, darkMode, content}) => {
    return (
        <ModelBox onClick={() => setModel(content)} shadow={true} bg={bgStyler(darkMode)} br="20px" style={{overflow: 'hidden'}}>
            <Col align="center" justify="center" width="100%" height="100%" position="absolute" zIndex={100} bg={darkMode ? "rgba(0,0,0,0.25)" : "rgba(100,100,100,0.15)"}>
                <Text color="white" title="light" size="20" weight="500" style={{width: '100%', textAlign: 'center'}} margin="margin-bottom: 5px;">
                    {content.title}
                </Text>
                <Text color="white" title="light" size="14" margin="margin-bottom: 5px;" weight="400" style={{width: '100%', textAlign: 'center'}}>
                    {content.subtitle}
                </Text>
            </Col>
            <Row width="100%" height="20%" position="absolute" zIndex={10} style={{bottom: 0}}>
                <ModelConfig model={content} darkMode={darkMode} />
            </Row>
            <Image src={content.img} of="cover" position="absolute" width="108%" height="108%" />
        </ModelBox>
    )
}

export default Model;