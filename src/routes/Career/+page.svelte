<script lang="ts">
	import { statics } from "$lib";
    import Btn from "$lib/Components/Btn.svelte";
    import bannerP1 from "$lib/Images/Career/bannerPart1.webp";
    import bannerP2 from "$lib/Images/Career/bannerPart2.webp";
	import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => $statics.navActiveItem = "/Career")
</script>

<div class="">
    <div class="flex flex-col lg:flex-row w-screen"> 
        
        <div class="absolute w-full top-0 bottom-0">
            <div class="mt-[90vh] lg:mt-[80vh]">
                <div class="max-w-fit animate-bounce mx-auto">
                    <Btn pad="px-10 py-2" round="rounded-lg border-2 shadow-lg shadow-black"  name="Join our Team!" bg="bg-blue-900" on:click={() => goto("/Career/Loan-Agent-Career")}/>
                </div>
            </div>
        </div>

        <div class="">
            <img loading="eager" src={bannerP1} alt="" class="" />
        </div>

        <div class="">
            <img loading="eager" src={bannerP2} alt="" class="" />
        </div>

    </div>

   
    
    
</div>