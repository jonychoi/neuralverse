import segmentationimg from './imgs/segmentation.jpg';
import _3dSegmentation from './3d';
import panopticsegmentation from './panoptic';
import scenesegmentation from './scene';
import medicalsegmentation from './medical';
import weaklysegmentation from './weakly-supervised';

import models from './models';

export const SemanticSegmentation = {
    title: 'Semantic Segmentation',
    img: segmentationimg,
    description: 'Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.',
    datasets: ["Cityscapes", "KITTI", "ShapeNet", "NYUv2", "ScanNet", "ADE20K", "DAVIS", "SYNTHIA", "SUN RGB-D", "GTA5"],
    subtasks: [
        _3dSegmentation,
        panopticsegmentation,
        scenesegmentation,
        medicalsegmentation, 
        weaklysegmentation,
    ],
    models: models.concat(
        _3dSegmentation.models,
        panopticsegmentation.models,
        scenesegmentation.models,
        medicalsegmentation.models,
        weaklysegmentation.models
    )
}

export default SemanticSegmentation;