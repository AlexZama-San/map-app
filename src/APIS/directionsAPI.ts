import axios from 'axios';


const directionsAPI = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
    params: {
        alternatives: false,
        geometries: "geojson",
        overview: "simplified",
        steps: false,
        access_token: 'pk.eyJ1IjoiYWxleHphbWEiLCJhIjoiY2w0NzZ6MnBlMDR3ZzNjcDg5cjRzZ3drZCJ9.DR20CmZnuNgvLqF6vh272A'
    }
})

export default directionsAPI;