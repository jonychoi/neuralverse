import React from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image} from '../../../../components/common/base';

export const Articles = ({model}) => {
    return (
        <Col>
            <Text weight="500" className="light" size="22">Articles about {model.title}</Text>
            <Flex style={{display: "block"}}>
                {model.articles.map(item => <ArticleBox key={item.title} />)}
            </Flex>
        </Col>
    )
}

export const ArticleBoxWrap = styled(Flex)`
    
`;

export const ArticleBox = ({item}) => {
    return (
        <ArticleBoxWrap>

        </ArticleBoxWrap>
    )
}

export default Articles;