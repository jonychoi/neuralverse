import yolov5img from './imgs/yolov5.png';
import yolov3img from './imgs/yolov3.png';

export const RealTime = {
    title: 'Real-Time Object Detection',
    img: "https://miro.medium.com/max/3600/1*QOGcvHbrDZiCqTG6THIQ_w.png",
    imgcredit: "https://jonathan-hui.medium.com/real-time-object-detection-with-yolo-yolov2-28b1b93e2088",
    description: "Real-time object detection is the task of doing object detection in real-time with fast inference while maintaining a base level of accuracy.",
    datasets: ["COCO", "PASCAL VOC", "PASCAL VOC 2007", "Kvasir-SEG", "Kvasir", "Kvasir-Instrument", "Endotect Polyp Segmentation Challenge Dataset", "Hyper-Kvasir Dataset"],
    models: [
        {
            title: "YOLOv5",
            img: yolov5img,
            description: "",
        },
        {
            title: "YOLOv3",
            subtitle: "An Incremental Improvement",
            papername: "YOLOv3: An Incremental Improvement",
            img: yolov3img,
            paper: "https://arxiv.org/pdf/1804.02767v1",
            code: "https://github.com/AlexeyAB/darknet",
            date: "8 Apr 2018",
            authors: ["Joseph Redmon", "Ali Farhadi"],
            description: "We present some updates to YOLO! We made a bunch of little design changes to make it better. We also trained this new network that's pretty swell. It's a little bigger than last time but more accurate. It's still fast though, don't worry. At 320x320 YOLOv3 runs in 22 ms at 28.2 mAP, as accurate as SSD but three times faster. When we look at the old .5 IOU mAP detection metric YOLOv3 is quite good. It achieves 57.9 mAP@50 in 51 ms on a Titan X, compared to 57.5 mAP@50 in 198 ms by RetinaNet, similar performance but 3.8x faster. As always, all the code is online at https://pjreddie.com/yolo/",
            tasks: ["Object Detection", "Real-Time Object Detection"],
            datasets: ["COCO"],
        }
    ]
}

export default RealTime;