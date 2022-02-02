import yolov3img from './imgs/yolov3.png';

export const models = [
    {
        title: "YOLOv3",
        subtitle: "An Incremental Improvement",
        img: yolov3img,
        benchmark: false,
        studio: false,
        paper: {
            name: "YOLOv3: An Incremental Improvement",
            img: "",
            description: "We present some updates to YOLO! We made a bunch of little design changes to make it better. We also trained this new network that's pretty swell. It's a little bigger than last time but more accurate. It's still fast though, don't worry. At 320x320 YOLOv3 runs in 22 ms at 28.2 mAP, as accurate as SSD but three times faster. When we look at the old .5 IOU mAP detection metric YOLOv3 is quite good. It achieves 57.9 mAP@50 in 51 ms on a Titan X, compared to 57.5 mAP@50 in 198 ms by RetinaNet, similar performance but 3.8x faster. As always, all the code is online at https://pjreddie.com/yolo/",
            authors: ["Joseph Redmon", "Ali Farhadi"],
            paper: "https://arxiv.org/pdf/1804.02767v1",
            published_date: "8 Apr 2018",
        },
        code: {
            url: "https://github.com/AlexeyAB/darknet",
            official: true,
            lib: "",
        },
        task:{
            tasks: ["Object Detection", "Real-Time Object Detection"],
            datasets: ["COCO"],
            paperswithcode: "",
        },
    }
];

export default models;