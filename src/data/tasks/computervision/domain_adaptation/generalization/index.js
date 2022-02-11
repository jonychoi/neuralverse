import generalization from './imgs/generalization.png';

export const DomainGeneralization = {
    title: 'Domain Generalization',
    img: generalization,
    imgcredit: {
        name: "CutMix: Regularization Strategy to Train Strong Classifiers with Localizable Features",
        url: "https://arxiv.org/pdf/1905.04899v2.pdf",
    },
    descriptioncredit: {
        name: "Diagram Image Retrieval using Sketch-Based Deep Learning and Transfer Learning",
        url: "https://arxiv.org/abs/2004.10780",
    },
    description: <p>The idea of <strong>Domain Generalization</strong> is to learn from one or multiple training domains, to extract a domain-agnostic model which can be applied to an unseen domain</p>,
    datasets: ["ImageNet", "Fashion-MNIST", "Office-Home", "PACS", "ImageNet-C", "DomainNet", "ImageNet-A", "ImageNet-R", "Stylized ImageNet", "ImageNet-Sketch"],
    models: [
        
    ]
}

export default DomainGeneralization;