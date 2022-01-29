import React, { useState } from 'react';
import {Col} from '../../components/common/base';
import Main from './main';
import BenchMarks from './benchmark';
import CategoryBar from './categorybar';
import { GlobalBgStyler } from '../../styles';
import { ThemeEvent } from '../../contexts/GlobalContext';
import tasks, { getItem } from '../../data/tasks';

export const NeuralSpace = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [task, setTask] = useState(getItem('All Computer Vision', tasks));
    const [subTask, setSubTask] = useState(null);
    const [categoryBar, setCategoryBar]= useState(true);
    return (
        <Col align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 3 ? 'flex': 'none', paddingTop: 150}}>
            <Main categoryBar={categoryBar} setCategoryBar={setCategoryBar} task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} />
            <CategoryBar task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} categoryBar={categoryBar} setCategoryBar={setCategoryBar} />
        </Col>
    )
};

export default NeuralSpace;