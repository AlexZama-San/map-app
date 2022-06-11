import { MutationTree } from 'vuex';
import { MapState } from './state';
import mapboxgl from 'mapbox-gl';
import { Feature } from '../../interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap( state, map: mapboxgl.Map) {
        state.map=map
    },

    setDistanceDuration(state, {distance,duration}:{distance:number,duration:number}) {
        let kms = distance/1000
        kms = Math.round(kms*100)
        kms /= 100; 

        state.distance = kms;
        state.duration = Math.floor(duration/60);
    },
    setPlaceMarkers(state, places: Feature[]){
        

        state.markers.forEach(marker=>marker.remove())
        state.markers=[]

        if (!state.map) return;

        for (const place of places) {
            const [Lng,Lat] = place.center
            const popup = new mapboxgl.Popup()
                .setLngLat([Lng,Lat])
                .setHTML(`
                    <h4>${place.text}</h4>
                    <p>${place.place_name}</p>
                    `)
                

            const marker = new mapboxgl.Marker()
                .setLngLat([Lng,Lat])
                .setPopup(popup)
                .addTo(state.map!)
                
            state.markers.push(marker)


        }

        if(state.map.getLayer('routeString')){
            state.map.removeLayer('routeString')
            state.map.removeSource('routeString')
            state.distance = undefined
            state.duration = undefined
        }
    },
    setRoutePolyline(state, coords: number[][]){
        const start = coords[0]
        const end = coords[coords.length-1]

        //definir bounds el mapa

        const bounds = new mapboxgl.LngLatBounds(
            [start[0],start[1]],
            [start[0],start[1]]
        )
            //se agregan todos los puntos al bounds
        for (const coord of coords) {
            const newCoord: [number,number] = [coord[0],coord[1]]
            bounds.extend(newCoord)
        }

        state.map?.fitBounds(bounds,{padding:200})

        //crear linea

        const sourceData: mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: coords
                    },
                }]
            }
        }

        if(state.map?.getLayer('routeString')){
            state.map?.removeLayer('routeString')
            state.map?.removeSource('routeString')
        }
        state.map?.addSource('routeString',sourceData)

        state.map?.addLayer({
            id: 'routeString',
            type: 'line',
            source: 'routeString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': '#3bb2d0',
                "line-width": 3,
            }

        })
    }
}


export default mutation;