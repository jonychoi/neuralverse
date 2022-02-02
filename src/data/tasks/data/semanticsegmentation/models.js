export const models = [
    {
        writer_id: 'Neuralverse',
        title: "U-Net",
        subtitle: "Convolutional Networks for Biomedical Image Segmentation",
        img: "https://www.researchgate.net/profile/Yanfeng-Liu-5/publication/338531111/figure/fig3/AS:846138370433024@1578746516002/Semantic-segmentation-on-a-street-view-in-the-CityScape-dataset-3.jpg",
        demo: false,
        benchmark: true,
        studio: true,
        paper: {
            name: "U-Net: Convolutional Networks for Biomedical Image Segmentation",
            img: "https://production-media.paperswithcode.com/thumbnails/paper/1505.04597.jpg",
            description: 'There is large consent that successful training of deep networks requires many thousand annotated training samples. In this paper, we present a network and training strategy that relies on the strong use of data augmentation to use the available annotated samples more efficiently. The architecture consists of a contracting path to capture context and a symmetric expanding path that enables precise localization. We show that such a network can be trained end-to-end from very few images and outperforms the prior best method (a sliding-window convolutional network) on the ISBI challenge for segmentation of neuronal structures in electron microscopic stacks. Using the same network trained on transmitted light microscopy images (phase contrast and DIC) we won the ISBI cell tracking challenge 2015 in these categories by a large margin. Moreover, the network is fast. Segmentation of a 512x512 image takes less than a second on a recent GPU. The full implementation (based on Caffe) and the trained networks are available at http://lmb.informatik.uni-freiburg.de/people/ronneber/u-net .',
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
            featured: "Ranked #1 on Colorectal Gland Segmentation: on CRAG (DiceOC metric)",
            tasks: ["Cell Segmentation", "Medical Image Segmentation", "Multi-tissue Nucleus Segmentation", "Pancreas Segmentation", "Retinal Vessel Segmentation", "Semantic Segmentation", "Skin Cancer Segmentation"],
            datasets: ["DRIVE", "STARE", "LUNA", "Kvasir-SEG", "CHASE_DB1", "Kvasir", "CVC-ClinicDB", "Kumar", "Kvasir-Instrument", "RITE", "PhC-U373"],
            paperswithcode: "https://paperswithcode.com/paper/u-net-convolutional-networks-for-biomedical",
        }
    }
]

export default models;