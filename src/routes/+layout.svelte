<script lang="ts">
	import { statics } from '$lib';
	import InternalSearch from '$lib/Components/InternalSearch.svelte';
	import { fly } from 'svelte/transition';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>



<div class="">
	
	<div class="">
		<slot />
	</div>
	{#if $statics.showSearch}
		<div class="fixed left-0 right-0 top-0 bottom-0 z-10" role="menu" tabindex="0" on:keydown={() => {}}  on:click|self={() => $statics.showSearch = false}>
			<div class="sm:max-w-2xl mx-auto mt-[10vh]" in:fly={{x:-200, duration: 500}} out:fly={{x:200, duration: 500}}>
				<InternalSearch/>
			</div>
		</div>
	{/if}
		
</div>

