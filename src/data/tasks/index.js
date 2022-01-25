import denoisingimg from './imgs/denoising.png'
import depthestimationimg from './imgs/depth estimation.jpg';
import domainadaptationimg from './imgs/domain adaptation.jpg';
import facerecognitionimg from './imgs/face recognition.jpg';
import fewshotlearningimg from './imgs/fewshotlearning.png';
import imageclassificationimg from './imgs/image classification.jpeg';
import imagegenerationimg from './imgs/image generation.png';
import objectdetectionimg from './imgs/object detection.jpeg';
import poseestimationimg from './imgs/poseestimation.png';
import segmentationimg from './imgs/segmentation.jpg';
import styletransferimg from './imgs/style transfer.jpg';
import superresolutionimg from './imgs/super resolution.jpg';

export default [
    {
        title: "Computer Vision",
        img: segmentationimg,
        subtasks: []
    },
    {
        title: 'Segmentation',
        img: segmentationimg,
        subtasks: [
            {
                title: 'Semantic Segmentation'
            },
            {
                title: 'Medical Image Segmentation'
            },
            {
                title: "Panoptic Segmentation"
            },
            {
                title: "3D Semantic Segmentation",
            },
            {
                title: "Scene Segmentation",
            },
            {
                title: "Weakly-Supervised Semantic Segmentation"
            }
        ]
    },
    {
        title: 'Object Detection',
        img: objectdetectionimg,
        subtasks: [

        ]
    },
    {
        title: 'Style Transfer',
        img: styletransferimg,
        subtasks: [

        ],
    },
    {
        title: 'Image Classification',
        img: imageclassificationimg,
        subtasks: [

        ]
    },
    {
        title: 'Image Generation',
        img: imagegenerationimg,
        subtasks: [

        ]
    },
    {
        title: 'Domain Adaptation',
        img: domainadaptationimg,
        subtasks: [

        ]
    },
    {
        title: 'Pose Estimation',
        img: poseestimationimg,
        subtasks: [

        ]
    },
    {
        title: 'Denoising',
        img: denoisingimg,
        subtasks: [

        ]
    },
    {
        title: 'Depth Estimation',
        img: depthestimationimg,
        subtasks: [

        ]
    },
    {
        title: 'Few Shot Learning',
        img: fewshotlearningimg,
        subtasks: [

        ]
    },
    {
        title: 'Super Resolution',
        img: superresolutionimg,
        subtasks: [

        ]
    },
    {
        title: 'Face Recognition',
        img: facerecognitionimg,
        subtasks: [

        ]
    },
]