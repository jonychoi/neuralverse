import generalization from './generalization';
import unsupervised from './unsupervised';
import partial from './partial'

export const DomainAdaptation = {
    title: 'Domain Adaptation',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000000588-823db955.jpg",
    imgcredit: {
        name: "Unsupervised Image-to-Image Translation Networks",
        url: "https://arxiv.org/pdf/1703.00848v6.pdf",
    },
    description: "Domain adaptation is the task of adapting models across domains. This is motivated by the challenge where the test and training datasets fall from different data distributions due to some factor. Domain adaptation aims to build machine learning models that can be generalized into a target domain and dealing with the discrepancy across domain distributions.",
    datasets: ["MNIST", "SVHN", "HMDB51", "Office-Home", "Office-31", "USPS", "SYNTHIA", "GTA5", "GTSRB", "OpenSubtitles"],
    subtasks: [
        unsupervised,
        generalization,
        partial,
    ]
}

export default DomainAdaptation;