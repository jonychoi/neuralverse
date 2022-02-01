export const RGBDSalient = {
    title: 'RGB Salient Object Detection',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000001687-6a8a8e68_pk6rhSI.jpg",
    imgcredit: {
        name: "Rethinking RGB-D Salient Object Detection: Models, Data Sets, and Large-Scale Benchmarks, TNNLS20",
        url: "https://ieeexplore.ieee.org/abstract/document/9107477",
    },
    description: "RGB-D Salient object detection (SOD) aims at distinguishing the most visually distinctive objects or regions in a scene from the given RGB and Depth data. It has a wide range of applications, including video/image segmentation, object recognition, visual tracking, foreground maps evaluation, image retrieval, content-aware image editing, information discovery, photosynthesis, and weakly supervised semantic segmentation. Here, depth information plays an important complementary role in finding salient objects. Online benchmark: http://dpfan.net/d3netbenchmark.",
    datasets: ["NLPR", "LFSD", "NJU2K", "SIP", "DES", "ReDWeb-S"],
    models: [
        
    ]
}

export default RGBDSalient;