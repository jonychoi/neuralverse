import React from 'react';

export const ImageImpainting = {
    title: 'Image Inpainting',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000000709-54774675.jpg",
    imgcredit: {
        name: "High-Resolution Image Inpainting with Iterative Confidence Feedback and Guided Upsampling",
        url: "https://arxiv.org/pdf/2005.11742.pdf",
    },
    description: <p><strong>Image Inpainting</strong> is a task of reconstructing missing regions in an image. It is an important problem in computer vision and an essential functionality in many imaging and graphics applications, e.g. object removal, image restoration, manipulation, re-targeting, compositing, and image-based rendering.</p>,
    datasets: ["ImageNet", "Places", "FFHQ", "CelebA-HQ", "ApolloScape", "Places365", "Fashion-Gen", "CASIA V2", "FVI", "FDF"],
    models: [
        
    ]
}

export default ImageImpainting;