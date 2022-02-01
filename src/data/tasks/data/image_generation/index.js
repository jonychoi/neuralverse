import conditional from './conditional';
import face from './face';
import imagetoimagetranslation from "./imagetoimagetranslation";
import texttoimage from './texttoimage';
import imageinpaiting from './image_inpainting';

export const ImageGeneration = {
    title: 'Image Generation',
    img: "https://raw.githubusercontent.com/openai/pixel-cnn/master/data/pixelcnn_samples.png",
    imgcredit: {
        name: "PixelCNN++",
        url: "https://github.com/openai/pixel-cnn",
    },
    description: <p>Image generation (synthesis) is the task of generating new images from an existing dataset.
    <ul>
    <li>Unconditional generation refers to generating samples unconditionally from the dataset, i.e. </li>
    <li><a href="https://neuralverse.us/space/conditional-image-generation">Conditional image generation</a> (subtask) refers to generating samples conditionally from the dataset, based on a label, i.e. .</li>
    </ul>
    In this section, you can find state-of-the-art leaderboards for unconditional generation. For conditional generation, and other types of image generations, refer to the subtasks.</p>,
    datasets: ["CIFAR-10", "ImageNet", "MNIST", "CIFAR-100", "Cityscapes", "CelebA", "Fashion-MNIST", "CUB-200-2011", "STL-10", "LSUN"],
    subtasks: [
        imagetoimagetranslation,
        imageinpaiting,
        conditional,
        face,
        texttoimage
    ]
}

export default ImageGeneration;