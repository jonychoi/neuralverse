import React, {useState, useEffect} from 'react';
import {Flex, Row, Image, Text, CirclePic, Col} from '../components/common/base';
import {ModelIcon, CubeIcon, TrendIcon, NftIcon, NotiIcon, DesignIcon} from '../icons/headericons';
import ThemeToggle from './buttons/themeButton';
import {ThemeEvent} from '../contexts/GlobalContext';
import logo from '../imgs/logo.png';
import { hueStyler } from '../styles';

import me from '../imgs/me.jpeg';

export const Header = ({loggedIn = true, setRoute}) => {
    const [hoverModel, setHoverModel] = useState(false);
    const [hoverDataset, setHoverDataset] = useState(false);
    const [hoverTrend, setHoverTrend] = useState(false);
    const [hoverNft, setHoverNft] = useState(false);
    const {darkMode, setDarkMode} = ThemeEvent();
    return (
        <Row position="fixed" align="center" justify="space-between" zIndex={1000} bg={darkMode ? "rgb(20, 20, 20)" : "white"} style={{width: '100vw', height:  80, top: 0}}>
            <Flex flex={2}>
                <a href="/" onClick={() => setRoute(0)}>
                    <Row to="cursor" align="center" padding="padding: 30px;">
                        <Image width="60px;" src={logo} />
                        <Text margin="margin-left: 15px;" className="light" weight="600" size="25">NEURALVERSE</Text>
                    </Row>
                </a>
            </Flex>
            <Row align="center" justify="center" flex={3.8}>
                <a onClick={() => setRoute(1)}>
                    <Row align="center" hover={hoverTrend} onMouseOver={() => setHoverTrend(true)} onMouseLeave={() => setHoverTrend(false)} >
                        <TrendIcon width={22} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">TRENDS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(2)}  style={{marginLeft: 35}}>
                    <Row align="center" hover={hoverModel} onMouseOver={() => setHoverModel(true)} onMouseLeave={() => setHoverModel(false)} >
                        <ModelIcon width={19} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">MODELS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(3)} style={{marginLeft: 30}}>
                    <Row align="center" hover={hoverDataset} onMouseOver={() => setHoverDataset(true)} onMouseLeave={() => setHoverDataset(false)}>
                        <CubeIcon width={20} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">DATASETS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(4)} style={{marginLeft: 30}}>
                    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
                        <NftIcon width={22} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">NFTS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(4)} style={{marginLeft: 30}}>
                    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
                        <DesignIcon width={30} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">DESIGN</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(4)} style={{marginLeft: 30}}>
                    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
                        <Image src={logo} width={30} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 12.8px;">
                            <Text className="light" size="12.8">NEURAL OPS</Text>
                        </Flex>
                    </Row>
                </a>
            </Row>
            {!loggedIn ? 
                (<Row align="center" justify="flex-end" flex={2}>
                    <a onClick={() => setRoute(5)}>
                        <Flex to="cursor" padding="padding: 10px 15px 8px 15px;">
                            <Text className="light" size="12.8">LOGIN</Text>
                        </Flex>
                    </a>
                    <a onClick={() => setRoute(6)} style={{marginLeft: 30, marginRight: 30}}>
                        <Flex to="cursor" br="30px" bg="black" padding="padding: 10px 15px 8px 15px;">
                            <Text className="light" size="12.8" color="white">SIGN UP</Text>
                        </Flex>
                    </a>
                </Row>) :
                (<Row align="center" justify="flex-end" flex={1.8}>
                    <Flex style={{marginLeft: 100}}>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Flex>
                    <a onClick={() => setRoute(7)} style={{marginRight: 40}}>
                        <Row align="center" to="cursor">
                            <CirclePic margin={15} size={32} image={me} />
                            <Text className="light" size="12.8">JONATHAN</Text>
                        </Row>
                    </a>
                </Row>)
            }
        </Row>
    )
};

export default Header;