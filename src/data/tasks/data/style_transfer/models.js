export const models = [
    {
        writer_id: 'Neuralverse',
        title: "Adain",
        subtitle: "Real-time with Adaptive Instance Normalization",
        img: "https://miro.medium.com/max/1050/1*-O7XstBEW-miUNtPGsKw7A.png",
        imgcredit: {
            name: "Adain : A Machine Learning Model for Style Transfer",
            url: "https://medium.com/axinc-ai/adain-a-machine-learning-model-for-style-transfer-341b242c554b",
        },
        demo: {
            type: "style-transfer",
            api: "https://hf.space/gradioiframe/aravinds1811/neural-style-transfer/+/api/predict/",
            defaultSec: 10,
        },
        benchmark: true,
        studio: true,
        paper: {
            name: "Arbitrary Style Transfer in Real-time with Adaptive Instance Normalization",
            img: "https://medium.com/axinc-ai/adain-a-machine-learning-model-for-style-transfer-341b242c554b",
            description: "Gatys et al. recently introduced a neural algorithm that renders a content image in the style of another image, achieving so-called style transfer. However, their framework requires a slow iterative optimization process, which limits its practical application. Fast approximations with feed-forward neural networks have been proposed to speed up neural style transfer. Unfortunately, the speed improvement comes at a cost: the network is usually tied to a fixed set of styles and cannot adapt to arbitrary new styles. In this paper, we present a simple yet effective approach that for the first time enables arbitrary style transfer in real-time. At the heart of our method is a novel adaptive instance normalization (AdaIN) layer that aligns the mean and variance of the content features with those of the style features. Our method achieves speed comparable to the fastest existing approach, without the restriction to a pre-defined set of styles. In addition, our approach allows flexible user controls such as content-style trade-off, style interpolation, color & spatial controls, all using a single feed-forward neural network.",
            authors: ["Xun Huang", "Serge Belongie"],
            paper: "https://arxiv.org/abs/1703.06868v2",
            published_date: "20 Mar 2017",
            conference: {
                name: "ICCV 2017",
                paper: "https://openaccess.thecvf.com/content_ICCV_2017/papers/Huang_Arbitrary_Style_Transfer_ICCV_2017_paper.pdf",
                abstract: "https://openaccess.thecvf.com/content_iccv_2017/html/Huang_Arbitrary_Style_Transfer_ICCV_2017_paper.html",
            }
        },
        code: {
            url: "https://github.com/xunhuang1995/AdaIN-style",
            lib: "torch",
            official: true,
            colab: "",
        },
        task: {
            featured: "",
            tasks: ["Style Transfer"],
            datasets: ["COCO"],
            paperswithcode: "https://paperswithcode.com/paper/arbitrary-style-transfer-in-real-time-with",
        }
    }
]

export default models;