<script lang="ts">
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import homeBannerOne from "$lib/Images/Home/homeBanner1.webp";
	import homeBannerTwo from "$lib/Images/Home/homeBanner2.webp";
	import Btn from '$lib/Components/Btn.svelte';
	import { onMount } from 'svelte';
	import { statics } from '$lib';
	
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

	<div class="p-16 bg-blue-500 rounded-b-full">
		<div class="mx-auto max-w-fit">
			<Btn pad="p-2 animate-bounce text-xl border-2 border-white" round="rounded-xl" bg="bg-green-500" name="Inquire Now!"/>
			
		</div>
	</div>

	<div class="flex flex-col gap-2 p-10">
		<div class="card p-5 bg-white flex flex-col gap-4">
			<h3 class="h3">ABOUT US</h3>
			<p>
				Annapolis offers a cash loan using your ORCR as collateral with low interest rate, higher appraisal value and flexible terms.
			</p>
		</div>

		<div class="card p-5 bg-white flex flex-col gap-4">
			<h3 class="h3">MISSION</h3>
			<p>
				To bridge the gap to the financially unserved by providing comprehensive and innovative financial services.
			</p>
		</div>
	</div>
</div>

