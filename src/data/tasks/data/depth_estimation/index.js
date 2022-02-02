import _3d from './3d';
import cameramotion from './cameramotion';
import monocular from './monocular';
import stereo from './stereo';
import stereolidar from './stereolidar';

import models from './models';

export const DepthEstimation = {
    title: 'Depth Estimation',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000000605-d9849a91.jpg",
    imgcredit: {
        name: "DIODE: A Dense Indoor and Outdoor DEpth Dataset",
        url: "https://arxiv.org/abs/1908.00463",
    },
    description: "Depth Estimation is a crucial step towards inferring scene geometry from 2D images. The goal in monocular Depth Estimation is to predict the depth value of each pixel, given only a single RGB image as input.",
    datasets: ["Cityscapes", "KITTI", "NYUv2", "ScanNet", "Matterport3D", "SUNCG", "Middlebury", "TUM RGB-D", "Make3D", "Virtual KITTI"],
    subtasks: [
        stereo,
        monocular,
        _3d,
        cameramotion,
        stereolidar,
    ],
    models: models.concat(
        stereo.models,
        monocular.models,
        _3d.models,
        cameramotion.models,
        stereolidar.models,
    )
}

export default DepthEstimation;