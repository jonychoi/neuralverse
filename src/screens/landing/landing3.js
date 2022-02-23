import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import { SpaceIcon } from '../../icons/headericons';

export const Index = ({}) => {
    return (
        <Col align="center" justify="center" style={{height: '70vh'}} position="relative">
            <Row align="center" position="absolute" style={{left: '15%', top: '5%'}}>
                <SpaceIcon width={50} height={50} />
                <Text className="bold" size="18" margin="margin-left: 15px;">NEURAL SPACE</Text>
            </Row>
            <Text className="bold" size="30">CUSTOMIZE SOTAS TO YOUR OWN</Text>
            <Text className="bold" size="30">GENERATE YOUR MODEL IN INSTANCE</Text>
        </Col>
    )
};

export default Index;