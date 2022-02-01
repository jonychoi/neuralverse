import domainadaptationimg from './imgs/domain adaptation.jpg';

export const DomainAdaptation = {
    title: 'Domain Adaptation',
    img: domainadaptationimg,
    description: "Domain adaptation is the task of adapting models across domains. This is motivated by the challenge where the test and training datasets fall from different data distributions due to some factor. Domain adaptation aims to build machine learning models that can be generalized into a target domain and dealing with the discrepancy across domain distributions.",
    datasets: ["MNIST", "SVHN", "HMDB51", "Office-Home", "Office-31", "USPS", "SYNTHIA", "GTA5", "GTSRB", "OpenSubtitles"],
    subtasks: [
        {
            title: 'Semantic Segmentation'
        },
        {
            title: 'Medical Image Segmentation'
        },
        {
            title: "Panoptic Segmentation"
        },
        {
            title: "3D Semantic Segmentation",
        },
        {
            title: "Scene Segmentation",
        },
        {
            title: "Weakly-Supervised Semantic Segmentation"
        }
    ]
}

export default DomainAdaptation;