<script lang="ts">
	
	import InternalSearch from '$lib/Components/InternalSearch.svelte';
	import { fly, slide } from 'svelte/transition';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Components/Footer.svelte';
	import Nav from '$lib/Components/Nav.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();


	import email from "$lib/Images/Nav/email.svg";
    import fb from "$lib/Images/Nav/fb.svg";
    import mobile from "$lib/Images/Nav/mobile.svg";

	import { page } from '$app/stores';
	import { statics } from '$lib';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import type { UnitsTypes } from '$lib/types';
	import PrompAdvisory from '$lib/Components/PrompAdvisory.svelte';

	export let data: LayoutData;
	let {item} = data;

	onMount(() => {
		$statics.unitsArray = item as UnitsTypes[];
	})

	let h = 0;
</script>
<svelte:window bind:scrollY={h}/>

{#if $statics.promptAdvisory}
	<PrompAdvisory />
{/if}

<div class="fixed bottom-0 right-0 m-4">
	<LightSwitch />
</div>

<div class="text-black text-base">
	
	<div class="">

		<div class="fixed top-0 left-0 right-0 {$statics.promptAdvisory ? "" : "z-10"}"> <!-- z-10 need to be append-->
			{#if !(h > 100)}
				<div class="w-full top-0 left-0  right-0 bg-[#0CFD0C]" transition:slide>
					<div class="text-center">
						<h3 class="h3 font-serif font-bold">Annapolis Finance Inc.</h3>
					</div>

					<div class="flex flex-col lg:flex-row items-center p-2 justify-center gap-4">
						<p class="font-serif font-semibold">Monday - Friday 9:00 am - 6:00 pm</p>
						<div class="flex gap-1">
							<img src={mobile} alt="" class="w-6 p-1 rounded-full border-[0.1rem] border-black " />
							<p class="font-serif font-semibold">09294135807</p>
						</div>

						<div class="flex gap-1">
							<img src={fb} alt="" class="w-6 p-1 rounded-full border-[0.1rem] border-black " />
							<p class="font-serif font-semibold">Annapol Finance</p>
						</div>

						<div class="flex gap-1">
							<img src={email} alt="" class="w-6 p-1 rounded-full border-[0.1rem] border-black " />
							<p class="font-serif font-semibold">costumerservice@annapolis.com.ph</p>
						</div>

						<div class="items-center mx-2 hidden lg:block">
							<button class="border-[0.1rem] px-5 py-1 w-full bg-white rounded-2xl flex items-center gap-1  transition-all hover:border-red-500 active:scale-95"
							on:click={() => $statics.showSearch = true}
							>
								<img src="https://www.svgrepo.com/show/532555/search.svg" class="w-6" alt="loading img" />
								<p class="font-serif text-black font-bold">Search</p>
							</button>
						</div>
					</div>
				</div>
			{/if}
			<Nav />
			
		</div>

		<div class="mt-[35vh] lg:mt-[18vh] p-2 min-h-screen">
			<slot />
		</div>
	</div>



	{#if $statics.showSearch}
		<div class="fixed p-2 left-0 bg-[#00000050] right-0 top-0 bottom-0 z-10" role="menu" tabindex="0" on:keydown={() => {}}  on:click|self={() => $statics.showSearch = false}>
			<div class="sm:max-w-4xl mx-auto mt-[15vh]" in:fly={{x:-200, duration: 500}} out:fly={{x:200, duration: 500}}>
				<InternalSearch on:click={() => $statics.showSearch = false}/>
			</div>
		</div>
	{/if}
		
</div>


<div class="text-base">
	<Footer />
</div>


<style>
	
</style>

