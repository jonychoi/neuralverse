export const models = [
    {
        writer_id: 'Neuralverse',
        title: "Objectron",
        subtitle: "A Large Scale Dataset of Object-Centric Videos in the Wild with Pose Annotations",
        img: "https://github.com/google-research-datasets/Objectron/blob/master/docs/images/objectron_samples.gif?raw=true",
        imgcredit: {
            name: "Objectron",
            url: "https://github.com/google-research-datasets/Objectron",
        },
        demo: false,
        benchmark: true,
        studio: true,
        paper: {
            name: "Objectron: A Large Scale Dataset of Object-Centric Videos in the Wild with Pose Annotations",
            img: "https://github.com/google-research-datasets/Objectron/blob/master/docs/images/objectron_samples.gif?raw=true",
            description: "3D object detection has recently become popular due to many applications in robotics, augmented reality, autonomy, and image retrieval. We introduce the Objectron dataset to advance the state of the art in 3D object detection and foster new research and applications, such as 3D object tracking, view synthesis, and improved 3D shape representation. The dataset contains object-centric short videos with pose annotations for nine categories and includes 4 million annotated images in 14,819 annotated videos. We also propose a new evaluation metric, 3D Intersection over Union, for 3D object detection. We demonstrate the usefulness of our dataset in 3D object detection tasks by providing baseline models trained on this dataset. Our dataset and evaluation source code are available online at http://www.objectron.dev",
            authors: ["Adel Ahmadyan", "Liangkai Zhang", "Jianing Wei", "Artsiom Ablavatski", "Matthias Grundmann"],
            paper: "https://arxiv.org/abs/2012.09988v1",
            published_date: "18 Dec 2020",
            conference: {
                name: "CVPR 2021",
                paper: "https://openaccess.thecvf.com/content/CVPR2021/papers/Ahmadyan_Objectron_A_Large_Scale_Dataset_of_Object-Centric_Videos_in_the_CVPR_2021_paper.pdf",
                abstract: "https://openaccess.thecvf.com/content/CVPR2021/html/Ahmadyan_Objectron_A_Large_Scale_Dataset_of_Object-Centric_Videos_in_the_CVPR_2021_paper.html",
            }
        },
        code: {
            url: "https://github.com/google-research-datasets/Objectron",
            lib: "tensorflow",
            official: true,
            colab: "",
        },
        task: {
            featured: "Ranked #2 on Monocular 3D Object Detection on Google Objectron",
            tasks: ["3D Object Detection", "3D Object Tracking", "3D Shape Representation", "Image Retrieval", "Monocular 3D Object Detection", "Object Detection", "Object Tracking"],
            datasets: [" Objectron", "ImageNet", "ShapeNet", "LINEMOD"],
            paperswithcode: "https://paperswithcode.com/paper/objectron-a-large-scale-dataset-of-object",
        }
    }
]

export default models;