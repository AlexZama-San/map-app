import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import directionsAPI from '../../APIS/directionsAPI';
import { DirectionsResponse } from '../../interfaces/directions';

export type lngLat = [ number,number ];


const actions: ActionTree<MapState, StateInterface> = {
    async getRouteBetweenPoints( { commit }, {start,end}: {start: lngLat, end: lngLat} ) {
        const resp = await directionsAPI.get<DirectionsResponse>(`${start.join(',') };${end.join(',') }`);
        console.log(resp.data.routes[0].geometry.coordinates);
        // a line to prevent linter errors
        commit('setDistanceDuration',{
            distance: resp.data.routes[0].distance,
            duration: resp.data.routes[0].duration
        })

        commit('setRoutePolyline',resp.data.routes[0].geometry.coordinates);
    }
}



export default actions;