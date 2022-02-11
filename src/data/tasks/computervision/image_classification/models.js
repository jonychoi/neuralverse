export const models = [
    {
        writer_id: 'Neuralverse',
        title: "ConvNeXt",
        subtitle: "A ConvNet for the 2020s",
        img: "https://production-media.paperswithcode.com/thumbnails/papergithubrepo/f50e5cde-ed50-4c24-96c0-656a1abb227a.jpg",
        demo: {
            type: "classification",
            api: "https://hf.space/gradioiframe/akhaliq/convnext/+/api/predict/",
            defaultSec: 3,
        },
        benchmark: true,
        studio: true,
        paper: {
            name: "A ConvNet for the 2020s",
            img: "https://production-media.paperswithcode.com/thumbnails/papergithubrepo/f50e5cde-ed50-4c24-96c0-656a1abb227a.jpg",
            description: 'The "Roaring 20s" of visual recognition began with the introduction of Vision Transformers (ViTs), which quickly superseded ConvNets as the state-of-the-art image classification model. A vanilla ViT, on the other hand, faces difficulties when applied to general computer vision tasks such as object detection and semantic segmentation. It is the hierarchical Transformers (e.g., Swin Transformers) that reintroduced several ConvNet priors, making Transformers practically viable as a generic vision backbone and demonstrating remarkable performance on a wide variety of vision tasks. However, the effectiveness of such hybrid approaches is still largely credited to the intrinsic superiority of Transformers, rather than the inherent inductive biases of convolutions. In this work, we reexamine the design spaces and test the limits of what a pure ConvNet can achieve. We gradually "modernize" a standard ResNet toward the design of a vision Transformer, and discover several key components that contribute to the performance difference along the way. The outcome of this exploration is a family of pure ConvNet models dubbed ConvNeXt. Constructed entirely from standard ConvNet modules, ConvNeXts compete favorably with Transformers in terms of accuracy and scalability, achieving 87.8% ImageNet top-1 accuracy and outperforming Swin Transformers on COCO detection and ADE20K segmentation, while maintaining the simplicity and efficiency of standard ConvNets.',
            authors: ["Zhuang Liu", "Hanzi Mao", "Chao-yuan Wu", "Christoph Feichtenhofer", "Trevor Darrell", "Saining Xie"],
            paper: "https://arxiv.org/abs/2201.03545v1",
            published_date: "10 Jan 2022",
            conference: {
               
            }
        },
        code: {
            url: "https://github.com/facebookresearch/ConvNeXt",
            lib: "pytorch",
            official: true,
            colab: "https://colab.research.google.com/drive/1CBYTIZ4tBMsVL5cqu9N_-Q3TBprqsfEO?usp=sharing",
        },
        task: {
            featured: "Ranked #1 on Domain Generalization on ImageNet-Sketch (using extra training data)",
            tasks: ["Domain Generalization", "Image Classification", "Object Detection", "Semantic Segmentation"],
            datasets: ["ImageNet", "COCO", "ADE20K", "ImageNet-C", "ImageNet-A", "ImageNet-R", "ImageNet-Sketch"],
            paperswithcode: "https://paperswithcode.com/paper/a-convnet-for-the-2020s",
        }
    },
    {
        writer_id: 'Neuralverse',
        title: "ViT",
        subtitle: "Transformers for Image Recognition at Scale",
        img: "https://1.bp.blogspot.com/-_mnVfmzvJWc/X8gMzhZ7SkI/AAAAAAAAG24/8gW2AHEoqUQrBwOqjhYB37A7OOjNyKuNgCLcBGAsYHQ/s1600/image1.gif",
        imgcredit: {
            name: "Vision Transformer",
            url: "https://ai.googleblog.com/2020/12/transformers-for-image-recognition-at.html",
        },
        demo: {
            type: "classification",
            api: "https://hf.space/gradioiframe/abidlabs/vision-transformer/+/api/predict/",
            defaultSec: 3,
        },
        benchmark: true,
        studio: true,
        paper: {
            name: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
            img: "https://1.bp.blogspot.com/-_mnVfmzvJWc/X8gMzhZ7SkI/AAAAAAAAG24/8gW2AHEoqUQrBwOqjhYB37A7OOjNyKuNgCLcBGAsYHQ/s1600/image1.gif",
            description: "While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring substantially fewer computational resources to train.",
            authors: ["Alexey Dosovitskiy", "Lucas Beyer", "Alexander Kolesnikov", "Dirk Weissenborn", "Xiaohua Zhai", "Thomas Unterthiner", "Mostafa Dehghani", "Matthias Minderer", "Georg Heigold", "Sylvain Gelly", "Jakob Uszkoreit, Neil Houlsby"],
            paper: "https://arxiv.org/abs/2010.11929v2",
            published_date: "22 Oct 2020",
            conference: {
                name: "ICLR 2021",
                paper: "https://openreview.net/pdf?id=YicbFdNTTy",
                abstract: "https://openreview.net/forum?id=YicbFdNTTy",
            }
        },
        code: {
            url: "https://github.com/google-research/vision_transformer",
            lib: "tensorflow",
            official: true,
            colab: "https://colab.research.google.com/github/google-research/vision_transformer/blob/master/vit_jax.ipynb",
        },
        task: {
            featured: "Ranked #1 on Fine-Grained Image Classification on Oxford 102 Flowers (Top 1 Accuracy metric, using extra training data)",
            tasks: ["Document Image Classification", "Fine-Grained Image Classification", "Image Classification"],
            datasets: ["CIFAR-10", "ImageNet", "CIFAR-100", "Oxford 102 Flower", "Tiny ImageNet", "JFT-300M", "Oxford-IIIT Pets"],
            paperswithcode: "https://paperswithcode.com/paper/an-image-is-worth-16x16-words-transformers-1",
        }
    }
]

export default models;