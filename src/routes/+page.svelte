<script lang="ts">
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import homeBannerOne from "$lib/Images/Home/homeBanner1.webp";
	import homeBannerTwo from "$lib/Images/Home/homeBanner2.webp";
	import Btn from '$lib/Components/Btn.svelte';
	import { onMount } from 'svelte';
	import { statics } from '$lib';
	import { goto } from '$app/navigation';
	
	onMount(() => $statics.navActiveItem = "/");

	const screenPlay: string[] = [homeBannerOne, homeBannerTwo];

	
</script>
  
<div class="">
	{#if browser}
		<Carousel
			autoplay={true}
			autoplayDuration={2000}
			autoplayProgressVisible
			arrows={false}
		>
			
				{#each screenPlay as banner}
				<div class="flex flex-col text-white">
					<img loading="eager" src={banner} alt="" class="" />
					
				</div>
				{/each}
			

		</Carousel>
	{/if}

	<div class="p-16 bg-[#01009F] rounded-b-full">
		<div class="mx-auto max-w-fit animate-bounce">
			<Btn textColor="text-black" pad="p-2 text-xl" round="rounded-xl" bg="bg-[#0CFD0C]" name="Inquire Now!" on:click={() => goto("/Inquire-now")}/>
		</div>
	</div>

	<div class="flex flex-col lg:flex-row gap-2 p-10 font-sans">
		<div class="card p-5 bg-white flex flex-col gap-4 w-full">
			<h3 class="h3 font-bold">ABOUT US</h3>
			<p class="">
				Annapolis offers a cash loan using your ORCR as collateral with low interest rate, higher appraisal value and flexible terms.
			</p>
		</div>

		<div class="card p-5 bg-white flex flex-col gap-4 w-full">
			<h3 class="h3 font-bold">MISSION</h3>
			<p class="">
				To bridge the gap to the financially unserved by providing comprehensive and innovative financial services.
			</p>
		</div>
	</div>
</div>

