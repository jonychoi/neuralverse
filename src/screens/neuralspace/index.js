import React, { useState } from 'react';
import {Col} from '../../components/common/base';
import Main from './main';
import BenchMarks from './benchmark';
import CategoryBar from './categorybar';
import { GlobalBgStyler } from '../../styles';
import { ThemeEvent } from '../../contexts/GlobalContext';

export const NeuralSpace = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [task, setTask] = useState('Computer Vision');
    const [subTask, setSubTask] = useState(null);
    const [categoryBar, setCategoryBar]= useState(true);
    return (
        <Col align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 3 ? 'flex': 'none', paddingTop: 150}}>
            <Main categoryBar={categoryBar} setCategoryBar={setCategoryBar} task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} />
            <CategoryBar darkMode={darkMode} categoryBar={categoryBar} setCategoryBar={setCategoryBar} />
            <BenchMarks task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} />
        </Col>
    )
};

export default NeuralSpace;