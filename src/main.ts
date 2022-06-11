import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHphbWEiLCJhIjoiY2w0NzZ6MnBlMDR3ZzNjcDg5cjRzZ3drZCJ9.DR20CmZnuNgvLqF6vh272A';

if(!navigator.geolocation) {
    throw new Error('Geolocation is not supported by your browser')
}


createApp(App).use(store).use(router).mount('#app')
