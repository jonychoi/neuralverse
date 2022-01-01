import React, {useState, useEffect, useCallback} from 'react';
import {Col, Row, Flex, Text, Image} from '../../components/common/base';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator(가짜 데이터 제너레이터)
const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`
}));

// a little function to help us with reordering the result(결과 재정렬을 돕는 함수)
const reorder =  (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// using some little inline style helpers to make the app look okay(보기좋게 앱을 만드는 인라인 스타일 헬퍼)
const grid = 8;
const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer(아이템을 보기 좋게 만드는 몇 가지 기본 스타일)
  userSelect: 'none',
  padding: grid * 2,
  marginBottom: grid,

  // change background colour if dragging(드래깅시 배경색 변경)
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables(드래그에 필요한 스타일 적용)
  ...draggableStyle
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

export const Architect = () => {
    const [state, setState] = useState({items: getItems(10)})

    const onDragEnd = (result) => {
        // dropped outside the list(리스트 밖으로 드랍한 경우)
        if(!result.destination) {
        return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState(items)
  }

return (
    <DragDropContext onDragEnd={() => onDragEnd()}>
        <Droppable droppableId="droppable">
            {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
            >
                {state.items.map(item => (
                <Draggable
                    key={item.id}
                    draggableId={item.id}
                >
                    {(provided, snapshot) => (
                    <div>
                        <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                            provided.draggableStyle,
                            snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                        >
                        {item.content}
                        </div>
                        {provided.placeholder}
                    </div>
                    )}
                </Draggable>
                ))}
            </div>
            )}
        </Droppable>
        </DragDropContext>
    );
};


export default Architect;

