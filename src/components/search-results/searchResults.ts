import { defineComponent, ref, watch } from 'vue';
import { usePlacesStore } from '../../Composables/usePlacesStore';
import { Feature } from '../../interfaces/places';
import { useMapStore } from '../../Composables/useMapStore';

export default defineComponent({
    name: "SearchResults",
    setup(){

        const{isLoadingPlaces,places,userLocation}= usePlacesStore()
        const {map,setPlaceMarkers,getRouteBetweenPoints} = useMapStore()
        const activePlace = ref('')

        watch(places,(newPlaces)=>{
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })



        return{
            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClick: (place :Feature)=>{
                
                const [Lng,Lat] = place.center
                activePlace.value = place.id

                map.value?.flyTo({
                    center: [Lng,Lat],
                    zoom: 15
                })
            },

            getRouteDirection: (place:Feature) => {
                if(!userLocation.value) return

                
                const [Lng,Lat] = place.center
                const [startLng,startLat] = userLocation.value

                const start: [number,number] = [startLng,startLat]
                const end: [number,number] = [Lng,Lat]

                getRouteBetweenPoints(start,end)
            }


        }
    }
})