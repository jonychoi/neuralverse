// images
import computervisionimg from './imgs/computer vision.jpg';

// tasks

import denoising from './data/denoising';
import depthEstimation from './data/depth_estimation';
import fewShotLearning from './data/few-shot_learning';
import imageClassification from './data/image_classification';
import imageGeneration from './data/image_generation';
import objectDetection from './data/object_detection';
import semanticsegmentation from './data/semanticsegmentation';
import styleTransfer from './data/style_transfer';
import selfSupervisedLearning from './data/self-supervised_learning';
import superResolution from './data/super_resolution';
import domainAdaptation from './data/domain_adaptation';

// benchmarks / paperswithcode / demos should be counted by lengths of databases by querying the hashtags of each

export const data = [
    {
        title: "Computer Vision",
        demoNum: 20,
        benchmarkNum: 100,
        paperswithcodeNum: 100,
        img: "https://miro.medium.com/max/1400/1*8gmgaAkFdI-9OHY5cA93xQ.png",
        imgcredit: {
            name: "MEDIUM",
            url: "https://medium.com/mlearning-ai/open-cv-computer-vision-ai-how-does-it-work-801d4cdec462",
        },
        description: "Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs — and take actions or make recommendations based on that information. If AI enables computers to think, computer vision enables them to see, observe and understand.",
        datasets: ["Cityscapes", "KITTI", "ShapeNet", "NYUv2", "ScanNet", "ADE20K", "DAVIS", "SYNTHIA", "SUN RGB-D", "GTA5"],  
        subtasks: [
           
        ],
        models: imageClassification.models.concat(
                semanticsegmentation.models, 
                objectDetection.models,
                imageGeneration.models,
                styleTransfer.models,
                selfSupervisedLearning.models,
                depthEstimation.models,
                fewShotLearning.models,
                domainAdaptation.models,
                superResolution.models,
                denoising.models,
            )
    },
    imageClassification,
    semanticsegmentation, 
    objectDetection,
    imageGeneration,
    styleTransfer,
    selfSupervisedLearning,
    depthEstimation,
    fewShotLearning,
    domainAdaptation,
    superResolution,
    denoising,
]

export default data;