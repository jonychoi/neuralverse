import partial from './imgs/partial.png';

export const Partial = {
    title: 'Partial Domain Adaptation',
    img: partial,
    imgcredit: {
        name: "Importance Weighted Adversarial Nets for Partial Domain Adaptation",
        url: "https://arxiv.org/pdf/1702.05464v1.pdf",
    },
    descriptioncredit: {
        name: "Deep Residual Correction Network for Partial Domain Adaptation",
        url: "https://arxiv.org/abs/2004.04914",
    },
    description: <p><strong>Partial Domain Adaptation</strong> is a transfer learning paradigm, which manages to transfer relevant knowledge from a large-scale source domain to a small-scale target domain.</p>,
    datasets: ["ImageNet", "Office-Home", "Office-31", "DomainNet", "VisDA-2017"],
    models: [
        
    ]
}

export default Partial;