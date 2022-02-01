import fewshotlearningimg from './imgs/fewshotlearning.png';

export const FewShotLearning = {
    title: 'Few Shot Learning',
    img: fewshotlearningimg,
    datasets: ["ImageNet", "GLUE", "CUB-200-2011", "SST", "MRPC", "PASCAL-5i", "Meta-Dataset", "MR", "Paris-Lille-3D", "SUN397"],
    description: "Few-Shot Learning is an example of meta-learning, where a learner is trained on several related tasks, during the meta-training phase, so that it can generalize well to unseen (but related) tasks with just few examples, during the meta-testing phase. An effective approach to the Few-Shot Learning problem is to learn a common representation for various tasks and train task specific classifiers on top of this representation.",
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

export default FewShotLearning;