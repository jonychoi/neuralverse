import superresolutionimg from './imgs/super resolution.jpg';

import image from './image';
import video from './video';
import _3dObject from './3dobject';

import models from './models';

export const SuperResolution = {
    title: 'Super Resolution',
    img: superresolutionimg,
    imgcredit: {
        name: "MemNet",
        url: "https://github.com/tyshiwo/MemNet",
    },
    description: "Super resolution is the task of taking an input of a low resolution (LR) and upscaling it to that of a high resolution.",
    datasets: ["Perceptual Similarity", "Vimeo90K", "xView", "PIRM", "General-100", "Flickr1024", "Stanford Light Field", "QMUL-SurvFace", "CATS", "TextZoom"],
    subtasks: [
       image,
       video,
      _3dObject, 
    ],
    models: models.concat(
        image.models,
        video.models,
        _3dObject.models,
    )
}

export default SuperResolution;