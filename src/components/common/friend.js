import React from 'react';
import {Flex, Col ,Row, Text, Image, CirclePic} from './base';
import FollowButton from '../buttons/folllowButton';
import me from '../../imgs/me.jpeg';

export const Friend = ({}) => {
    return (
        <Row justify="space-between" padding="padding: 10px">
            <Col flex={3}>
                <Row align="center" margin="margin-bottom: 7px;" justify="space-between">
                    <Row align="center">
                        <CirclePic size={30} of="cover" image={me}/>
                        <Text size="12.8" margin="margin-left: 10px;" weight="600" style={{overflow: 'hidden', height: 20}}>
                            Su Hyung Choi
                        </Text>
                    </Row>
                    <FollowButton />
                </Row>
                <Text weight="400" size="12" style={{overflow: 'hidden', height: 46.8}}>
                    Undergradaute Researcher @ Korea University, CVLAB Undergradaute Researcher @ Korea University, CVLAB Undergradaute Researcher @ Korea University, CVLAB
                </Text>
            </Col>
        </Row>
    )
};

export default Friend;