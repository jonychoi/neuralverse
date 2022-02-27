import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import {blueColor, redColor} from '../../styles';
import logo from '../../imgs/logo.png';
import {CodeIcon} from '../../icons/utilities';
import {SpaceIcon, VerseIcon, DesignIcon} from '../../icons/headericons';

export const Index = ({route, setRoute}) => {
    return (
        <Col align="center" justify="center" style={{height: '70vh'}} padding="padding: 15%">
            <Text className="bold" size="30">THE MOST SOPHISCATED END-TO-END DEEP-LEARNING OPS</Text>
            <Row align="center" justify="space-between" flex={1}>
                <a onClick={() => setRoute(1)}>
                    <Col padding="padding: 20px" width="300px" height="90%" br="20px" align="center">
                        <Row align="center">
                            <VerseIcon width={22} />
                            <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                                <Text className="light" size="12.8" weight="700">NEURAL VERSE</Text>
                            </Flex>
                        </Row>
                    </Col>
                </a>
                <a onClick={() => setRoute(3)}>
                    <Col padding="padding: 20px" width="300px" height="90%" br="20px" align="center">
                        <Row align="center">
                            <SpaceIcon width={22} />
                            <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                                <Text className="light" size="12.8" weight="700">NEURAL SPACE</Text>
                            </Flex>
                        </Row>
                    </Col>
                </a>
                <a onClick={() => setRoute(4)}>
                    <Col padding="padding: 20px" width="300px" height="90%" br="20px" align="center">
                        <Row align="center">
                            <DesignIcon width={30} height={30} />
                            <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                                <Text className="light" size="12.8" weight="700">NEURAL STUDIO</Text>
                            </Flex>
                        </Row>
                    </Col>
                </a>
                <a onClick={() => setRoute(5)}>
                    <Col padding="padding: 20px" width="300px" height="90%" br="20px" align="center">
                        <Row align="center">
                            <Image src={logo} width={30} />
                            <Flex to="cursor" padding="padding: 10px 15px 10px 12.8px;">
                                <Text className="light" size="12.8" weight="700">NEURAL OPS</Text>
                            </Flex>
                        </Row>
                    </Col>
                </a>
                <a onClick={() => setRoute(5)}>
                    <Col padding="padding: 20px" width="300px" height="90%" br="20px" align="center">
                        <Row align="center">
                            <CodeIcon stroke1={redColor} stroke2={blueColor} stroke3={blueColor} height={15} width={25} />
                            <Flex to="cursor" padding="padding: 10px 15px 10px 12.8px;">
                                <Text className="light" size="12.8" weight="700">NEURAL RESEARCH</Text>
                            </Flex>
                        </Row>
                    </Col>
                </a>
                </Row>
        </Col>
    )
};

export default Index;