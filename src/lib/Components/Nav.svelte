<script lang="ts">
	import { fly } from "svelte/transition";
	import Accordion from "./Accordion.svelte";
    import type { NavigationRoutes } from "$lib/types";
	import { statics, navigation } from "$lib";
    
	
    import annapIcon from "$lib/Images/Home/annapIcon.webp";
	import { goto } from "$app/navigation";

    export let default_data: NavigationRoutes[] = [
        {title: "Home", url: "/", index: 0},
        {title: "Career", url: "/Career", index: 1},
        {title: "Inquire Now", url: "/Inquire-now", index: 2},
    ];
    
    let loanAccord: any;
    let locationAccord: any;
    let loanAccordDesktop: any;
    let locationAccordDesktop: any;

    const dsComp = {
        showMenu: false,
        locationAccord: false,
    }

    const showMenu = () => $statics.showMenuMobile = !$statics.showMenuMobile;

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
        $statics.navActiveItem = selection.url;
    }

    //**Function that show search and hide menu/
    const handleShowSearch = () =>
    {
        $statics.showSearch = true;
        $statics.showMenuMobile = false;

    }


</script>

<nav class="fixed left-0 right-0 bg-blue-500 p-2 text-white shadow-lg shadow-black ">
    <button class="p-2 flex flex-col gap-1 lg:hidden" on:click={showMenu}>
        <div class="w-6 border-2 "></div>
        <div class="w-6 border-2 "></div>
        <div class="w-6 border-2 "></div>
    </button>

    <div class="hidden lg:flex gap-1">
        <button class="max-w-fit flex items-center gap-1 w-full " on:click={() => goto("/")}>
            <img src={annapIcon} alt="" class="w-16" />
            <h3 class="h3">Annapolis Finance Inc.</h3>
        </button>

        <div class="flex flex-row-reverse gap-2 w-full items-center">
            <div class="flex items-center mx-2">
                <button class="border-[0.1rem] px-5 py-1 w-full bg-[#FFFFFF50] rounded-2xl flex items-center gap-1 text-black font-bold transition-all hover:border-red-500 active:scale-95"
                on:click={() => $statics.showSearch = true}
                >
                    <img src="https://www.svgrepo.com/show/532555/search.svg" class="w-6" alt="loading img" />
                    Search
                </button>
            </div>
    
            {#each default_data as selection }
                <a href={selection.url} class="p-2 transition-all font-bold border-[0.1rem] border-blue-500 hover:border-white hover:text-white hover:bg-[#FFFFFF50] active:scale-95"
                class:active={$statics.navActiveItem === selection.url}
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
    </div>
</nav>

{#if $statics.showMenuMobile}
    <div class="fixed text-white  left-0 right-0 top-0 bottom-0 bg-[#00000050] lg:hidden" role="menu" tabindex="0" on:keydown={() => {}} on:click|self={() => $statics.showMenuMobile = false}>
        <div class="bg-blue-500 flex flex-col" transition:fly={{y:-200, duration: 700}}>
                        
            <div class="flex flex-row-reverse p-2">
                <button class="px-2 py-4 flex flex-col gap-1 " on:click={showMenu}>
                    <div class="w-6 border-2 border-red-500 rotate-45 absolute"></div>
                    <div class="w-6 border-2 border-red-500 rotate-[-45deg]"></div>
                </button>
            </div>

            <div class="p-2">
                <button class="border-[0.1rem] px-5 py-1 w-full bg-[#FFFFFF50] max-w-full flex items-center gap-1 text-black font-bold transition-all hover:border-red-500 active:scale-95 rounded-none"
                on:click={handleShowSearch}
                >
                    <img src="https://www.svgrepo.com/show/532555/search.svg" class="w-6" alt="loading img" />
                    Search
                </button>
            </div>

            <Accordion content={$navigation.loan} textColor="text-white font-bold" bind:this={loanAccord} name="Loan" on:click={handleLoanAccordMobile}/>

            <Accordion content={$navigation.location} textColor="text-white font-bold" bind:this={locationAccord} name="Location" on:click={handleLocationAccordMobile}/>

            {#each default_data as selection }
                <a href={selection.url} class="p-2 font-bold transition-all" 
                on:click={() => $statics.showMenuMobile = false}
                class:active={$statics.navActiveItem === selection.url}
                >{selection.title}</a>
            {/each}
        </div>
    </div>
{/if}

<style>
    .active{
        background-color: #000000;
    }
</style>