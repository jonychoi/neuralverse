import React from "react";
import styled from "styled-components";
import {ThemeEvent} from '../../contexts/GlobalContext';

export const Text = styled.span`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color ? props.color : ThemeEvent().darkMode ? "white" : "black"};
    ${props => props.margin};
    ${props => props.padding};
    flex: ${props => props.flex};
    font-family: ${props => props.ff};
    z-index: ${(props) => props.zIndex};
    ${props => props.to ? "cursor: pointer;" : null};
    ${props => props.to ? ":hover { opacity: 0.85 }" : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    transition: all 500ms ease;
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    ${props => props.margin};
    width: ${props => props.size ? props.size : props.width};
    height: ${props => props.size ? props.size : props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    transition: all 500ms ease;
    ${props => props.to ? "cursor: pointer;" : null};
    ${props => props.to && !props.cursorOpaFalse ? ":hover { opacity: 0.85 }" : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    opacity: ${props => props.opacity};
    position: ${props => props.position};
    :hover {
        img {
            opacity: ${(props) => props.to && !props.cursorOpaFalse ? 0.85 : 1}
        }
        span {
            opacity: ${(props) => props.to && !props.cursorOpaFalse ? 0.85 : 1}
        }
    }
`;

export const Row = styled(Flex)`
    flex-direction: row;
    }
`;

export const Col = styled(Flex)`
    flex-direction: column;
`;

export const Box = styled(Col)`
    transition: background-color .3s,color .3s,box-shadow .3s;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
      }
`;

export const Image = styled.img`
    position: ${props => props.position};
    object-fit: ${props => props.of};
    ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    opacity: ${props => props.opacity};
    z-index: ${(props) => props.zIndex};
`;

export const ImageWrapper = styled(Flex)`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: ${(props) => props.margin ? props.margin : 0}px;
`;

export const CirclePic = ({image, size, flex, margin, of, style}) => {
    return (
        <ImageWrapper style={style} margin={margin} width={size} height={size} flex={flex}>
            <Image of={of} width={size+'px'} height={size+'px'} src={image}/>
        </ImageWrapper>
    )
}

export const Input = styled.input`
    ${props => props.margin};
    width: ${props => props.size ? props.size : props.width};
    height: ${props => props.size ? props.size : props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    transition: all 300ms ease;
`;

export const TextArea = styled.textarea`
    ${props => props.margin};
    width: ${props => props.size ? props.size : props.width};
    height: ${props => props.size ? props.size : props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    transition: all 300ms ease;
`;