import React from 'react';
import {Flex} from '../common/base';

export const Hover = ({hover, width}) => {
    return (
        <Flex margin="margin-left: 10px;">
            <div style={{height: 1, width: hover ? width : 0, transition: 'all 300ms', backgroundColor: 'black'}} />
        </Flex>
    )
}

export default Hover;