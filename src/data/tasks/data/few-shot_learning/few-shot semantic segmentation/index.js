import fewshotsegmentation from './imgs/fewshotsegmentation.png';

export const FewShotSegmentation = {
    title: 'Few-Shot Semantic Segmentation',
    img: fewshotsegmentation,
    imgcredit: {
        name: "Cost Aggregation Is All You Need for Few-Shot Segmentation",
        url: "https://arxiv.org/pdf/2112.11685v1.pdf",
    },
    descriptioncredit: {
        name: "Cost Aggregation Is All You Need for Few-Shot Segmentation",
        url: "https://arxiv.org/pdf/2112.11685v1.pdf",
    },
    description: "few-shot segmentation task has been introduced to address this, where only a handful of support samples are provided to make a mask prediction for a query, which mitigates the reliance on the labeled data.",
    datasets: ["PASCAL-5i", "FSS-1000"],
    models: [
        
    ]
}

export default FewShotSegmentation;