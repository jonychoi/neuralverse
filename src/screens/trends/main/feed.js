import React from 'react';
import {Flex, Col, Row, Text, Image, Box} from '../../../components/common/base';
import {bgStyler} from '../../../styles';
import {FeedTop, Bottom} from './common';

export const Feed = ({darkMode, content}) => {
    return (
        <Box bg={bgStyler(darkMode)} padding="padding: 10px 15px;" margin="margin: 15px 30px 15px 30px" br="10px" style={{width: 700, maxHeight: 800, minHeight: 200}}>
            <FeedTop darkMode={darkMode} />
            <Col margin="margin: 10px 0px;">
                <Text weight="600" margin="margin-bottom: 10px">Attention Is All You Need</Text>
                <Text lh="21" weight="400" size="14">
                    The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.
                </Text>
            </Col>
            <Bottom darkMode={darkMode} />
        </Box>
    )
}

export default Feed;