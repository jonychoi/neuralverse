import React from 'react';
import {Flex, Col, Row, Text, Image, CirclePic, Box} from '../../../components/common/base';
import me from '../../../imgs/me.jpeg';
import bg from '../../../imgs/background.jpeg';
import Friend from '../../../components/common/friend';
import {bgStyler} from '../../../styles';
import users from '../../../data/users';

export const ProfileBox = ({darkMode}) => {
    return (
        <Box width="280px" margin="margin-bottom: 20px;" position="relative" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <a href={'/' + 'jonychoi'}>
                <Col>
                    <Flex>
                        <Image width="100%" of="cover" height="100px" src={bg} />
                    </Flex>
                    <Flex style={{alignSelf: "center", top: 50}} align="center" justify="center" position="absolute">
                        <CirclePic image={me} size={80} />
                    </Flex>
                </Col>
                <Col margin="margin-top: 35px;" padding="padding: 15px">
                    <Flex style={{alignSelf: "center"}} margin="margin-bottom: 10px;">
                        <Text className="bold" weight="700" size="14" margin="margin-bottom: 3px;">Su Hyung Choi</Text>
                    </Flex>
                    <Flex>
                        <Text size="13" weight="400">Undergraduate student researching in Artificial Intelligence, Computer Vision</Text>
                    </Flex>
                </Col>
            </a>
            <Col padding="padding: 5px 15px;padding-bottom: 20px;" >
                <Row align="center" justify="space-between">
                    <Col>
                        <Row>
                            <Text size="10.8" weight="500" className="light" margin="margin-right: 5px">12</Text>
                            <Text size="10.8" weight="500" className="light">MODELS</Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Text size="10.8" weight="500" className="light" margin="margin-right: 5px">12</Text>
                            <Text size="10.8" weight="500" className="light">BADGES</Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Text size="10.8" weight="500" className="light" margin="margin-right: 5px">12</Text>
                            <Text size="10.8" weight="500" className="light">NFTS</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Box>
    )
}

export const RecommendFriends = ({darkMode}) => {
    return (
        <Box width="280px" padding="padding: 5px;" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="light" size="14" weight="600" margin="margin: 10px; margin-top: 5px;">Recommend Friends</Text>
            <Col>
                {users.slice(1, 8).map(item => <Friend key={item.name} user={item} />)}
            </Col>
            <Text className="light" weight="600" margin="margin: 10px;" size="12.8">View all Recommendations</Text>
        </Box>
    )
}

export const Lefts = ({darkMode}) => {
    return (
        <Col width="280px">
            <Col>
                <ProfileBox darkMode={darkMode} />
                <RecommendFriends darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export default Lefts;