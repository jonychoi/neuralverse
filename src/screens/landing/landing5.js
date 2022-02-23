import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import ReactPlayer from 'react-player';
import gd from '../../imgs/gd.mp4';
import logo from '../../imgs/logo.png';

export const Index = ({}) => {
    return (
        <Row align="center" justify="center" style={{height: '70vh'}} padding="padding: 10%" position="relative">
            <Row align="center" position="absolute" style={{left: '5%', top: '5%'}}>
                <Image src={logo} width={50} />
                <Text className="bold" size="18" margin="margin-left: 15px;">NEURAL OPS</Text>
            </Row>
            <Col flex={1}>
                <Text className="bold" size="30">TRAIN YOUR MODEL ON BATCH FLY</Text>
            </Col>
            <Col flex={1}>
                <Flex position="relative" width="100%" height="100%">
                    <Flex style={{position: 'absolute', width: 300, height: 30, right: 0}} bg="black"></Flex>
                    <ReactPlayer muted={true} playing={true} loop={true} width="100%" height="100%" style={{objectFit: 'cover'}} url={gd} />
                </Flex>
                <Text>3Brown1Eye</Text>
            </Col>
        </Row>
    )
};

export default Index;