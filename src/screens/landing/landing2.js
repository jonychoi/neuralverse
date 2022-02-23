import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import { VerseIcon } from '../../icons/headericons';

export const Index = ({}) => {
    return (
        <Col align="center" justify="center" style={{height: '120vh'}} position="relative">
            <Row align="center" position="absolute" style={{right: '5%', top: '5%'}}>
                <VerseIcon width={30} height={30} />
                <Text className="bold" size="18" margin="margin-left: 15px;">NEURAL VERSE</Text>
            </Row>
            <Row>
                <Col flex={1} align="center" justify="center">
                    <Text className="bold" size="30">Share More</Text>
                    <Text className="bold" size="30">Grow Fast</Text>
                </Col>
                <Col flex={1} align="center" justify="center">
                    <Text>Sharing your idea helps growing ideas</Text>
                </Col>
            </Row>
            <Row align="center" justify="center">
                <Col flex={1} align="center" justify="center">
                    <Text className="bold" size="30">Share More</Text>
                    <Text className="bold" size="30">Grow Fast</Text>
                </Col>
                <Col flex={1} align="center" justify="center">
                    <Text>Sharing your idea helps growing ideas</Text>
                </Col>
            </Row>
        </Col>
    )
};

export default Index;