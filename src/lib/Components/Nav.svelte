<script lang="ts">
	import { fly } from "svelte/transition";
	import Accordion from "./Accordion.svelte";
    import type { NavigationRoutes } from "$lib/types";
	import { statics, navigation } from "$lib";

    export let default_data: NavigationRoutes[] = [
        {title: "Home", url: "/"},
        {title: "Career", url: "/Career"},
        {title: "Inquire Now", url: "/Inquire-now"},
    ];
    
    let loanAccord: any;
    let locationAccord: any;
    let loanAccordDesktop: any;
    let locationAccordDesktop: any;

    const dsComp = {
        showMenu: false,
        locationAccord: false,
    }

    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;

    const handleLoanAccordMobile = () =>
    {
        loanAccord.open = !loanAccord.open;
        locationAccord.open = false;
    }

    const handleLocationAccordMobile = () =>
    {
        locationAccord.open = !locationAccord.open;
        loanAccord.open = false;
    }

    const handleLoanAccordDesktop = () =>
    {
        loanAccordDesktop.open = !loanAccordDesktop.open;
        locationAccordDesktop.open = false;
    }

    const handleLocationAccordDesktop = () =>
    {
        locationAccordDesktop.open = !locationAccordDesktop.open;
        loanAccordDesktop.open = false;
    }


    //** function that handle route navigation */
    const handleSelection = (selection: NavigationRoutes) =>
    {

    }


</script>

<nav class="fixed left-0 right-0 bg-blue-500 p-2 text-white">
    <button class="p-2 flex flex-col gap-1 lg:hidden" on:click={showMenu}>
        <div class="w-6 border-2 "></div>
        <div class="w-6 border-2 "></div>
        <div class="w-6 border-2 "></div>
    </button>

    <div class="hidden lg:flex gap-1 flex-row-reverse">
        
        <div class="flex items-center">
            <button class="border-[0.1rem] px-5 py-1 w-full bg-[#FFFFFF50] rounded-2xl flex items-center gap-1 text-black font-bold transition-all hover:border-red-500 active:scale-95"
            on:click={() => $statics.showSearch = true}
            >
                <img src="https://www.svgrepo.com/show/532555/search.svg" class="w-6" alt="loading img" />
                Search
            </button>
        </div>

        {#each default_data as selection }
            <a href={selection.url} class="p-2 transition-all font-bold border-[0.1rem] border-blue-500 hover:border-white hover:text-white hover:bg-[#FFFFFF50] active:scale-95"
            on:mouseenter={() => {
                loanAccordDesktop.open = false;
                locationAccordDesktop.open = false;
            }}

            on:click={() => handleSelection(selection)}
            >{selection.title}</a>
        {/each}
        <div class="">
            <Accordion content={$navigation.location} textColor="text-white font-bold border-[0.1rem] border-blue-500" bind:this={locationAccordDesktop} name="Location" on:mouseenter={handleLocationAccordDesktop}/>
        </div>

        <div class="">
            <Accordion content={$navigation.loan} textColor="text-white font-bold border-[0.1rem] border-blue-500" bind:this={loanAccordDesktop} name="Loan" on:mouseenter={handleLoanAccordDesktop}/>
        </div>
    </div>
</nav>

{#if dsComp.showMenu}
    <div class="fixed text-white  left-0 right-0 top-0 bottom-0 bg-[#00000050] lg:hidden" role="menu" tabindex="0" on:keydown={() => {}} on:click|self={() => dsComp.showMenu = false}>
        <div class="bg-blue-500 flex flex-col" transition:fly={{y:-200, duration: 700}}>
            
            
            <div class="flex flex-row-reverse p-2">
                <button class="px-2 py-4 flex flex-col gap-1 " on:click={showMenu}>
                    <div class="w-6 border-2 border-red-500 rotate-45 absolute"></div>
                    <div class="w-6 border-2 border-red-500 rotate-[-45deg]"></div>
                </button>
            </div>
            <Accordion textColor="text-white font-bold" bind:this={loanAccord} name="Loan" on:click={handleLoanAccordMobile}/>

            <Accordion textColor="text-white font-bold" bind:this={locationAccord} name="Location" on:click={handleLocationAccordMobile}/>

            {#each default_data as selection }
                <a href={selection.url} class="p-2" >{selection.title}</a>
            {/each}
        </div>
    </div>
{/if}