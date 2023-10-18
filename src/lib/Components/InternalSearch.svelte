<script lang="ts">
	import { onDestroy } from "svelte";
    import { createSearchStore, interlnalSEO, searchHandler } from "$lib";
    import type { SEOinternalTypes } from "$lib/types";
	import {  slide } from "svelte/transition";

    import searchIcon from "$lib/Images/Home/search.svg";

    export let pad = "p-2"

    const searchPattern: SEOinternalTypes[] = interlnalSEO.map( (item) => ({...item, searchPattern: `${item.content} ${item.title} ${item.url}`}));

    const searchStore = createSearchStore(searchPattern);

    const unsubscribe = searchStore.subscribe( (modelNikka) => searchHandler(modelNikka));

    onDestroy( () => unsubscribe());

    
</script>


<main class="text-black">
    <p class="text-orange-500 bg-black max-w-fit text-sm">Subscribe to my yowTube shaniel: <a href="https://www.youtube.com/@mikeSharesCode" target="_blank" class="text-red-600 underline hover:text-blue-200">@mikeySharesCode</a></p>
    <div class="flex items-center justify-end">
        <div class="absolute p-2 z-10">
            <img src={searchIcon} class="w-6" alt="loading img" />
        </div>
        <input type="text" placeholder="Search any terms" class="input rounded-none {pad}" bind:value={$searchStore.search}/>
    </div>
    
    
  
    {#if $searchStore.filtered.length}
        <div class="card  p-2 rounded-none mt-2 flex flex-col max-h-[30vh] overflow-auto">
            
            {#each $searchStore.filtered as filtered }
                
                <div class="w-full text-xs flex flex-col" transition:slide>
                    <a href={filtered.url} class="p-2 transition-all active:scale-95 mt-1 flex items-center"
                    on:click
                    ><p class="w-full transition-all hover:text-red-500 font-bold underline {$searchStore.filtered.length <= 2 ? "text-blue-500" : "text-black"}">{filtered.title}</p> <p class="text-slate-500 w-full">{filtered.url}</p> </a>

                    {#if $searchStore.filtered.length <= 2}
                        <p class="p-2 italic">{filtered.display}</p>
                    {/if}
                </div>
                
            {/each}
            
        </div>
    {:else}
        <div class="card  p-2 rounded-none mt-2" >
            <p class="text-red-500 font-bold">No record found </p>
            <p class="text-xs text-black">Withouth bug you can't be a bro-grammer!</p>
        </div>
    {/if}
    


</main>