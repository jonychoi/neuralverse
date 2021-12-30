import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../components/common/base';

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