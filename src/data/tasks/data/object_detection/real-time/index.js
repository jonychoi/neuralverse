import models from "./models";

export const RealTime = {
    title: 'Real-Time Object Detection',
    img: "https://miro.medium.com/max/3600/1*QOGcvHbrDZiCqTG6THIQ_w.png",
    imgcredit: "https://jonathan-hui.medium.com/real-time-object-detection-with-yolo-yolov2-28b1b93e2088",
    description: "Real-time object detection is the task of doing object detection in real-time with fast inference while maintaining a base level of accuracy.",
    datasets: ["COCO", "PASCAL VOC", "PASCAL VOC 2007", "Kvasir-SEG", "Kvasir", "Kvasir-Instrument", "Endotect Polyp Segmentation Challenge Dataset", "Hyper-Kvasir Dataset"],
    models: models,
}

export default RealTime;