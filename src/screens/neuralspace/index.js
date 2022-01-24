import React, { useState } from 'react';
import {Col} from '../../components/common/base';
import Main from './main';
import BenchMarks from './benchmark';
import { GlobalBgStyler } from '../../styles';
import { ThemeEvent } from '../../contexts/GlobalContext';

export const NeuralSpace = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [task, setTask] = useState('Computer Vision');
    const [subTask, setSubTask] = useState(null);
    return (
        <Col padding="padding: 0% 10%;" align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 3 ? 'flex': 'none', paddingTop: 110}}>
            <Main task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} />
            <BenchMarks task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} />
        </Col>
    )
};

export default NeuralSpace;