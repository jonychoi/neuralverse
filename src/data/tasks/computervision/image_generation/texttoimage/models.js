import articles from './articles';

export const models = [
    {
        writer_id: 'Neuralverse',
        title: "DALL_E",
        subtitle: "Creating Images from Text",
        img: "https://cdn.openai.com/research-covers/dall-e/2x-no-mark.jpg",
        imgcredit: {
            name: "DALL·E: Creating Images from Text",
            url: "https://openai.com/blog/dall-e/",
        },
        // demo: {
        //     title: "DALL·E mini",
        //     subtitle: "Generate images from text",
        //     querytitle: "What do you want to see?",
        //     type: "image-generation/texttoimage",
        //     api: "https://hf.space/streamlitiframe/flax-community/dalle-mini/+",
        //     defaultSec: 10,
        // },
        paper: {
            name: "Zero-Shot Text-to-Image Generation",
            paper: "https://arxiv.org/abs/2102.12092",
            img: "https://cdn.openai.com/research-covers/dall-e/2x-no-mark.jpg",
            description: "Text-to-image generation has traditionally focused on finding better modeling assumptions for training on a fixed dataset. These assumptions might involve complex architectures, auxiliary losses, or side information such as object part labels or segmentation masks supplied during training. We describe a simple approach for this task based on a transformer that autoregressively models the text and image tokens as a single stream of data. With sufficient data and scale, our approach is competitive with previous domain-specific models when evaluated in a zero-shot fashion.",
            authors: ["Aditya Ramesh, Mikhail Pavlov, Gabriel Goh, Scott Gray, Chelsea Voss, Alec Radford, Mark Chen, Ilya Sutskever"],
            published_date: "24 Feb 2021",
        },
        benchmark: false,
        studio: false,
        code: {
            url: "https://github.com/openai/DALL-E",
            lib: "pytorch",
            official: true,
            colab: "https://colab.research.google.com/gist/afiaka87/b29213684a1dd633df20cab49d05209d/train_dalle_pytorch.ipynb",
        },
        task: {
            tasks: ["Image Generation", "Text-to-Image Generation", "Zero-Shot Text-to-Image Generation"],
            datasets: ["ImageNet", "COCO", "Conceptual Captions", "YFCC100M"],
        },
        articles: articles,
    },
]

export default models;