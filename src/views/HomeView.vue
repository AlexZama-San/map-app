<template>
  <MapView/>
  <searchBar/>
  <MyLocationBtn/>
  <TripDetails/>
  
</template>

<script lang="ts">
import { usePlacesStore } from '@/Composables';
import { defineComponent } from 'vue';
import MapView from "../components/mapview/MapView.vue";
import MyLocationBtn from "../components/my-location-btn/My-location-btn.vue";
import searchBar from "../components/searchbar/searchBar.vue";
import TripDetails from "../components/trip-details/tripDetails.vue"

  export default defineComponent({
    name: 'HomeView',
    components:{MapView,MyLocationBtn,searchBar,TripDetails},

    setup() {
      usePlacesStore()
      return {
        
      }
    }
  })
</script>
