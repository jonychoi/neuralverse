import React, {useState, useEffect} from 'react';
import { Flex } from '../common/base';

export const ReadEngine = ({darkMode}) => {
    return (
        <Flex style={{width: '100%', overflow: 'hidden', position: 'relative'}}>
            <div id="graph" className="graph" tabIndex={0}>
                <svg id="canvas" className="canvas" preserveAspectRatio="xMidYMid meet" width="100%" height="100%"></svg>
            </div>
            <SideBar />
            <ToolBox />
            <div id="transparent" className="transparent"></div>
            <div className="center logo">
                
                {/* <div className="center logo-message" style={{display: 'none'}}>
                    <div style={{height: 30, textAlign: 'center'}}>Version <span id="version" className="select">5.4.7</span></div>
                    <div style={{height: 30, textAlign: 'center'}}>Copyright © <a href="https://www.lutzroeder.com/" target="blank_">Lutz Roeder</a></div>
                </div> */}
                
                {/* <span className="center consent-message">This app uses cookies to report errors and anonymous usage information.</span>
                <button id="consent-accept-button" className="center consent-accept-button">Accept</button>
                <button id="open-file-button" className="center open-file-button">Open Model…</button> */}
                <input type="file" id="open-file-dialog" className="open-file-dialog" multiple={false} accept=".onnx, .pb, .meta, .tflite, .lite, .tfl, .keras, .h5, .hd5, .hdf5, .json, .model, .mar, .params, .param, .armnn, .mnn, .ncnn, .tnnproto, .tmfile, .ms, .om, .nn, .uff, .rknn, .xmodel, .paddle, .pdmodel, .pdparams, .nb, .dnn, .cmf, .mlmodel, .mlpackage, .caffemodel, .pbtxt, .prototxt, .pkl, .pt, .pth, .ptl, .t7, .joblib, .cfg, .xml, .zip, .tar" />
            </div>
        </Flex>
    )
}

export const SideBar = ({}) => {
    return (
        <div id="sidebar" className="sidebar"></div>
    )
}

export const ToolBox = ({}) => {
    return (
        <div id="toolbar" className="toolbar">
            <button id="menu-button" className="toolbar-button" title="Menu">
                <svg className="icon" viewBox="0 0 100 100">
                    <rect className="border" x="12" y="12" width="76" height="76" rx="16" ry="16" strokeWidth="8"></rect>
                    <line className="border" x1="30" y1="37" x2="70" y2="37" strokeWidth="8" strokeLinecap="round" stroke="#fff"></line>
                    <line className="border" x1="30" y1="50" x2="70" y2="50" strokeWidth="8" strokeLinecap="round" stroke="#fff"></line>
                    <line className="border" x1="30" y1="63" x2="70" y2="63" strokeWidth="8" strokeLinecap="round" stroke="#fff"></line>
                    <rect className="stroke" x="12" y="12" width="76" height="76" rx="16" ry="16" strokeWidth="4"></rect>
                    <line className="stroke" x1="30" y1="37" x2="70" y2="37" strokeWidth="4" strokeLinecap="round"></line>
                    <line className="stroke" x1="30" y1="50" x2="70" y2="50" strokeWidth="4" strokeLinecap="round"></line>
                    <line className="stroke" x1="30" y1="63" x2="70" y2="63" strokeWidth="4" strokeLinecap="round"></line>
                </svg>
            </button>
            <button id="zoom-in-button" className="toolbar-button" title="Zoom In">
                <svg className="icon" viewBox="0 0 100 100">
                    <circle className="border" cx="50" cy="50" r="35" strokeWidth="8" stroke="#fff"></circle>
                    <line className="border" x1="50" y1="38" x2="50" y2="62" strokeWidth="8" strokeLinecap="round" stroke="#fff"></line>
                    <line className="border" x1="38" y1="50" x2="62" y2="50" strokeWidth="8" strokeLinecap="round" stroke="#fff"></line>
                    <line className="border" x1="78" y1="78" x2="82" y2="82" strokeWidth="12" strokeLinecap="square" stroke="#fff"></line>
                    <circle className="stroke" cx="50" cy="50" r="35" strokeWidth="4"></circle>
                    <line className="stroke" x1="50" y1="38" x2="50" y2="62" strokeWidth="4" strokeLinecap="round"></line>
                    <line className="stroke" x1="38" y1="50" x2="62" y2="50" strokeWidth="4" strokeLinecap="round"></line>
                    <line className="stroke" x1="78" y1="78" x2="82" y2="82" strokeWidth="8" strokeLinecap="square"></line>
                </svg>
            </button>
            <button id="zoom-out-button" className="toolbar-button" title="Zoom Out">
                <svg className="icon" viewBox="0 0 100 100">
                    <circle className="border" cx="50" cy="50" r="35" strokeWidth="8" stroke="#fff"></circle>
                    <line className="border" x1="38" y1="50" x2="62" y2="50" strokeWidth="8" strokeLinecap="round" stroke="#fff"></line>
                    <line className="border" x1="78" y1="78" x2="82" y2="82" strokeWidth="12" strokeLinecap="square" stroke="#fff"></line>
                    <circle className="stroke" cx="50" cy="50" r="35" strokeWidth="4"></circle>
                    <line className="stroke" x1="38" y1="50" x2="62" y2="50" strokeWidth="4" strokeLinecap="round"></line>
                    <line className="stroke" x1="78" y1="78" x2="82" y2="82" strokeWidth="8" strokeLinecap="square"></line>
                </svg>
            </button>
            <button id="back-button" className="toolbar-back-button" title="Back">
                ❮
            </button>
            <button id="name-button" className="toolbar-name-button" title="Name">
            </button>
            <div id="menu-dropdown" className="dropdown" style={{display: 'none'}}></div>
        </div>
    )
}

export default ReadEngine;