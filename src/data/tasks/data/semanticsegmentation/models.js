export const models = [
    {
        writer_id: 'Neuralverse',
        title: "U-Net",
        subtitle: "Convolutional Networks for Biomedical Image Segmentation",
        img: "https://www.researchgate.net/profile/Yanfeng-Liu-5/publication/338531111/figure/fig3/AS:846138370433024@1578746516002/Semantic-segmentation-on-a-street-view-in-the-CityScape-dataset-3.jpg",
        demo: true,
        benchmark: true,
        studio: true,
        paper: {
            name: "U-Net: Convolutional Networks for Biomedical Image Segmentation",
            img: "https://production-media.paperswithcode.com/thumbnails/paper/1505.04597.jpg",
            description: 'Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.',
            authors: ["Olaf Ronneberger", "Philipp Fischer", "Thomas Brox"],
            paper: "https://arxiv.org/abs/1505.04597v1",
            published_date: "18 May 2015",
        },
        code: {
            url: "https://github.com/labmlai/annotated_deep_learning_paper_implementations",
            lib: "torch",
            official: false
        },
        task: {
            feautred: "Ranked #1 on Colorectal Gland Segmentation: on CRAG (DiceOC metric)",
            tasks: ["Cell Segmentation", "Medical Image Segmentation", "Multi-tissue Nucleus Segmentation", "Pancreas Segmentation", "Retinal Vessel Segmentation", "Semantic Segmentation", "Skin Cancer Segmentation"],
            datasets: ["DRIVE", "STARE", "LUNA", "Kvasir-SEG", "CHASE_DB1", "Kvasir", "CVC-ClinicDB", "Kumar", "Kvasir-Instrument", "RITE", "PhC-U373"],
            paperswithcode: "https://paperswithcode.com/paper/u-net-convolutional-networks-for-biomedical",
        }
    }
]

export default models;