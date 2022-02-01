import selfsupervbimg from './imgs/selfsupervb.png';

export const SelfSupervisedLearning = {
    title: "Self-Supervised Learning",
    img: selfsupervbimg,
    description: "Self-Supervised Learning is proposed for utilizing unlabeled data with the success of supervised learning. Producing a dataset with good labels is expensive, while unlabeled data is being generated all the time. The motivation of Self-Supervised Learning is to make use of the large amount of unlabeled data. The main idea of Self-Supervised Learning is to generate the labels from unlabeled data, according to the structure or characteristics of the data itself, and then train on this unsupervised data in a supervised manner. Self-Supervised Learning is wildly used in representation learning to make a model learn the latent features of the data. This technique is often employed in computer vision, video processing and robot control.",
    datasets: ["STL-10", "NSynth", "AVA", "2D-3D-S", "CATER", "AVA-ActiveSpeaker", "MotionSense"],
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
    ],
}

export default SelfSupervisedLearning;