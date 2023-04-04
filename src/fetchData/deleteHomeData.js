import axios from "axios"

const deleteData = async (id, tourArea) => {
    if (tourArea === 'home') {
        const response = await axios.delete(`http://localhost:5000/api/v1/homeEvents/${id}`)
            .then(r => {
                console.log(r)
            })
            .catch((err) => {
                console.log(err);
            });

        const globalData = response;
        return globalData;
    }

    if (tourArea === 'global') {
        const response = await axios.delete(`http://localhost:5000/api/v1/globalEvents/${id}`)
            .then(r => {
                console.log(r)
            })
            .catch((err) => {
                console.log(err);
            })
        const globalData = response;
        return globalData;
    }
}

export default deleteData;