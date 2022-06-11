import axios from "axios";

const searchApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYWxleHphbWEiLCJhIjoiY2w0NzZ6MnBlMDR3ZzNjcDg5cjRzZ3drZCJ9.DR20CmZnuNgvLqF6vh272A'
    }
})

export default searchApi;

