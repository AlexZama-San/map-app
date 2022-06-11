<script lang="ts" src="./MapView.ts"/>

<template>
    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere porfavor</h3>
            <span>Localizando...</span>
        </div>
    </div>
    <div v-show="isUserLocationReady" class="map-container"
    ref="mapElement"/>

</template>

<style scoped>
.map-container{
    position: fixed;
    width: 100vw;
    height: 100vh; 
}
.loading-map{
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0,0,0,0.8);
}

</style>