import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../Composables/usePlacesStore';
import mapboxgl from "mapbox-gl";
import { useMapStore } from '../../Composables/useMapStore';


export default defineComponent({
    name: "MapView",
    setup(){
        const mapElement = ref<HTMLDivElement>();
        const { userLocation,isUserLocationReady }=usePlacesStore()
        const {setMap} = useMapStore()

        const initMap = async() => {
            if(!mapElement.value) return;
            if(!userLocation) return;
            await Promise.resolve();
            const map = new mapboxgl.Map({
                container: mapElement.value!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });
                const userMarker: [number, number] = userLocation.value as [number, number];

                const myLocationPopup = new mapboxgl.Popup()
                    .setLngLat(userMarker)
                    .setHTML(`
                        <h4>Estoy aqui</h4>
                        <p>en veracruz</p>
                        `)
                

                const myLocationMarker = new mapboxgl.Marker()
                    .setLngLat(userMarker)
                    .setPopup(myLocationPopup)
                    .addTo(map);
            setMap(map)
        }

        onMounted(()=> {
            if (isUserLocationReady.value) return initMap();


        });

        watch(isUserLocationReady,(newVal)=>{
            if(isUserLocationReady.value) initMap();
        })

        return {
            isUserLocationReady,
            mapElement,
            userLocation,

        }
    }
})