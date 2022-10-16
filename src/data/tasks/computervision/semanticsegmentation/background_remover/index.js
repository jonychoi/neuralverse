import models from './models';

export const backgroundRemover = {
    title: 'Background Remove',
    img: "https://raw.githubusercontent.com/xuebinqin/DIS/main/figures/peacock.jpg",
    description: 'Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.',
    datasets: ["Cityscapes", "KITTI", "ShapeNet", "NYUv2", "ScanNet", "ADE20K", "DAVIS", "SYNTHIA", "SUN RGB-D", "GTA5"],
    models: models
}

export default backgroundRemover;