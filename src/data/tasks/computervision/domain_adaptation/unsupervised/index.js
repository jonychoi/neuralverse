import React from 'react';
import unsupervised from './imgs/unsupervised.png';

export const Unsupervised = {
    title: 'Unsupervised Domain Adaptation',
    img: unsupervised,
    imgcredit: {
        name: "Adversarial Discriminative Domain Adaptation",
        url: "https://arxiv.org/pdf/1702.05464v1.pdf",
    },
    descriptioncredit: {
        name: "Domain-Specific Batch Normalization for Unsupervised Domain Adaptation",
        url: "https://arxiv.org/abs/1906.03950",
    },
    description: <p><strong>Unsupervised Domain Adaptation</strong> is a learning framework to transfer knowledge learned from source domains with a large number of annotated training examples to target domains with unlabeled data only.</p>,
    datasets: ["ImageNet", "KITTI", "Market-1501", "Office-Home", "Office-31", "SYNTHIA", "GTA5", "ImageNet-C", "VisDA-2017", "Foggy Cityscapes"],
    models: [
        
    ]
}

export default Unsupervised;