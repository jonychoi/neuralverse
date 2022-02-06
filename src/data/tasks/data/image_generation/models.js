import jojo from './imgs/jojo.png';

export const models = [
    {
        writer_id: 'Neuralverse',
        title: "JoJoGAN",
        subtitle: "One Shot Face Stylization",
        img: jojo,
        demo: {
            type: "image-generation",
            api: "https://hf.space/gradioiframe/akhaliq/JoJoGAN/+/api/predict/",
            defaultSec: 10,
            models: ['JoJo', 'Disney', 'Jinx', 'Caitlyn', 'Yasuho', 'Arcane Multi', 'Art', 'Spider-Verse']
        },
        benchmark: false,
        studio: false,
        paper: {
            name: "JoJoGAN: One Shot Face Stylization",
            img: jojo,
            description: "A style mapper applies some fixed style to its input images (so, for example, taking faces to cartoons). This paper describes a simple procedure -- JoJoGAN -- to learn a style mapper from a single example of the style. JoJoGAN uses a GAN inversion procedure and StyleGAN's style-mixing property to produce a substantial paired dataset from a single example style. The paired dataset is then used to fine-tune a StyleGAN. An image can then be style mapped by GAN-inversion followed by the fine-tuned StyleGAN. JoJoGAN needs just one reference and as little as 30 seconds of training time. JoJoGAN can use extreme style references (say, animal faces) successfully. Furthermore, one can control what aspects of the style are used and how much of the style is applied. Qualitative and quantitative evaluation show that JoJoGAN produces high quality high resolution images that vastly outperform the current state-of-the-art.",
            authors: ["Min Jin Chong", "David Forsyth"],
            paper: "https://arxiv.org/abs/2112.11641v2",
            published_date: "22 Dec 2021",
        },
        code: {
            url: "https://github.com/mchong6/JoJoGAN",
            lib: "pytorch",
            official: true,
            colab: "https://colab.research.google.com/github/mchong6/JoJoGAN/blob/main/stylize.ipynb",
        },
        task: {
            tasks: ["Image Stylization", "One-Shot Face Stylization"],
            datasets: [],
            paperswithcode: "https://paperswithcode.com/paper/jojogan-one-shot-face-stylization-1",
        }
    }
]

export default models;