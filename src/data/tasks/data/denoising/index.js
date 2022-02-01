import image from './image';
import saltandpepper from './saltandpepper';

export const Denoising = {
    title: 'Denoising',
    img: "https://production-media.paperswithcode.com/thumbnails/task/task-0000000813-398eae41_lgoZLWN.jpg",
    imgcredit: {
      name: "Beyond a Gaussian Denoiser",
      url: "https://arxiv.org/pdf/1608.03981v1.pdf",
    },
    description: "Denoising is the task of removing noise from an image.",
    datasets: ["SIDD", "CBSD68", "BirdSong", "PolyU Dataset", "FMD", "Raider", "CRVD", "NIND", "TTS-Portuguese Corpus", "PointDenoisingBenchmark"],
    subtasks: [
        image,
        saltandpepper,
    ]
}

export default Denoising;