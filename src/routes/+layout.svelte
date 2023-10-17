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


	import email from "$lib/Images/Nav/email.svg";
    import fb from "$lib/Images/Nav/fb.svg";
    import mobile from "$lib/Images/Nav/mobile.svg";

	import { page } from '$app/stores';
	import { statics } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		$statics.navActiveItem = $page.url.pathname;
	})

	let h = 0;
</script>
<svelte:window bind:scrollY={h}/>
<div class="fixed bottom-0 right-0 m-4">
	<LightSwitch />
</div>

<div class="text-black text-base">
	
	<div class="">

		<div class="fixed top-0 left-0 right-0 z-10">
			{#if !(h > 188)}
				<div class="w-full top-0 left-0  right-0 bg-green-500" transition:slide>
					<div class="flex flex-col lg:flex-row items-center p-2 justify-center gap-4">
						<p>Monday - Friday 9:00 am - 6:00 pm</p>
						<div class="flex gap-1">
							<img src={mobile} alt="" class="w-6 p-1 rounded-full border-[0.1rem] border-black " />
							<p>09294135807</p>
						</div>

						<div class="flex gap-1">
							<img src={fb} alt="" class="w-6 p-1 rounded-full border-[0.1rem] border-black " />
							<p>Annapol Finance</p>
						</div>

						<div class="flex gap-1">
							<img src={email} alt="" class="w-6 p-1 rounded-full border-[0.1rem] border-black " />
							<p>costumerservice@annapolis.com.ph</p>
						</div>
					</div>
				</div>
			{/if}
			<Nav />
			
		</div>

		<div class="mt-[32vh] lg:mt-[10vh]">
			<slot />
		</div>
	</div>



	{#if $statics.showSearch}
		<div class="fixed left-0 bg-[#00000050] right-0 top-0 bottom-0 z-10" role="menu" tabindex="0" on:keydown={() => {}}  on:click|self={() => $statics.showSearch = false}>
			<div class="sm:max-w-4xl mx-auto mt-[15vh]" in:fly={{x:-200, duration: 500}} out:fly={{x:200, duration: 500}}>
				<InternalSearch/>
			</div>
		</div>
	{/if}
		
</div>


<div class="text-base">
	<Footer />
</div>

