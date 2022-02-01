import depthestimationimg from './imgs/depth estimation.jpg';

export const DepthEstimation = {
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
}

export default DepthEstimation;