import React, {useEffect, useState} from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {BenchMarkIcon, DemoIcon, PaperswithCodeIcon, UpDown} from '../../icons/utilities';
import logo from '../../imgs/logo.png';
import {bgStyler} from '../../styles';
import styled from 'styled-components';

const DatasetLink = styled.a`
    :hover {
        cursor: pointer;
    }
`;

export const Dataset = ({darkMode, arg}) => {
    return (
        <DatasetLink>
            <Box padding="padding: 0px 12px; padding-bottom: 6px;" margin="margin-right: 10px; margin-bottom: 10px;" br="5px" style={{display: 'inline-block'}} bg={bgStyler(darkMode)}>
                <Text className="light" weight="500" size="11"># {arg}</Text>
            </Box>
        </DatasetLink>
    )
}

export const ModelBox = styled(Flex)`
    margin: 10px 12.8px;
    &:last-child {
        margin-right: 0px;
    };
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 31%;
    height: 190px;
    bottom: 0px;
    :hover {
        bottom: 5px;
    };
    transition: 300ms;
`;

export const Model = ({setModel, darkMode, content}) => {
    return (
        <ModelBox onClick={() => setModel(content)} shadow={true} bg={bgStyler(darkMode)} br="20px" style={{overflow: 'hidden'}}>
            <Col align="center" justify="center" width="100%" height="100%" position="absolute" zIndex={100} bg={darkMode ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.15)"}>
                <Text color="white" title="light" size="20" weight="500" style={{width: '100%', textAlign: 'center'}} margin="margin-bottom: 5px;">{content.title}</Text>
                <Text color="white" title="light" size="15" weight="500" style={{width: '100%', textAlign: 'center'}}>{content.subtitle}</Text>
            </Col>
            <Image src={content.img} of="cover" position="absolute" width="108%" height="108%" />
        </ModelBox>
    )
}

export const ModelViewTop = ({task, subTask, options, setOptions, datasetBtn, setDatasetBtn, darkMode}) => {
    return (
        <>
            <Row align="center" justify="space-between">
                <Row align="center">
                    <Flex>
                        <Image src={logo} width={41} />
                    </Flex>
                    <Text className="bold" size="20" margin="margin: 20px;">TRENDINGS ON {subTask ? subTask.title.toUpperCase() : task.title.toUpperCase()}</Text>
                </Row>
                <Row>
                <Row align="center">
                    <Row onClick={() => setOptions(0)} to="cursor" align="center" margin="margin-right: 20px;">
                        <PaperswithCodeIcon width={18} height={18} stroke={darkMode ? "rgb(150, 150, 150)" : "rgb(100, 100, 100)"} />
                        <Text className="light" weight="500" size="12.8" margin="margin-left: 7px;">See All</Text>
                    </Row>
                    <Row onClick={() => setOptions(1)} to="cursor" align="center" margin="margin-right: 20px;">
                        <DemoIcon width={18} height={18} stroke={darkMode ? "rgb(150, 150, 150)" : "rgb(100, 100, 100)"} />
                        <Text  className="light" weight="500" size="12.8" margin="margin-left: 7px;">Demo Availables</Text>
                    </Row>
                    <Row onClick={() => setOptions(2)} to="cursor" align="center" margin="margin-right: 20px;">
                        <BenchMarkIcon width={18} height={18} stroke={darkMode ? "rgb(150, 150, 150)" : "rgb(100, 100, 100)"} />
                        <Text className="light" weight="500" size="12.8" margin="margin-left: 7px;">Benchmarks</Text>
                    </Row>
                </Row>
                <Row to="cursor" cursorOpaFalse={true} align="center" us="none" onClick={() => setDatasetBtn(!datasetBtn)}>
                    <Text className="light" weight="500" size="12.8" margin="margin-right: 10px;">Dataset Options</Text>
                    <Flex style={{transform: !datasetBtn ? 'rotate(0deg)' : 'rotate(180deg)'}}>
                        <UpDown width={20} height={25} stroke={darkMode ? "white" : "black"} />
                    </Flex>
                </Row>
                </Row>
            </Row>
            <Col style={{width: '100%', height: datasetBtn ? 'auto' : 0, transition: 'all 300ms', overflow: 'hidden'}}>
                <Col>
                    <Flex margin="margin-top: 5px;" style={{display: 'block'}}>
                        <Dataset arg={"All Dataset"} darkMode={darkMode} />
                        {subTask ? subTask.datasets.map(item => <Dataset key={item} arg={item} darkMode={darkMode}/>) : task.datasets.map(item => <Dataset arg={item} darkMode={darkMode} key={item} />)}
                    </Flex>
                </Col>
            </Col>
        </>
    )
}

export const ModelView = ({setModel, darkMode, task, subTask}) => {
    const [datasetBtn, setDatasetBtn] = useState(false);
    const [options, setOptions] = useState(0);
    const [viewDataset, setViewDataset] = useState(['All']);

    const [opacity, setOpacity] = useState(1);
    const [_task, set_Task] = useState(task);
    const [_subTask, set_subTask] = useState(subTask);
    useEffect(() => {
        const opaciter = () => {
            setOpacity(0);
            setTimeout(() => {
                setOpacity(1)
                set_Task(task);
                set_subTask(subTask);
            }, 300);
        };
        opaciter();
    }, [task, subTask])
    return (
        <Col flex={3} margin="margin-top: 50px;">   
            <ModelViewTop task={task} subTask={subTask} options={options} setOptions={setOptions} datasetBtn={datasetBtn} setDatasetBtn={setDatasetBtn} darkMode={darkMode} />
            <Col opacity={opacity} position="relative" style={{left: -15, width: 'calc(100% + 30px)'}}>
                <Flex margin="margin: 12px 0px;" style={{display: 'block'}}>
                    {_subTask != undefined && _subTask.models ?
                    _subTask.models.map(item => <Model darkMode={darkMode} setModel={setModel} content={item} key={item.title}/>)
                    : 
                    _task != undefined && _task.models && _task.models.map(item => <Model darkMode={darkMode} setModel={setModel} content={item} key={item.title}/>)}
                </Flex>
            </Col>
        </Col>
    )
}

export default ModelView;