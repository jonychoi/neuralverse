import React from 'react';
import {Flex, Col, Row, Text, CirclePic} from '../../../components/common/base';
import {LikeIcon, CommentIcon, ShareIcon, RePostIcon} from '../../../icons/utilities';

export const FeedTop = ({darkMode, user, Components}) => {
    return (
        <Col>

            <Row align="center" justify="space-between" margin="margin: 5px 0px">
                <a href={'/' + user.userId}>
                    <Row align="center">
                        <CirclePic image={user.avatar} size={40} of="cover" />
                        <Col margin="margin-left: 10px;">
                            <Text weight="500">{user.name}</Text>
                            <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(30, 30, 30)"} size="12">{user.briefIntroduction}</Text>
                        </Col>
                    </Row>
                </a>
                {Components}
            </Row>
        </Col>
    )
}

export const Bottom = ({darkMode, Components}) => {
    return (
        <Row align="center" justify="space-between" padding="padding-top: 15px" style={{borderTopWidth: 0.3, borderTopColor: darkMode ? "rgb(50, 50, 50)" : "rgb(200, 200, 200)", borderTopStyle: "solid"}}>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <LikeIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={18} width={18} />
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color={darkMode ? "rgb(230, 230, 230)" : "rgb(25, 25, 25)"} weight="500">Upvote</Text>
            </Row>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <CommentIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={18} width={18} />
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color={darkMode ? "rgb(230, 230, 230)" : "rgb(25, 25, 25)"} weight="500">Comment</Text>
            </Row>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <RePostIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={18} width={18} />
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color={darkMode ? "rgb(230, 230, 230)" : "rgb(25, 25, 25)"} weight="500">Repost</Text>
            </Row>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <Flex margin="margin-bottom: 2px;">
                    <ShareIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={16} width={18} />
                </Flex>
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color={darkMode ? "rgb(230, 230, 230)" : "rgb(25, 25, 25)"} weight="500">Share</Text>
            </Row>
            {Components}
        </Row>
    )
}