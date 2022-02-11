import models from './models';

export const TextToImage = {
    title: 'Text-to-Image Generation',
    img: "https://production-media.paperswithcode.com/thumbnails/task/2689c63a-5442-4934-861a-a1d76e2a0838.jpg",
    imgcredit: {
        name: "StackGAN++: Realistic Image Synthesis with Stacked Generative Adversarial Networks",
        url: "https://arxiv.org/pdf/1710.10916v3.pdf",
    },
    descriptioncredit: {
        name: "FuseDream: A Hands-On Tutorial on This Text-to-Image Generation Tool",
        url: "https://analyticsindiamag.com/fusedream-a-hands-on-tutorial-on-this-text-to-image-generation-tool/#:~:text=Text%2Dto%2Dimage%20generation%2C,they%20should%20be%20semantically%20related.",
    },
    description: "Text-to-image generation, which generates realistic images that are semantically related to a given text input, is a landmark task in multi-modal machine learning. This is a difficult task because the generative model must comprehend the text, image and how they should be semantically related.",
    datasets: ["COCO", "CUB-200-2011", "Oxford 102 Flower", "100DOH", "Multi-Modal CelebA-HQ"],
    models: models
}

export default TextToImage;