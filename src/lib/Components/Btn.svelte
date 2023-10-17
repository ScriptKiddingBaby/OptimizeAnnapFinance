<script lang="ts">
    export let name = "btn name";
    export let loader = false;
    export let loader_name = "loader name";
    export let pad = "p-2";
    export let bg = "bg-blue-500";
    export let w = "w-full";
    export let round = "rounded-none";
    export let textColor = "text-white";
    
</script>

<button class="{pad} {bg} {w} {round} {textColor} transition-all hover:shadow-sm hover:shadow-black active:scale-95"
disabled={loader}
on:click
>
    {#if loader}
        <div class="flex items-center justify-center gap-1">
            <p>{loader_name}</p>
            <div class="w-4 h-4 border-2 rounded-full animate-spin border-b-slate-400"></div>
        </div>
    {:else}
        <p>{name}</p>
    {/if}
</button>