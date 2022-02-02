export const models = [
    {
        writer_id: 'Neuralverse',
        title: "DETR",
        subtitle: "End-to-End Object Detection with Transformers",
        img: "https://alcinos.github.io/detr_page/assets/elephants.png",
        imgcredit: {
            name: "DETR: End-to-End Object Detection With Transformers",
            url: "https://alcinos.github.io/detr_page/",
        },
        demo: true,
        benchmark: true,
        studio: true,
        paper: {
            name: "End-to-End Object Detection with Transformers",
            img: "https://alcinos.github.io/detr_page/assets/overview.jpg",
            description: "We present a new method that views object detection as a direct set prediction problem. Our approach streamlines the detection pipeline, effectively removing the need for many hand-designed components like a non-maximum suppression procedure or anchor generation that explicitly encode our prior knowledge about the task. The main ingredients of the new framework, called DEtection TRansformer or DETR, are a set-based global loss that forces unique predictions via bipartite matching, and a transformer encoder-decoder architecture. Given a fixed small set of learned object queries, DETR reasons about the relations of the objects and the global image context to directly output the final set of predictions in parallel. The new model is conceptually simple and does not require a specialized library, unlike many other modern detectors. DETR demonstrates accuracy and run-time performance on par with the well-established and highly-optimized Faster RCNN baseline on the challenging COCO object detection dataset. Moreover, DETR can be easily generalized to produce panoptic segmentation in a unified manner. We show that it significantly outperforms competitive baselines. Training code and pretrained models are available at https://github.com/facebookresearch/detr.",
            authors: ["Nicolas Carion", "Francisco Massa", "Gabriel Synnaeve", "Nicolas Usunier", "Alexander Kirillov, Sergey Zagoruyko"],
            paper: "https://arxiv.org/abs/2005.12872v3",
            published_date: "28 May 2020",
            conference: {
                name: "ECCV 2020",
                paper: "https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123460205.pdf",
                abstract: "https://www.ecva.net/papers/eccv_2020/papers_ECCV/html/832_ECCV_2020_paper.php",
            }
        },
        code: {
            url: "https://github.com/facebookresearch/detr",
            lib: "torch",
            official: true,
            colab: "https://colab.research.google.com/github/facebookresearch/detr/blob/colab/notebooks/detr_demo.ipynb",
        },
        task: {
            featured: "Ranked #7 on Panoptic Segmentation on COCO minival",
            tasks: ["Object Detection", "Panoptic Segmentation"],
            datasets: ["COCO"],
            paperswithcode: "https://paperswithcode.com/paper/end-to-end-object-detection-with-transformers",
        }
    }
]

export default models;