import axios from 'axios'

const params = {
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_STRAPI_KEY
    }
}



export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(import.meta.env.VITE_BASE_URL + url, params)
        return data
    } catch(err) {
        console.log(err)
        return err
    }
}

