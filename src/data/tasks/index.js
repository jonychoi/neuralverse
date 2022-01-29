import computervisionimg from './imgs/computer vision.jpg';
import denoisingimg from './imgs/denoising.jpg'
import depthestimationimg from './imgs/depth estimation.jpg';
import domainadaptationimg from './imgs/domain adaptation.jpg';
import fewshotlearningimg from './imgs/fewshotlearning.png';
import imageclassificationimg from './imgs/image classification.jpeg';
import imagegenerationimg from './imgs/image generation.png';
import objectdetectionimg from './imgs/object detection.jpg';
import segmentationimg from './imgs/segmentation.jpg';
import styletransferimg from './imgs/style transfer.jpg';
import superresolutionimg from './imgs/super resolution.jpg';
import selfsupervbimg from './imgs/selfsupervb.png';

export const data = [
    {
        title: "All Computer Vision",
        img: computervisionimg,
        description: "Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs — and take actions or make recommendations based on that information. If AI enables computers to think, computer vision enables them to see, observe and understand.",
        subtasks: []
    },
    {
        title: 'Segmentation',
        img: segmentationimg,
        description: 'Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.',
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
        description: "Object detection is the task of detecting instances of objects of a certain class within an image. The state-of-the-art methods can be categorized into two main types: one-stage methods and two stage-methods. One-stage methods prioritize inference speed, and example models include YOLO, SSD and RetinaNet. Two-stage methods prioritize detection accuracy, and example models include Faster R-CNN, Mask R-CNN and Cascade R-CNN. The most popular benchmark is the MSCOCO dataset. Models are typically evaluated according to a Mean Average Precision metric.",
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
        title: 'Style Transfer',
        img: styletransferimg,
        description: "Style transfer is the task of changing the style of an image in one domain to the style of an image in another domain.",
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
        ],
    },
    {
        title: 'Image Classification',
        img: imageclassificationimg,
        description: 'Image Classification is a fundamental task that attempts to comprehend an entire image as a whole. The goal is to classify the image by assigning it to a specific label. Typically, Image Classification refers to images in which only one object appears and is analyzed. In contrast, object detection involves both classification and localization tasks, and is used to analyze more realistic cases in which multiple objects may exist in an image.',
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
        title: 'Image Generation',
        img: imagegenerationimg,
        description: <p>Image generation (synthesis) is the task of generating new images from an existing dataset.
        <ul>
        <li>Unconditional generation refers to generating samples unconditionally from the dataset, i.e. </li>
        <li>Conditional image generation (subtask) refers to generating samples conditionally from the dataset, based on a label, i.e. .</li>
        </ul>
        In this section, you can find state-of-the-art leaderboards for unconditional generation. For conditional generation, and other types of image generations, refer to the subtasks.</p>,
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
        title: 'Domain Adaptation',
        img: domainadaptationimg,
        description: "Domain adaptation is the task of adapting models across domains. This is motivated by the challenge where the test and training datasets fall from different data distributions due to some factor. Domain adaptation aims to build machine learning models that can be generalized into a target domain and dealing with the discrepancy across domain distributions.",
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
        title: "Self-Supervised Learning",
        img: selfsupervbimg,
        description: "Self-Supervised Learning is proposed for utilizing unlabeled data with the success of supervised learning. Producing a dataset with good labels is expensive, while unlabeled data is being generated all the time. The motivation of Self-Supervised Learning is to make use of the large amount of unlabeled data. The main idea of Self-Supervised Learning is to generate the labels from unlabeled data, according to the structure or characteristics of the data itself, and then train on this unsupervised data in a supervised manner. Self-Supervised Learning is wildly used in representation learning to make a model learn the latent features of the data. This technique is often employed in computer vision, video processing and robot control.",
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
        ],
    },
    {
        title: 'Denoising',
        img: denoisingimg,
        description: "Denoising is the task of removing noise from an image.",
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
        title: 'Depth Estimation',
        img: depthestimationimg,
        description: "Depth Estimation is a crucial step towards inferring scene geometry from 2D images. The goal in monocular Depth Estimation is to predict the depth value of each pixel, given only a single RGB image as input.",
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
        title: 'Few Shot Learning',
        img: fewshotlearningimg,
        description: "Few-Shot Learning is an example of meta-learning, where a learner is trained on several related tasks, during the meta-training phase, so that it can generalize well to unseen (but related) tasks with just few examples, during the meta-testing phase. An effective approach to the Few-Shot Learning problem is to learn a common representation for various tasks and train task specific classifiers on top of this representation.",
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
        title: 'Super Resolution',
        img: superresolutionimg,
        description: "Super resolution is the task of taking an input of a low resolution (LR) and upscaling it to that of a high resolution.",
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
]

export const getItem = (title, data) => {
    for (let i = 0; i < data.length; i ++){
        if (title == data[i].title){
            return data[i];
        }
    }
}

export default data;