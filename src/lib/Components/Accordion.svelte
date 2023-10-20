<svelte:options accessors />

<script lang="ts">
    import type { NavigationRoutes } from "$lib/types";
    import { statics } from "$lib";

    export let name = "Accordion name";
    export let content: NavigationRoutes[] = [];
    export let pad = "p-2";
    export let bg = "bg-blue-500";
    export let w = "w-full";
    export let round = "rounded-none";
    export let textColor = "text-white";
    export let open = false;
    
</script>

<button class="{pad} {bg} {w} {round} {textColor} transition-all flex items-center gap-2 text-left"
on:click
on:mouseenter
>
    <div class="w-full">
        <p>{name}</p>
        
    </div>

    <div class="p-2">
        <div class="w-2 h-2 border-b-2 border-r-2 transition-all {open ? "rotate-[225deg]" : "rotate-45"}"></div>
    </div>
</button>

{#if open}
    <div class="flex flex-col gap-2 p-2 bg-[#00000050] lg:fixed lg:bg-[#01009F] font-bold " >
        {#each content as selection }
            <a href={selection.url} class="p-2 transition-all rounded-2xl hover:border-white hover:text-white hover:bg-[#FFFFFF50] lg:border-white" 
            class:active={$statics.navActiveItem === selection.url}
            on:click={() => {
                open = false;
                $statics.showMenuMobile = false;
            }}
            >{selection.title}</a>
        {/each}
    </div>
{/if}

<style>
    .active{
        background-color: #000000;
        border-radius: 1rem;
    }
</style>