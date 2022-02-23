import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import { DesignIcon, StudioLight } from '../../icons/headericons';

export const Index = ({}) => {
    return (
        <Col align="center" justify="center" style={{height: '70vh'}} position="relative">
            <Row align="center" position="absolute" style={{right: '5%', top: '5%'}}>
                <DesignIcon width={50} height={50} />
                <Text className="bold" size="18" margin="margin-left: 15px;">NEURAL STUDIO</Text>
            </Row>
            <Text className="bold" size="30">GENERATE NFT OF YOUR OWN MODEL</Text>
        </Col>
    )
};

export default Index;