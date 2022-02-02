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
        <Row justify="space-between" margin="margin-top: 10px;">
            <Row padding="padding: 3px" align="center">
                <Flex margin="margin-bottom: 2px;">
                    <PaperIcon stroke={hueBlue} height={12.8} width={12.8} />
                </Flex>
                <Text className="light" margin="margin-left: 10px;" size="10" weight="600">PAPER</Text>
            </Row>
            <Row padding="padding: 3px" align="center">
                <CodeIcon stroke={hueBlue} height={15} width={15} />
                <Text className="light" margin="margin-left: 10px;" size="10" weight="600">CODE</Text>
            </Row>
            <Row padding="padding: 3px" align="center">
                <StudioLight stroke1={hueBlue} stroke2={hueBlue} height={15} width={15} />
                <Text className="light" margin="margin-left: 10px;" size="10" weight="600">STUDIO</Text>
            </Row>
            {model.demo && <Row padding="padding: 3px" align="center">
                <DemoIcon stroke1={hueBlue} stroke2={hueBlue} height={15} width={15} />
                <Text className="light" margin="margin-left: 10px;" size="10" weight="600">DEMO</Text>
            </Row>}
        </Row>
    )
}

export const Model = ({setModel, darkMode, content}) => {
    return (
        <ModelBox onClick={() => setModel(content)} shadow={true} bg={bgStyler(darkMode)} position="relative" br="20px" style={{overflow: 'hidden'}}>
            <Col padding="padding: 0px 15px;" width="100%" height="50%" position="absolute" justify="center" zIndex={100} style={{bottom: -1, backdropFilter: 'blur(2px)'}} bg={darkMode ? "rgba(0,0,0,0.8)" : "rgba(255, 255, 255, 0.95)"}>
                <Text className="light" size="17" weight="700" margin="margin: 5px 0px;">
                    {content.title}
                </Text>
                <Text className="light" size="12.8" weight="600">
                    {content.subtitle}
                </Text>
                <ModelConfig model={content} darkMode={darkMode} />
            </Col>
            <Image src={content.img} of="cover" position="absolute" width="108%" height="108%" />
        </ModelBox>
    )
}

export default Model;