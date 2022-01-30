// images

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

// model datasest

import objectdetections from './data/object_detection';
import styletransfer from './data/style_transfer';

// benchmarks / paperswithcode / demos should be counted by lengths of databases by querying the hashtags of each
export const data = [
    {
        title: "All Computer Vision",
        demoNum: 20,
        benchmarkNum: 100,
        paperswithcodeNum: 100,
        img: computervisionimg,
        description: "Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs — and take actions or make recommendations based on that information. If AI enables computers to think, computer vision enables them to see, observe and understand.",
        datasets: ["Cityscapes", "KITTI", "ShapeNet", "NYUv2", "ScanNet", "ADE20K", "DAVIS", "SYNTHIA", "SUN RGB-D", "GTA5"],
        subtasks: []
    },
    {
        title: 'Segmentation',
        img: segmentationimg,
        description: 'Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.',
        datasets: ["Cityscapes", "KITTI", "ShapeNet", "NYUv2", "ScanNet", "ADE20K", "DAVIS", "SYNTHIA", "SUN RGB-D", "GTA5"],
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
        models: objectdetections,
        description: "Object detection is the task of detecting instances of objects of a certain class within an image. The state-of-the-art methods can be categorized into two main types: one-stage methods and two stage-methods. One-stage methods prioritize inference speed, and example models include YOLO, SSD and RetinaNet. Two-stage methods prioritize detection accuracy, and example models include Faster R-CNN, Mask R-CNN and Cascade R-CNN. The most popular benchmark is the MSCOCO dataset. Models are typically evaluated according to a Mean Average Precision metric.",
        datasets: ["COCO", "KITTI", "Visual Genome", "nuScenes", "MPII", "SUN RGB-D", "PASCAL VOC", "PASCAL3D+", "DAVIS 2016", "LabelMe"],
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
        data: styletransfer,
        description: "Style transfer is the task of changing the style of an image in one domain to the style of an image in another domain.",
        datasets: ["DukeMTMC-reID", "MPI Sintel", "MPIIGaze", "iKala", "LaMem", "Touchdown Dataset", "POP909", "WebCaricature Dataset", "PASTEL", "DeepWriting"],
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
        datasets: ["CIFAR-10", "ImageNet", "MNIST", "CIFAR-100", "SVHN", "CelebA", "Fashion-MNIST", "CUB-200-2011", "STL-10", "Places"],
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
        datasets: ["CIFAR-10", "ImageNet", "MNIST", "CIFAR-100", "Cityscapes", "CelebA", "Fashion-MNIST", "CUB-200-2011", "STL-10", "LSUN"],
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
        datasets: ["MNIST", "SVHN", "HMDB51", "Office-Home", "Office-31", "USPS", "SYNTHIA", "GTA5", "GTSRB", "OpenSubtitles"],
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
        datasets: ["STL-10", "NSynth", "AVA", "2D-3D-S", "CATER", "AVA-ActiveSpeaker", "MotionSense"],
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
        datasets: ["SIDD", "CBSD68", "BirdSong", "PolyU Dataset", "FMD", "Raider", "CRVD", "NIND", "TTS-Portuguese Corpus", "PointDenoisingBenchmark"],
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
        datasets: ["Cityscapes", "KITTI", "NYUv2", "ScanNet", "Matterport3D", "SUNCG", "Middlebury", "TUM RGB-D", "Make3D", "Virtual KITTI"],
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
        datasets: ["ImageNet", "GLUE", "CUB-200-2011", "SST", "MRPC", "PASCAL-5i", "Meta-Dataset", "MR", "Paris-Lille-3D", "SUN397"],
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
        datasets: ["Perceptual Similarity", "Vimeo90K", "xView", "PIRM", "General-100", "Flickr1024", "Stanford Light Field", "QMUL-SurvFace", "CATS", "TextZoom"],
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

export default data;