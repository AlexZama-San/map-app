import { defineComponent } from 'vue';
<template>
  <button v-if="isBtnReady" @click="onMyLocationClick" class="btn btn-primary">
      ir a mi ubicación
    </button>
</template>

<script lang="ts">
import { useMapStore,usePlacesStore } from '@/Composables'
import {computed, defineComponent} from 'vue'

export default defineComponent({
name: 'MyLocationBtn',
setup(){

    const {userLocation,isUserLocationReady} = usePlacesStore()
    const {map,isMapReady} = useMapStore()

return{
    isBtnReady: computed<boolean>(()=>isUserLocationReady.value && isMapReady.value),
    onMyLocationClick: () => {
        map.value?.flyTo({
            center: userLocation.value,
            zoom: 14,
        })
    }
}
}
})
</script>

<style scoped>
button{
    position: fixed;
    top: 30px;
    right: 30px;
}

</style>