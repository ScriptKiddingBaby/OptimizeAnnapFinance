<script lang="ts">
	import { statics } from "$lib";
	import { scale } from "svelte/transition";
	import Btn from "./Btn.svelte";


</script>

<div class="fixed bottom-0 top-0 left-0 right-0 bg-[#00000090] z-10  text-black font-sans p-2" >

    <div class="card sm:max-w-xl mx-auto p-4 flex flex-col gap-2 shadow-lg shadow-black mt-[10vh]" transition:scale>
        <h4 class="h4 text-center font-serif font-bold">Prompt Advisory from Annapolis Finance Inc.</h4>

        <p class="indent-10">
            Creating a finance-centric website demands careful planning and execution. It's essential to provide accurate and up-to-date information to earn the trust of your audience. To keep your visitors engaged and informed, consider a user-friendly design with clear navigation, and enhance your content with charts and infographics to make complex financial concepts easily comprehensible. 
        </p>
            
        <p>
            Stay current with financial trends and regulations, regularly updating your content to ensure its relevance. Interactive tools like financial calculators and budgeting templates can provide practical value to your users. Encourage user participation through comments and feedback, fostering a sense of community. 
        </p>

            
        <p>
            Finally, always prioritize user privacy and data security to establish your website as a trustworthy source of financial information. By following these steps, your website will not only inform but also empower your audience in their financial endeavors.
        </p>

        <div class="mx-auto max-w-fit">
            <Btn bg="bg-[#0CFD0C]" textColor="text-black px-8" round="rounded-lg" name="Agree"
            on:click={() => $statics.promptAdvisory = false}
            />
        </div>
    </div>
</div>