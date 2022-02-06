export const models = [
    {
        writer_id: 'Neuralverse',
        title: "VRT",
        subtitle: "A Video Restoration Transformer",
        img: "https://production-media.paperswithcode.com/thumbnails/papergithubrepo/b012d908-8a55-4b67-8fb4-9215663651d6.gif",
        imgcredit: {
            name: "VRT: A Video Restoration Transformer",
            url: "https://paperswithcode.com/paper/vrt-a-video-restoration-transformer",
        },
        demo: false,
        benchmark: true,
        studio: true,
        paper: {
            name: "VRT: A Video Restoration Transformer",
            img: "https://raw.githubusercontent.com/JingyunLiang/VRT/main/assets/framework.jpeg",
            description: "Video restoration (e.g., video super-resolution) aims to restore high-quality frames from low-quality frames. Different from single image restoration, video restoration generally requires to utilize temporal information from multiple adjacent but usually misaligned video frames. Existing deep methods generally tackle with this by exploiting a sliding window strategy or a recurrent architecture, which either is restricted by frame-by-frame restoration or lacks long-range modelling ability. In this paper, we propose a Video Restoration Transformer (VRT) with parallel frame prediction and long-range temporal dependency modelling abilities. More specifically, VRT is composed of multiple scales, each of which consists of two kinds of modules: temporal mutual self attention (TMSA) and parallel warping. TMSA divides the video into small clips, on which mutual attention is applied for joint motion estimation, feature alignment and feature fusion, while self attention is used for feature extraction. To enable cross-clip interactions, the video sequence is shifted for every other layer. Besides, parallel warping is used to further fuse information from neighboring frames by parallel feature warping. Experimental results on three tasks, including video super-resolution, video deblurring and video denoising, demonstrate that VRT outperforms the state-of-the-art methods by large margins () on nine benchmark datasets.",
            authors: ["Jingyun Liang", "JieZhang Cao", "Yuchen Fan", "Kai Zhang", "Rakesh Ranjan", "Yawei Li", "Radu Timofte", "Luc van Gool"],
            paper: "https://arxiv.org/abs/2005.12872v3",
            published_date: "28 Jan 2022",
            conference: {}
        },
        code: {
            url: "https://github.com/jingyunliang/vrt",
            lib: "torch",
            official: true,
            colab: "https://colab.research.google.com/gist/JingyunLiang/deb335792768ad9eb73854a8efca4fe0#file-vrt-demo-on-video-restoration-ipynb=",
        },
        task: {
            featured: "Ranked #7 on Panoptic Segmentation on COCO minival",
            tasks: ["Deblurring", "Denoising", "Image Restoration", "Motion Estimation", "Super-Resolution", "Video Denoising", "Video Restoration", "Video Super-Resolution"],
            datasets: ["GoPro"],
            paperswithcode: "https://paperswithcode.com/paper/vrt-a-video-restoration-transformer",
        }
    }
]

export default models;