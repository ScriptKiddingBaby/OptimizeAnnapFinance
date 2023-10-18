<script lang="ts">
	import { page } from "$app/stores";
	import { statics } from "$lib";
	import Btn from "$lib/Components/Btn.svelte";
    import inquireBanner from "$lib/Images/InquireNow/inquireBanner.webp";
	import { FileButton } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";

    onMount(() => $statics.navActiveItem = $page.url.pathname);

    const step1Href = "https://www.mediafire.com/file/hjp3mcwsls6o89v/UPDATED-APPLICATION-FORM.pdf/file";

    const firstLoop = ["EMPLOYED (private corporation)", "BUSINESS (1 year existing business)", "REMITTANCE", "ALLOTMENT", "RIDER"];

    const secondLoop = ["Sangla ORCR Motorcycle", "Sangla ORCR TRICYCLE", "Sangla ORCR Bigbike", "Finance Appliances", "Finance Iphone/Samsung"];
</script>

<div class="p-2">
    <div class="flex flex-col lg:flex-row lg:items-stretch">
        <div class="">
            <img loading="eager" src={inquireBanner} alt="" class="w-full h-full" />
        </div>
       
        <div class="w-full p-4 flex flex-col gap-4">
            <h3 class="h3">Step 1</h3>
            <div class="p-2">
                <p>Download the form and fill it up.</p>
                <a href={step1Href} target="_blank" class="hover:text-red-500 italic text-blue-500 underline">Updated Application Form</a>
            </div>

            <h3 class="h3">Step 2</h3>
            <div class="p-2 flex flex-col gap-2">

                <label>
                    <b>Choose one:</b>
                    <select class="select">
                        {#each firstLoop as selection }
                            <option>{selection}</option>
                        {/each}
                    </select>
                </label>

                <div class="flex flex-col gap-2 lg:flex-row">
                    <label>
                        <b>First Name:</b>
                        <input type="text" class="input" />
                    </label>

                    <label>
                        <b>Middle Name:</b>
                        <input type="text" class="input" />
                    </label>

                    <label>
                        <b>Last Name:</b>
                        <input type="text" class="input" />
                    </label>
                </div>
                
                <label>
                    <b>Address:</b>
                    <input type="text" class="input" />
                </label>

                <label>
                    <b>Mobile Number:</b>
                    <input type="text" class="input" />
                </label>

                <label>
                    <b>Email:</b>
                    <input type="text" class="input" />
                </label>

                <label>
                    <b>Choose one:</b>
                    <select class="select">
                        {#each secondLoop as selection }
                            <option>{selection}</option>
                        {/each}
                    </select>
                </label>

            </div>

            <h3 class="h3">Step 3</h3>
            <div class="p-2 flex flex-col gap-2">
                <FileButton name="loan-agent-career" width="px-2 py-0" />
                <p>Upload the Application form (accepted file format pdf, jpg, png).</p>
                
                <div class="p-2">
                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="checkbox" />
                        <p>I agree with the Terms and Conditions of Annapolis Finance Incorporation</p>
                    </div>

                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="checkbox" />
                        <p>I accept the Privacy Policy of Annapolis Finance Incorporation</p>
                    </div>
                </div>
            </div>

            <div class="max-w-fit mx-auto">
                <Btn pad="px-10 py-2" round="rounded-xl" name="Submit"/>
            </div>
        </div>
        
    </div>
</div>