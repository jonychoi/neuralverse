import React, {useEffect, useState} from 'react';
import {Flex, Col, Row, Text, Image, Box} from '../../../components/common/base';
import {PaperIcon, CodeIcon, BenchMarkIcon, DemoIcon, UpDown} from '../../../icons/utilities';
import Model, {Dataset} from './components';

export const ModelViewTop = ({task, subTask, options, setOptions, optionBtn, setOptionbtn, darkMode}) => {
    return (
        <>
            <Row align="center" justify="space-between">
                <Row align="center">
                    <Text className="bold" size="20" margin="margin: 20px 0px;">
                        TRENDINGS ON {subTask ? subTask.title.toUpperCase() : task.title.toUpperCase()}
                    </Text>
                </Row>
                <Row to="cursor" cursorOpaFalse={true} align="center" us="none" onClick={() => setOptionbtn(!optionBtn)}>
                    <Text className="light" weight="500" size="12.8" margin="margin-right: 10px;">
                        View Options
                    </Text>
                    <Flex style={{transform: !optionBtn ? 'rotate(0deg)' : 'rotate(180deg)'}}>
                        <UpDown width={20} height={25} stroke={darkMode ? "white" : "black"} />
                    </Flex>
                </Row>
            </Row>
            <Col style={{width: '100%', height: optionBtn ? 35 : 0, transition: 'all 300ms', overflow: 'hidden'}}>
                <Col>
                    <Flex margin="margin-top: 5px;" style={{display: 'block'}}>
                        <Row align="center">
                            <Row onClick={() => setOptions(0)} to="cursor" align="center" margin="margin-right: 30px;">
                                <Text className="light" weight="500" size="12.8">See All</Text>
                            </Row>
                            <Row onClick={() => setOptions(0)} to="cursor" align="center" margin="margin-right: 30px;">
                                <Text className="light" weight="500" size="12.8" margin="margin-left: 7px;">Most Implemented</Text>
                            </Row>
                            <Row onClick={() => setOptions(0)} to="cursor" align="center" margin="margin-right: 30px;">
                                <Text className="light" weight="500" size="12.8" margin="margin-left: 7px;">Latest</Text>
                            </Row>
                            <Row onClick={() => setOptions(1)} to="cursor" align="center" margin="margin-right: 30px;">
                                <DemoIcon width={18} height={18} stroke={darkMode ? "rgb(150, 150, 150)" : "rgb(100, 100, 100)"} />
                                <Text  className="light" weight="500" size="12.8" margin="margin-left: 7px;">Demo Availables</Text>
                            </Row>
                            <Row onClick={() => setOptions(2)} to="cursor" align="center" margin="margin-right: 30px;">
                                <BenchMarkIcon width={18} height={18} stroke={darkMode ? "rgb(150, 150, 150)" : "rgb(100, 100, 100)"} />
                                <Text className="light" weight="500" size="12.8" margin="margin-left: 7px;">Benchmarks</Text>
                            </Row>
                            <Row onClick={() => setOptions(2)} to="cursor" align="center" margin="margin-right: 30px;">
                                <BenchMarkIcon width={18} height={18} stroke={darkMode ? "rgb(150, 150, 150)" : "rgb(100, 100, 100)"} />
                                <Text className="light" weight="500" size="12.8" margin="margin-left: 7px;">Datasets</Text>
                            </Row>
                        </Row>
                        <Flex style={{display: 'block'}} margin="margin: 15px 0px;">
                            <Dataset arg={"All Dataset"} darkMode={darkMode} />
                            {subTask ? subTask.datasets.map(item => <Dataset key={item} arg={item} darkMode={darkMode}/>) : task.datasets.map(item => <Dataset arg={item} darkMode={darkMode} key={item} />)}
                        </Flex>
                    </Flex>
                </Col>
            </Col>
        </>
    )
}

export const ModelView = ({setModel, darkMode, task, subTask}) => {
    // buttons control
    const [optionBtn, setOptionbtn] = useState(false);
    const [datasetBtn, setDatasetBtn] = useState(false);

    // view options: {view options > dataset options}
    const [options, setOptions] = useState(0);
    const [dataset, setDataset] = useState(['All']);

    // converting animation hooks
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
            <ModelViewTop task={task} subTask={subTask} options={options} setOptions={setOptions} optionBtn={optionBtn} setOptionbtn={setOptionbtn} darkMode={darkMode} />
            <Col opacity={opacity} position="relative" style={{left: -15, width: 'calc(100% + 30px)'}}>
                <Flex margin="margin: 12px 0px;" style={{display: 'block'}}>

                    {(_subTask != undefined && _subTask.models) ?
                    _subTask.models.map(item => 
                        <Model darkMode={darkMode} setModel={setModel} content={item} key={item.title}/>)
                    : 
                    (_task != undefined && _task.models) && 
                    _task.models.map(item => 
                        <Model darkMode={darkMode} setModel={setModel} content={item} key={item.title}/>)}
                
                </Flex>
            </Col>
        </Col>
    )
}

export default ModelView;