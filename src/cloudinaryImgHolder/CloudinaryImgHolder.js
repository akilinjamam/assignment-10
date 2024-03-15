const cloudinaryImgHolder = (imgFile, imgHolder) => {

    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("upload_preset", `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`);
    formData.append("cloud_name", `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}`);
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(result => {
            imgHolder(result?.secure_url);
            console.log(result?.secure_url);
        })
}


export default cloudinaryImgHolder;