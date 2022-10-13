import React from 'react';
import fewshotsegmentation from './imgs/fewshotsegmentation.png';

import fewshotimageclassification from './few-shot image classification';
import fewshotsemanticsegmentation from './few-shot semantic segmentation';
import oneshotlearning from './one-shot learning';

import models from './models';


export const FewShotLearning = {
    title: 'Few Shot Learning',
    img: fewshotsegmentation,
    imgcredit: {
        name: "Cost Aggregation Is All You Need for Few-Shot Segmentation",
        url: "https://arxiv.org/pdf/2112.11685v1.pdf",
    },
    datasets: ["ImageNet", "GLUE", "CUB-200-2011", "SST", "MRPC", "PASCAL-5i", "Meta-Dataset", "MR", "Paris-Lille-3D", "SUN397"],
    description: <p><strong>Few-Shot Learning</strong> is an example of meta-learning, where a learner is trained on several related tasks, during the meta-training phase, so that it can generalize well to unseen (but related) tasks with just few examples, during the meta-testing phase. An effective approach to the Few-Shot Learning problem is to learn a common representation for various tasks and train task specific classifiers on top of this representation.</p>,
    descriptioncredit: {
        name: "Penalty Method for Inversion-Free Deep Bilevel Optimization",
        url: "https://arxiv.org/abs/1911.03432",
    },
    subtasks: [
        fewshotimageclassification,
        fewshotsemanticsegmentation,
        oneshotlearning,
    ],
    models: models.concat(
        fewshotimageclassification.models,
        fewshotsemanticsegmentation.models,
        oneshotlearning.models,
    )
}

export default FewShotLearning;