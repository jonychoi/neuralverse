export const models = [
    {
        title: "DIS",
        subtitle: "Highly Accurate Dichotomous Image Segmentation",
        img: 'https://raw.githubusercontent.com/xuebinqin/DIS/main/figures/dis5k-v1-sailship.jpeg',
        demo: {
            type: "object-detection",
            api: "https://hf.space/embed/ECCV2022/dis-background-removal/+/api/predict",
            defaultSec: 5,
        },
        benchmark: false,
        studio: false,
        paper: {
            name: "DIS: Highly Accurate Dichotomous Image Segmentation",
            img: "",
            description: "We present a systematic study on a new task called dichotomous image segmentation (DIS) , which aims to segment highly accurate objects from natural images. To this end, we collected the first large-scale DIS dataset, called DIS5K, which contains 5,470 high-resolution (e.g., 2K, 4K or larger) images covering camouflaged, salient, or meticulous objects in various backgrounds. DIS is annotated with extremely fine-grained labels. Besides, we introduce a simple intermediate supervision baseline (IS-Net) using both feature-level and mask-level guidance for DIS model training. IS-Net outperforms various cutting-edge baselines on the proposed DIS5K, making it a general self-learned supervision network that can facilitate future research in DIS. Further, we design a new metric called human correction efforts (HCE) which approximates the number of mouse clicking operations required to correct the false positives and false negatives. HCE is utilized to measure the gap between models and real-world applications and thus can complement existing metrics. Finally, we conduct the largest-scale benchmark, evaluating 16 representative segmentation models, providing a more insightful discussion regarding object complexities, and showing several potential applications (e.g., background removal, art design, 3D reconstruction). Hoping these efforts can open up promising directions for both academic and industries.",
            authors: ["Xuebin Qin", "Luc Van Gool"],
            paper: "https://arxiv.org/pdf/1804.02767v1",
            published_date: "6 Mar 2022",
            conference: {
                name: "ECCV 2022",
                paper: "https://arxiv.org/pdf/2203.03041.pdf",
                abstract: "https://arxiv.org/abs/2203.03041v4",
            }
        },
        code: {
            url: "https://github.com/xuebinqin/DIS",
            official: true,
            lib: "",
        },
        task:{
            tasks: ["3D Reconstruction", "Image Segmentation", "Semantic Segmentation"],
            datasets: ["PASCAL-S"],
            paperswithcode: "https://paperswithcode.com/paper/highly-accurate-dichotomous-image",
        },
    }
];

export default models;