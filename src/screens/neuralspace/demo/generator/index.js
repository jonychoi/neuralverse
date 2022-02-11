import React from 'react';
import ImagetoImage from './imagetoimage';
import TexttoImage from './texttoimage';

export const Generator = ({model, open, setOpen, darkMode, subtype}) => {
    return (
        <>
            {subtype == "imagetoimage" && <ImagetoImage model={model} open={open} setOpen={setOpen} darkMode={darkMode} />}
            {subtype == "texttoimage" && <TexttoImage model={model} open={open} setOpen={setOpen} darkMode={darkMode} />}
        </>
    )
}

export default Generator;