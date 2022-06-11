<script lang="ts" src="./searchResults.ts"/>

<template>
    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h4>Loading...</h4>
        <span>Espere un momento...</span>
    </div>
        <ul v-else-if="places.length > 0" class="list-group mt-3">
            <li v-for="place in places" :key="place.id"
             class="list-group-item list-group-item-action"
             :class="{'active': place.id === activePlace}"
             @click="onPlaceClick(place)">
                <h5>{{place.text}}</h5>
                <p>{{place.place_name}}</p>
                <div align="right">
                    <button class="btn btn-outline-primary"
                    :class="(place.id === activePlace)? 'btn-outline-light' : 'btn-outline-primary' "
                    @click.self="getRouteDirection(place)">
                        Ir Ahi
                </button>
                </div>
            </li>
        </ul>
</template>
<style scoped>

</style>