import objectdetectionimg from './imgs/objectdetection.jpg';

import real_time from './real-time';
import fewshot from './fewshot';
import rgbsailent from './rgb-salient';
import rgbdsalient from './rgb-d_sailent';
import video from './video';
import _3d from './3d';

export const ObjectDetection = {
    title: 'Object Detection',
    img: objectdetectionimg,
    description: "Object detection is the task of detecting instances of objects of a certain class within an image. The state-of-the-art methods can be categorized into two main types: one-stage methods and two stage-methods. One-stage methods prioritize inference speed, and example models include YOLO, SSD and RetinaNet. Two-stage methods prioritize detection accuracy, and example models include Faster R-CNN, Mask R-CNN and Cascade R-CNN. The most popular benchmark is the MSCOCO dataset. Models are typically evaluated according to a Mean Average Precision metric.",
    datasets: ["COCO", "KITTI", "Visual Genome", "nuScenes", "MPII", "SUN RGB-D", "PASCAL VOC", "PASCAL3D+", "DAVIS 2016", "LabelMe"],
    subtasks: [
        real_time,
        _3d,
        fewshot,
        rgbsailent, 
        rgbdsalient,
        video,
    ]
}

export default ObjectDetection;