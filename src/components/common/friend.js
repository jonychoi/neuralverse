import React from 'react';
import {Flex, Col ,Row, Text, Image, CirclePic} from './base';
import FollowButton from '../buttons/folllowButton';

export const Friend = ({user}) => {
    return (
        <Col padding="padding: 5px 10px">
            <Row margin="margin-bottom: 7px;">
                <a href={'/'+user.userId} style={{marginTop: 3}}>
                    <CirclePic size={40} of="cover" image={user.avatar}/>
                </a>
                <Col margin="margin-left: 15px;" flex={1}>
                    <Row justify="space-between" align="center" margin="margin-bottom: 3px;">
                        <a href={'/'+user.userId} style={{marginBottom: 2.5}}>
                            <Text size="13" weight="600" style={{overflow: 'hidden'}}>
                                {user.name}
                            </Text>
                        </a>
                        <Flex margin="margin-top: 1px;">
                            <FollowButton scale={0.9} />
                        </Flex>
                    </Row>
                    <a href={'/'+user.userId} style={{lineHeight: 1}}>
                        <Text weight="400" size="11" style={{overflow: 'hidden', letterSpacing: 0.5, maxHeight: 47}}>
                            {user.briefIntroduction}
                        </Text>
                    </a>
                </Col>
            </Row>
        </Col>
    )
};

export default Friend;