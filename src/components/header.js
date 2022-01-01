import React, {useState, useEffect} from 'react';
import {Flex, Row, Image, Text, CirclePic, Col} from '../components/common/base';
import {ModelIcon, DatasetIcon, TrendIcon, NftIcon, NotiIcon, DesignIcon} from '../icons/headericons';
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
        <Row position="fixed" align="center" justify="space-between" zIndex={1000} bg={darkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} style={{width: '100vw', height:  80, top: 0, backdropFilter: 'blur(2px)'}}>
            <Flex flex={2}>
                <a href="/" onClick={() => setRoute(0)}>
                    <Row to="cursor" align="center" padding="padding: 30px;">
                        <Image width="43px;" src={logo} />
                        <Text margin="margin-left: 15px;" className="bold" size="18">NEURALVERSE</Text>
                    </Row>
                </a>
            </Flex> 
            <Row align="center" justify="space-between" flex={3.8} height="100%">
                <a onClick={() => setRoute(1)}>
                    <Row align="center" hover={hoverTrend} onMouseOver={() => setHoverTrend(true)} onMouseLeave={() => setHoverTrend(false)} >
                        <TrendIcon width={22} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">TRENDS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(2)}>
                    <Row align="center" hover={hoverModel} onMouseOver={() => setHoverModel(true)} onMouseLeave={() => setHoverModel(false)} >
                        <ModelIcon width={19} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">MODELS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(3)}>
                    <Row align="center" hover={hoverDataset} onMouseOver={() => setHoverDataset(true)} onMouseLeave={() => setHoverDataset(false)}>
                        <DatasetIcon width={22} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">DATASETS</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(4)}>
                    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
                        <DesignIcon width={33} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">DESIGN</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(4)}>
                    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
                        <Image src={logo} width={33} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 12.8px;">
                            <Text className="light" size="12.8">NEURAL OPS</Text>
                        </Flex>
                    </Row>
                </a>
            </Row>
            {!loggedIn ? 
                (<Row align="center" justify="flex-end" flex={1.9}>
                    <a onClick={() => setRoute(5)}>
                        <Flex to="cursor" width="90px" height="30px" justify="center" align="center" style={{background: 'linear-gradient(#25A2F9, #1C8BD8)'}} br="30px">
                            <Text className="light" size="12">LOGIN</Text>
                        </Flex>
                    </a>
                    <a onClick={() => setRoute(6)} style={{marginLeft: 30}}>
                        <Flex to="cursor" width="90px" height="30px" justify="center" align="center" br="30px" bg="black" style={{background: 'linear-gradient(#ED2166, #D84476)'}}>
                            <Text className="light" size="12">SIGN UP</Text>
                        </Flex>
                    </a>
                    <Flex>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Flex>
                </Row>) :
                (<Row align="center" justify="flex-end" flex={1.9}>
                    <a onClick={() => setRoute(7)}>
                        <Row align="center" to="cursor">
                            <CirclePic margin={15} size={32} image={me} />
                            <Text className="light" size="12.8">JONATHAN</Text>
                        </Row>
                    </a>
                    <Flex>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Flex>
                </Row>)
            }
        </Row>
    )
};

{/* <a onClick={() => setRoute(4)} style={{marginLeft: 30}}>
    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
        <NftIcon width={22} />
        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
            <Text className="light" size="12.8">NFTS</Text>
        </Flex>
    </Row>
</a> */}

export default Header;