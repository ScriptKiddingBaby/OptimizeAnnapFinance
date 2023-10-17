<script lang="ts">
	import { statics } from '$lib';
	import InternalSearch from '$lib/Components/InternalSearch.svelte';
	import { fly } from 'svelte/transition';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';
	import Footer from '$lib/Components/Footer.svelte';
	import Nav from '$lib/Components/Nav.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>

<div class="fixed bottom-0 right-0 m-4">
	<LightSwitch />
</div>

<div class="">
	
	<div class="">

		<div class="fixed top-0 left-0 right-0">
			{#if false}
				<div class="w-full top-0 left-0  right-0 bg-green-500">
					<p class="p-2">HEllo</p>
				</div>
			{/if}
			<Nav />
		</div>

		<div class="mt-20">
			<slot />
		</div>
	</div>






	{#if $statics.showSearch}
		<div class="fixed left-0 right-0 top-0 bottom-0 z-10" role="menu" tabindex="0" on:keydown={() => {}}  on:click|self={() => $statics.showSearch = false}>
			<div class="sm:max-w-2xl mx-auto mt-[10vh]" in:fly={{x:-200, duration: 500}} out:fly={{x:200, duration: 500}}>
				<InternalSearch/>
			</div>
		</div>
	{/if}
		
</div>

<Footer />

