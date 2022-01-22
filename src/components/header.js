import React, {useState, useEffect} from 'react';
import {Flex, Row, Image, Text, CirclePic, Col} from '../components/common/base';
import {ModelIcon, DatasetIcon, TrendIcon, NftIcon, NotiIcon, DesignIcon, StudioLight} from '../icons/headericons';
import ThemeToggle from './buttons/themeButton';
import {ThemeEvent} from '../contexts/GlobalContext';
import logo from '../imgs/logo.png';
import DesignHeader from './designHeader';
import OpsHeader from './opsHeader';
import styled from 'styled-components';

import me from '../imgs/me.jpeg';

export const HeaderBox = styled(Row)`
    transition: background-color .3s,color .3s,box-shadow .3s ease;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
    }
`;

export const Header = ({loggedIn = true, setRoute, route}) => {
    const [hoverModel, setHoverModel] = useState(false);
    const [hoverDataset, setHoverDataset] = useState(false);
    const [hoverTrend, setHoverTrend] = useState(false);
    const [hoverNft, setHoverNft] = useState(false);
    const {darkMode, setDarkMode} = ThemeEvent();
    const [headerShown, setHeaderShown] = useState(false);
    return (
        <HeaderBox 
            position="fixed" align="center" justify="space-between" zIndex={1000} 
            bg={route == 0 ? darkMode ? "rgba(0,0,0,0)" : 'rgba(255, 255, 255, 0.9)' : darkMode ? "rgba(15,15,15,0.9)" : "rgba(255, 255, 255, 0.9)"} 
            style={{width: '100vw', height:  80, top: 0, backdropFilter: 'blur(2px)'}}
        >
            <Row flex={2}>
                <a href="/" onClick={() => setRoute(0)}>
                    <Row to="cursor" align="center" padding="padding: 30px;" position="relative" style={{width: 300}}>
                        <Image width="43px;" src={logo} />
                        <Flex position="absolute" style={{left: 73, opacity: route != 4 && route != 5 ? 1 : 0, transition: 'all 500ms ease'}}>
                            <Text margin="margin-left: 15px;" className="bold" size="18">NEURALVERSE</Text>
                        </Flex>
                        <Flex position="absolute" style={{left: 73, opacity: route == 4 ? 1 : 0, transition: 'all 500ms ease'}}>
                            <Text margin="margin-left: 15px;" className="bold" size="18">NEURAL STUDIO</Text>
                        </Flex>
                        <Flex position="absolute" style={{left: 73, opacity: route == 5 ? 1 : 0, transition: 'all 500ms ease'}}>
                            <Text margin="margin-left: 15px;" className="bold" size="18">NEURAL OPS</Text>
                        </Flex>
                    </Row>
                </a>
                {(route == 4 || route == 5) && <Text onClick={() => setHeaderShown(!headerShown)}>See Header</Text>}
            </Row>
            <DesignHeader route={route} headerShown={headerShown}/>
            <OpsHeader route={route} headerShown={headerShown}/>
            <Row align="center" justify="space-between" flex={route == 4 || route == 5 ? headerShown ? 3.8 : 0 : 3.8} height="100%" style={{opacity: route == 4 || route == 5 ? headerShown ? 1 : 0 : 1, transition: 'all 500ms ease', overflow: 'hidden'}}>
                <a onClick={() => setRoute(1)}>
                    <Row align="center" hover={hoverTrend} onMouseOver={() => setHoverTrend(true)} onMouseLeave={() => setHoverTrend(false)} >
                        <TrendIcon width={22} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">VERSE</Text>
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
                        <StudioLight width={25} height={25} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 15px;">
                            <Text className="light" size="12.8">STUDIO</Text>
                        </Flex>
                    </Row>
                </a>
                <a onClick={() => setRoute(5)}>
                    <Row align="center" hover={hoverNft} onMouseOver={() => setHoverNft(true)} onMouseLeave={() => setHoverNft(false)}>
                        <Image src={logo} width={33} />
                        <Flex to="cursor" padding="padding: 10px 15px 10px 12.8px;">
                            <Text className="light" size="12.8">NEURAL OPS</Text>
                        </Flex>
                    </Row>
                </a>
            </Row>
            {!loggedIn ? 
                (<Row align="center" justify="center" flex={1.9}>
                    <Flex>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Flex>
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
                </Row>) :
                (<Row align="center" justify="center" flex={1.9}>
                    <Flex>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </Flex>
                    <a onClick={() => setRoute(7)}>
                        <Row align="center" to="cursor">
                            <CirclePic margin={15} size={32} image={me} />
                            <Text className="light" size="12.8">JONATHAN</Text>
                        </Row>
                    </a>
                </Row>)
            }
        </HeaderBox>
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