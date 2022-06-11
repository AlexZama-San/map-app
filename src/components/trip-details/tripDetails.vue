<template>
    <div v-if="distance" class="trip-container column">
        <div class="col">Distancia: <strong>{{distance}}</strong></div>
        <div class="col">Duracion: <strong>{{duration}}</strong></div>
    </div>
</template>

<script>
import { useMapStore } from '@/Composables'
export default {
    name: 'TripDetails',
    setup() {
        const [distance,duration] = useMapStore()

        return{
            distance,
            duration
        }
    },
}
</script>

<style scoped>
.trip-container {
    padding: 10px;
    position: fixed;
    bottom: 50px;
    left: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.75);
    font-size: 25px;
    width: 30px;
}

strong{
    color: #00bcd4;
}
</style>