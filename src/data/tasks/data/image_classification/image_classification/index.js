import imageclassification from './imgs/image classification.jpeg';

export const ImageClassification = {
    title: 'Image Classification',
    img: imageclassification,
    description: <p><strong>Image Classification</strong> is a fundamental task that attempts to comprehend an entire image as a whole. The goal is to classify the image by assigning it to a specific label. Typically, Image Classification refers to images in which only one object appears and is analyzed. In contrast, object detection involves both classification and localization tasks, and is used to analyze more realistic cases in which multiple objects may exist in an image.</p>,
    datasets: ["CIFAR-10", "ImageNet", "MNIST", "CIFAR-100", "SVHN", "CelebA", "Fashion-MNIST", "CUB-200-2011", "STL-10", "Places"],
    models: [
        
    ]
}

export default ImageClassification;