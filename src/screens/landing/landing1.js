import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import sample from '../../imgs/sample.jpg';

export const Index = ({}) => {
    return (
        <Col align="center" justify="center" style={{height: '70vh', marginTop: 80, overflow: 'hidden'}}>
            <Text zIndex={10} className="bold" color="white" size="40">BEYOND THE STATE OF THE ARTS</Text>
            <Text zIndex={10} margin="margin-top: 10px" className="bold" color="white" size="30">WE BELIEVE THE HUMAN COLLECTIVE INTELLIGENCE</Text>
            <Image position="absolute" zIndex={0} src={sample} style={{width: '100%', height: '100%'}} of="cover" />
        </Col>
    )
};

export default Index;