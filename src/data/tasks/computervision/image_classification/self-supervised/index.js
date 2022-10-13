import React from 'react';

export const SelfSupervised = {
    title: 'Self-Supervised Image Classification',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000001822-74049cbf_Ww04ZD0.jpg",
    description: <p>
        This is the task of image classification using representations learnt with self-supervised learning. Self-supervised methods generally involve a pretext task that is solved to learn a good representation and a loss function to learn with. One example of a loss function is an autoencoder based loss where the goal is reconstruction of an image pixel-by-pixel. A more popular recent example is a contrastive loss, which measure the similarity of sample pairs in a representation space, and where there can be a varying target instead of a fixed target to reconstruct (as in the case of autoencoders).
        <br></br>
        {/* A common evaluation protocol is to train a linear classifier on top of (frozen) representations learnt by self-supervised methods. The leaderboards for the linear evaluation protocol can be found below. In practice, it is more common to fine-tune features on a downstream task. An alternative evaluation protocol therefore uses semi-supervised learning and finetunes on a % of the labels. The leaderboards for the finetuning protocol can be accessed <a href="https://www.neuralverse.us/neuralspace/semi-supervised-image-classification">here</a>.
        <br></br>
        You may want to read some blog posts before reading the papers and checking the leaderboards:

        <ul>
            <li>
                <a href="https://ankeshanand.com/blog/2020/01/26/contrative-self-supervised-learning.html">
                    Contrastive Self-Supervised Learning 
                </a>- Ankesh Anand
            </li>
            <li>
                <a href="https://amitness.com/2020/02/illustrated-self-supervised-learning/">
                    The Illustrated Self-Supervised Learning
                </a> - Amit Chaudhary</li>
            <li>
                <a href="https://www.fast.ai/2020/01/13/self_supervised/">
                    Self-supervised learning and computer vision
                </a> - Jeremy Howard</li>
            <li>
                <a href="https://lilianweng.github.io/lil-log/2019/11/10/self-supervised-learning.html">
                    Self-Supervised Representation Learning
                </a> - Lilian Weng
            </li>
        </ul>
        There is also Yann LeCun's talk at AAAI-20 which you can watch <a href="https://vimeo.com/390347111">here</a> (35:00+). */}
    </p>,
    datasets: ["ImageNet"],
    models: [
        
    ]
}

export default SelfSupervised;