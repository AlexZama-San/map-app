import { computed } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '@/store';
import mapboxgl from 'mapbox-gl';
import { Feature } from '../interfaces/places';
import { lngLat } from '@/store/map/actions';
export const useMapStore= ()=>{
    const store = useStore<StateInterface>()

    return {
        map: computed(()=>store.state.map.map),
        distance: computed(()=>store.state.map.distance),
        duration: computed(()=>store.state.map.duration),

        isMapReady: computed(()=> store.getters['map/isMapReady']),

        setMap: (map:mapboxgl.Map) => store.commit('map/setMap',map),
        setPlaceMarkers: (places:Feature[]) => store.commit('map/setPlaceMarkers',places),

        getRouteBetweenPoints: (start: lngLat, end: lngLat) => store.dispatch('map/getRouteBetweenPoints',{start,end}),

    }
}