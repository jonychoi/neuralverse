import React, {useState, useEffect} from 'react';
import {bgStyler} from '../../../styles';
import {Col, Row, Flex, Image, Text} from '../../../components/common/base';
import {postRequest} from '../inference';
import { DemoIcon } from '../../../icons/utilities';

export const Demo = ({model, darkMode}) => {
    const [result, setResult] = useState(null);
    
    return (
        <>
        <Row align="center" margin="margin-bottom: 30px; margin-left: 20px;">
            <DemoIcon width={23} height={23} />
            <Text className='bold' size="22" margin="margin-left: 12px;">{model.title} Demo</Text>
        </Row>
        <Flex height="470px" width="100%" br="20px" margin="margin-bottom: 30px;" bg={bgStyler(darkMode)}>
            <div class="panels unaligned">
                <div class="panel">
                    <div class="component_set">
                        <div class="component">
                            <div class="panel_header">img</div>
                            <div class="input_image">
                                <div class="image_preview_holder">
                                    <div class="edit_buttons">
                                        <button class="edit_button">
                                            <img src="static/media/edit.44bd4fe1.svg" />
                                        </button>
                                        <button class="clear_button">
                                            <img src="static/media/clear.33f9b5f3.svg" />
                                        </button>
                                    </div>
                                    <img src="" />
                                </div>
                            </div>
                        </div>
                        <div class="component"><div class="panel_header">version</div><div class="input_radio"><div><div class="radio_item"><div class="radio_circle"></div>version 1 (🔺 stylization, 🔻 robustness)</div></div><div><div class="radio_item selected"><div class="radio_circle"></div>version 2 (🔺 robustness,🔻 stylization)</div></div></div></div>
                    </div>
                    <div class="panel_buttons"><button class="panel_button">Clear</button><button onClick={() => postRequest(setResult, "https://hf.space/gradioiframe/akhaliq/YOLOv5/+/api/predict/")} class="panel_button submit">Submit</button></div>
                </div>
                <div class="panel">
                    <div class="component_set relative">
                        <div class="component">
                            <div class="panel_header">Output</div>
                            <div class="output_image">
                                <div class="image_preview_holder">
                                    <img src={result} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Flex>
        </>
    )
};

export default Demo;