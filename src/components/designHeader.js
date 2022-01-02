import React from 'react';
import {Flex, Col, Row, Text, Image} from './common/base';
import {TrendIcon} from '../icons/headericons';

export const DesignHeader = ({route, headerShown}) => {
    return (
        <Row align="center" justify="space-between" flex={route == 4 ? headerShown ? 0 : 3.8 : 0} style={{opacity: route == 4 ? headerShown ? 0 : 1 : 1, transition: 'all 400ms ease', overflow: 'hidden'}}>
            <Row align="center" style={{minWidth: 300}}>
                <TrendIcon width={22} />
                <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                    <Text className="light" size="12.8">STARTING FROM BENCHMARKS</Text>
                </Flex>
            </Row>
            <Row align="center">
                <TrendIcon width={22} />
                <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                    <Text className="light" size="12.8">COMPONENTS</Text>
                </Flex>
            </Row>
            <Row align="center">
                <TrendIcon width={22} />
                <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                    <Text className="light" size="12.8">MY MODELS</Text>
                </Flex>
            </Row>
        </Row>
    )
};

export default DesignHeader;