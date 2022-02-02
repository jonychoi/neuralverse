import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../components/common/base';
import {BackIcon, BenchMarkIcon, DemoIcon, PaperswithCodeIcon} from '../../../icons/utilities';
import ModelView from '../modelview';
import ModelMain from '../modelmain';
import { bgStyler } from '../../../styles';

export const Top = ({darkMode, setModel, model, task, subTask}) => {
    return (
        <Col width="100%">
            <Flex onClick={() => setModel(null)} to="cursor" position="absolute" style={{left: '10%', top: 178, opacity: model ? 1 : 0, transition: 'all 300ms'}}>
                <BackIcon width={20} height={20} stroke={darkMode ? "rgba(255, 255, 255, 0.7" : 'rgba(0, 0, 0, 0.7)'} />
            </Flex>
            <Text className="bold" style={{minHeight: 36.67, marginLeft: model ? 30: 0, marginTop: model ? 3: 0, transition: 'all 300ms'}} size={model ? 25: "30"}>
                {model ? model.paper.name : subTask ? subTask.title.toUpperCase() : task ? task.title.toUpperCase() : "Computer Vision".toUpperCase()}
            </Text>
        </Col>
    )
};

export const Directory = ({model, subTask, task}) => {
    return (
        <Row margin="margin: 20px 0px" opacity={0.7}>
            <Text className="bold" weight="500" size="16">{task.title}</Text>
            {subTask && task.title != subTask.title && 
            <>
                <Text className="bold" weight="500" size="16" margin="margin: 0px 10px;">></Text>   
                <Text className="bold" weight="500" size="16">{subTask.title}</Text>
            </>}
            {model && 
            <>
                <Text className="bold" weight="500" size="16" margin="margin: 0px 10px;">></Text>
                <Text className="bold" weight="500" size="16">{model.title}</Text>
            </>}
        </Row>
    )
}

export const Buttons = ({model, darkMode, subTask, task}) => {
    return (
        <>
         {model ? 
                <Row margin="margin-top: 30px;">
                    <a href={`${model.paper.paper.replace('abs', 'pdf')}` + '.pdf'} target="_blank">
                        <Row align="center" padding="padding: 10px 15px;" br="10px" bg={bgStyler(darkMode)}>
                            <DemoIcon width={20} height={20} />
                            <Text size="12" className="light" weight="400" margin="margin: 0px 10px;">
                                Paper
                            </Text>
                        </Row>
                    </a>
                    <a href={model.paper.paper} target="_blank">
                        <Row align="center" margin="margin-left: 10px;" padding="padding: 10px 15px;" br="10px" bg={bgStyler(darkMode)}>
                            <PaperswithCodeIcon width={20} height={20} />
                            <Text size="12" className="light" weight="400" margin="margin: 0px 10px;">
                                Abstract
                            </Text>
                        </Row>
                    </a>
                    <a href={model.code.url} target="_blank">
                        <Row align="center" margin="margin-left: 10px;" padding="padding: 10px 15px;" br="10px" bg={bgStyler(darkMode)}>
                            <BenchMarkIcon width={20} height={20} />
                            <Text size="12" className="light" weight="400" margin="margin: 0px 10px;">
                                Code
                            </Text>
                        </Row>
                    </a>
                </Row>
                : 
                <Row margin="margin-top: 30px;">
                    <Row align="center">
                        <DemoIcon width={20} height={20} />
                        <Text size="12" className="light" weight="400" margin="margin: 0px 10px;">
                            20 Demos
                        </Text>
                    </Row>
                    <Row align="center" margin="margin-left: 10px;">
                        <PaperswithCodeIcon width={20} height={20} />
                        <Text size="12" className="light" weight="400" margin="margin: 0px 10px;">
                            20 Papers with Code
                        </Text>
                    </Row>
                    <Row align="center" margin="margin-left: 10px;">
                        <BenchMarkIcon width={20} height={20} />
                        <Text size="12" className="light" weight="400" margin="margin: 0px 10px;">
                            20 Benchmarks
                        </Text>
                    </Row>
                </Row>}
            </>
    )
}

export const TaskIntroduction = ({darkMode, setModel, setTask,  model, setSubTask, task, subTask}) => {
    const [opacity, setOpacity] = useState(1);
    const [_task, set_Task] = useState(task);
    const [_subTask, set_SubTask] = useState(subTask);
    const [_model, set_Model] = useState(model);
    useEffect(() => {
        const opaciter = () => {
            setOpacity(0);
            setTimeout(() => {
                set_Task(task);
                set_SubTask(subTask);
                set_Model(model);
                setOpacity(1)
            }, 300);
        };
        opaciter();
    }, [task, subTask, model])
    return (
        <Col opacity={opacity} style={{transition: 'all 300ms'}}>
            <Top model={model} setModel={setModel} darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <Row>
                <Col margin="margin-right: 30px;" flex={1}>
                    <Directory task={task} subTask={subTask} model={model} />
                    <Text lh={25} size="14" style={{letterSpacing: 0.5}} className="light" weight="400">
                        {_model ? _model.paper.description : _subTask ? _subTask.description : _task.description}
                    </Text>
                    <Buttons subTask={subTask} task={task} darkMode={darkMode} model={model} />
                </Col>
                {!model && <Flex margin="margin-top: 30px;">
                    <Flex br="10px" width="300px;"align="center" justify="center" height="180px;" style={{overflow: 'hidden'}}>
                        <Image width="108%" height="108%" of="cover" src={_model ? _model.img : _subTask ? _subTask.img : _task.img} />
                    </Flex>
                </Flex>}
            </Row>
        </Col>
    )
}


export const Main = ({model, setModel, categoryBar, darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 25%; padding-bottom: 100px;" : "padding: 0% 10%; padding-bottom: 100px;"}>
            <TaskIntroduction setModel={setModel} model={model} darkMode={darkMode} task={task} subTask={subTask} />
            {/* <Text>----------------접기------------------</Text> */}
            {model ? <ModelMain model={model} setModel={setModel} darkMode={darkMode} model={model} /> : 
            <ModelView setModel={setModel} darkMode={darkMode} task={task} subTask={subTask} />}
        </Col>
    )
}

export default Main;