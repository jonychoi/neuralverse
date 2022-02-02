import styletransferimg from './imgs/style transfer.jpg';
import models from './models';

export const StyleTransfer =  {
    title: 'Style Transfer',
    img: styletransferimg,
    imgcredit: {
        name: " A Neural Algorithm of Artistic Style",
        url: "https://arxiv.org/pdf/1508.06576v2.pdf",
    },
    description: "Style transfer is the task of changing the style of an image in one domain to the style of an image in another domain.",
    datasets: ["DukeMTMC-reID", "MPI Sintel", "MPIIGaze", "iKala", "LaMem", "Touchdown Dataset", "POP909", "WebCaricature Dataset", "PASTEL", "DeepWriting"],
    subtasks: [
        
    ],
    models: models
}

export default StyleTransfer;