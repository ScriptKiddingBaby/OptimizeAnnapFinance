<svelte:options accessors />

<script lang="ts">
    import type { NavigationRoutes } from "$lib/types";

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
    <div class="flex flex-col p-2 bg-[#00000050] lg:fixed lg:bg-blue-500 font-bold">
        {#each content as selection }
            <a href={selection.url} class="p-2 hover:border-[0.1rem] lg:border-white">{selection.title}</a>
        {/each}
    </div>
{/if}