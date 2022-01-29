import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {BenchMarkIcon, DemoIcon, PaperswithCodeIcon, UpDown} from '../../icons/utilities';
import ModelView from './modelview';
import {bgStyler} from '../../styles';
import styled from 'styled-components';

export const Selector = ({darkMode, task, subTask}) => {
    console.log(subTask, task)
    return (
        <Col margin="margin-bottom: 10px">
            <Text className="bold" size="33">{subTask ? subTask.title.toUpperCase() : task.title == "All Computer Vision" ? "Computer Vision".toUpperCase() : task.title.toUpperCase()}</Text>
            <Row margin="margin: 20px 0px">
                <Text className="bold" size="17">{subTask ? subTask.title : task.title}</Text>
                {subTask && 
                <>
                    <Text className="bold" size="17" margin="margin: 0px 10px;">></Text>
                    <Text className="bold" size="17">{subTask.title}</Text>
                </>}
            </Row>
        </Col>
    )
};

export const TaskIntroduction = ({darkMode, task, subTask}) => {
    const [opacity, setOpacity] = useState(1);
    const [_task, set_Task] = useState(task);
    const [_subTask, set_subTask] = useState(subTask);
    useEffect(() => {
        const opaciter = () => {
            setOpacity(0);
            setTimeout(() => {
                setOpacity(1)
                set_Task(task);
            }, 300);
        };
        opaciter();
    }, [task])
    return (
        <Row align="center" opacity={opacity} style={{transition: 'all 300ms'}}>
            <Flex>
                <Flex br="20px" width="350px;"align="center" justify="center" height="200px" style={{overflow: 'hidden'}}>
                    <Image width="108%" height="108%" of="cover" src={_subTask ? _subTask.img : _task.img} />
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
                    {_subTask ? _subTask.description : _task.description}
                </Text>
            </Col>
        </Row>
    )
}


export const Main = ({categoryBar, darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 25%; padding-bottom: 100px;" : "padding: 0% 10%; padding-bottom: 100px;"}>
            <Selector darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <TaskIntroduction darkMode={darkMode} task={task} subTask={subTask} />
            <ModelView darkMode={darkMode} task={task} subTask={subTask} />
        </Col>
    )
}

export default Main;