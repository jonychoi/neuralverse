import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../components/common/base';
import {BackIcon, BenchMarkIcon, DemoIcon, PaperswithCodeIcon} from '../../icons/utilities';
import ModelView from './modelview';
import Benchmark from './benchmark';

export const Selector = ({darkMode, setModel, model, task, subTask}) => {
    return (
        <Col margin="margin-bottom: 10px">
            <Flex onClick={() => setModel(null)} position="absolute" style={{left: '10%', top: 160, opacity: model ? 1 : 0, transition: 'all 300ms'}}>
                <BackIcon width={20} height={20} stroke={darkMode ? "white" : 'black'} />
            </Flex>
            <Text className="bold" style={{marginLeft: model ? 30: 0, transition: 'all 300ms'}} size="33">
                {model ? model.title : subTask ? subTask.title.toUpperCase() : task ? task.title.toUpperCase() : "Computer Vision".toUpperCase()}
            </Text>
            <Row margin="margin: 20px 0px">
                <Text className="bold" size="17">{task.title}</Text>
                {subTask && task.title != subTask.title && 
                <>
                    <Text className="bold" size="17" margin="margin: 0px 10px;">></Text>   
                    <Text className="bold" size="17">{subTask.title}</Text>
                </>}
                {model && 
                <>
                    <Text className="bold" size="17" margin="margin: 0px 10px;">></Text>
                    <Text className="bold" size="17">{model.title}</Text>
                </>}
            </Row>
        </Col>
    )
};

export const TaskIntroduction = ({darkMode, model, task, subTask}) => {
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
        <Row align="center" opacity={opacity} style={{transition: 'all 300ms'}}>
            <Flex>
                <Flex br="20px" width="350px;"align="center" justify="center" height="200px" style={{overflow: 'hidden'}}>
                    <Image width="108%" height="108%" of="cover" src={_model ? _model.img : _subTask ? _subTask.img : _task.img} />
                </Flex>
            </Flex>
            <Col margin="margin-left: 30px;">
                <Row margin="margin-bottom: 10px;">
                    <Row align="center">
                        <DemoIcon width={20} height={20} />
                        <Text size="12.8" className="light" margin="margin: 0px 10px;">20 Demos</Text>
                    </Row>
                    <Row align="center" margin="margin-left: 10px;">
                        <PaperswithCodeIcon width={20} height={20} />
                        <Text size="12.8" className="light" margin="margin: 0px 10px;">20 Papers with Code</Text>
                    </Row>
                    <Row align="center" margin="margin-left: 10px;">
                        <BenchMarkIcon width={20} height={20} />
                        <Text size="12.8" className="light" margin="margin: 0px 10px;">20 Benchmarks</Text>
                    </Row>
                </Row>
                <Text lh={25} size="15" className="light" weight="400">
                    {_model ? _model.description : _subTask ? _subTask.description : _task.description}
                    <Col>
                    </Col>
                </Text>
            </Col>
        </Row>
    )
}


export const Main = ({model, setModel, categoryBar, darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 25%; padding-bottom: 100px;" : "padding: 0% 10%; padding-bottom: 100px;"}>
            <Selector model={model} setModel={setModel} darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <TaskIntroduction model={model} darkMode={darkMode} task={task} subTask={subTask} />
            <Text>----------------접기------------------</Text>
            {model ? <Benchmark model={model} setModel={setModel} darkMode={darkMode} model={model} /> : 
            <ModelView setModel={setModel} darkMode={darkMode} task={task} subTask={subTask} />}
        </Col>
    )
}

export default Main;