<svelte:options accessors />

<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import {Map, MapStyle, config, Marker} from '@maptiler/sdk';
    import "@maptiler/sdk/dist/maptiler-sdk.css";
    
  
    let map: any
    let mapContainer: any

    export let latitude: number;
    export let longitude: number;

    

    config.apiKey = "pRTpI0AmE8HUsHEDxY42";
    
    
    onMount(() => {

        const initialState = { lng: longitude, lat: latitude, zoom: 18 };

        map = new Map({
            container: mapContainer,
            style: MapStyle.STREETS,
            center: [longitude, latitude],
            zoom: initialState.zoom
        });

        new Marker({color: "#FF0000"})
        .setLngLat([longitude,latitude])
        .addTo(map);

    });
    

</script>

<div class="">
    <div class="w-full h-[50vh]" bind:this={mapContainer}></div>
</div>
  
