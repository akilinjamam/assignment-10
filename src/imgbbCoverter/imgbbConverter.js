

const imgbbConverter = (imgFile, setImg) => {
    const imgStorageKey = 'a7d23ad727734bb709b70dc5aa33543f';
    const formData = new FormData();
    formData.append('image', imgFile);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setImg(result?.data?.url);

        })
}

export default imgbbConverter;