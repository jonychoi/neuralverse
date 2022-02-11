export const WeaklySupervised = {
    title: 'Weakly-Supervised Semantic Segmentation',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000000378-6571e9af.jpg",
    description: 'The semantic segmentation task is to assign a label from a label set to each pixel in an image. In the case of fully supervised setting, the dataset consists of images and their corresponding pixel-level class-specific annotations (expensive pixel-level annotations). However, in the weakly-supervised setting, the dataset consists of images and corresponding annotations that are relatively easy to obtain, such as tags/labels of objects present in the image.',
    datasets: ["PASCAL VOC", "ScribbleSup", "SEN12MS", "ACDC Scribbles"],
    models: [
    ]
}

export default WeaklySupervised;