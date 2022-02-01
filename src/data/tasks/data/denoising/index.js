import denoisingimg from './imgs/denoising.jpg'

export const Denoising = {
    title: 'Denoising',
    img: denoisingimg,
    description: "Denoising is the task of removing noise from an image.",
    datasets: ["SIDD", "CBSD68", "BirdSong", "PolyU Dataset", "FMD", "Raider", "CRVD", "NIND", "TTS-Portuguese Corpus", "PointDenoisingBenchmark"],
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

export default Denoising;