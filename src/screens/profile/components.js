import React, {useState, useEffect} from 'react';
import {Col, Row, Flex, Text, Image, CirclePic} from '../../components/common/base';

export const MyModels = ({}) => {
    return (
        <Col width="300px" flex={1}>
            <Col>
                <Text className="bold">My Models</Text>
            </Col>
            <Col>
                <Text className="bold">Saved Models</Text>
            </Col>
        </Col>
    )
}

export const ProfileTop = ({user}) => {
    return (
        <Col>
            <Flex>
                <Image src={user.bg} />
            </Flex>
            <Row>
                <CirclePic image={user.avatar} size={80} />
                <Col>
                    <Text>{user.name}</Text>
                </Col>
            </Row>
        </Col>
    )
}