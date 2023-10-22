<script lang="ts">
    import { onMount } from "svelte";
    import { statics } from "$lib";

    import { supabase } from "$lib/DB/supabaseConfig";
	import type { PostgrestSingleResponse } from "@supabase/supabase-js";
	import type { UnitsTypes } from "$lib/types";

    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import { clipboard } from '@skeletonlabs/skeleton';
    
    const toastStore = getToastStore();

    const dsComp = {
        loader: false,
        searchValue: "",
    }
    

    const handleSearch = async () => 
    {
        dsComp.loader = true;
        const repoTable: PostgrestSingleResponse<UnitsTypes[]> = await supabase.from("repo_tb").select().ilike("name", `%${dsComp.searchValue}%`);
        if(repoTable.data){
            if(!repoTable.data[0]){
                const t: ToastSettings = {
                    message: `<p class="text-white font-semibold">No records found!</p>`,
                    background: "bg-red-500"
                };
                toastStore.trigger(t);
                dsComp.loader = false;

            }else{
                $statics.unitsArray = repoTable.data;
                const t: ToastSettings = {
                    message: `<p class="text-white font-semibold">We found ${$statics.unitsArray.length} ${$statics.unitsArray.length > 1 ? "Records" : "Record"} </p>`,
                    background: "bg-green-400"
                };
                toastStore.trigger(t);
                dsComp.loader = false;
            }
        }else if(repoTable.error){
            console.log("PM eviotamikejohnb@gmail.com for fix :D");
            dsComp.loader = false;
        }
    }

    const listenForSearchKey = async () =>
    {
        if(!dsComp.searchValue.length){
            dsComp.loader = true;
           const repoTable: PostgrestSingleResponse<UnitsTypes[]> = await supabase.from("repo_tb").select("*");
           if(repoTable.data){
                $statics.unitsArray = repoTable.data;
                const t: ToastSettings = {
                    message: `<p class="text-white font-semibold">Reloading Records Success!</p>`,
                    background: "bg-green-400"
                };
                toastStore.trigger(t);
                dsComp.loader = false;
           }else if(repoTable.error){
                console.log("PM eviotamikejohnb@gmail.com for fix :D");
                dsComp.loader = false;
           }
        }
    }

    onMount(() => {$statics.navActiveItem = "/Loan/Repossessed-Units"});

    const handleCopy = (details: UnitsTypes) =>
    {
        const t: ToastSettings = {
            message: `
                <p class="text-white font-semibold">Success!</p>
                <p>Name: ${details.name} </p>
                <p>Contact Number: ${details.contact_number} </p>
                <p>Condition: ${details.condition} </p>
            `,
            background: "bg-green-400"
        };
        toastStore.trigger(t);
        dsComp.loader = false;
    }
</script>

<div class="flex flex-col gap-4">
    <div class=" mx-auto text-center pt-10">
        <h2 class="h2">Repossessed Units</h2>
    </div>

    <div class="">
        <div class="flex flex-col items-end justify-center md:max-w-xl mx-auto">
            <div class="absolute z-2 mx-2">
                <button class="p-1 active:scale-95 hover:text-red-500 text-lg font-bold" disabled={dsComp.loader} on:click={handleSearch}>
                    {#if dsComp.loader}
                        <div class="flex items-center justify-center m-4">
                            <div class="w-4 h-4 border-2 border-b-black rounded-full animate-spin"></div>
                        </div>
                    {:else}
                    <p>Search</p>
                    {/if}
                </button>
            </div>
            <input type="text" class="p-2 w-full " placeholder="Search Units by name" on:keyup={listenForSearchKey} bind:value={dsComp.searchValue}/>
            
        </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center m-4 sm:m-10 gap-4">
        {#each $statics.unitsArray as units}
            <div class="card p-4 hover:shadow-lg hover:shadow-black transition-all">
                <img loading="eager" src={units.img_url ?? "https://annapolisfinance.com.ph/wp-content/uploads/2023/04/afi-resized.png"} alt="" class="w-[300px] h-[30vh]" />
                <div class="p-2">
                    <button class="float-right px-2 bg-blue-500 text-white rounded-lg transition-all hover:shadow-black hover:shadow-sm active:scale-95"
                    use:clipboard={`Name: ${units.name}\nContact Number: ${units.contact_number}\nCondition: ${units.condition}`}
                    on:click={() => handleCopy(units)}
                    >Copy details</button>
                    <p class="font-bold">Name:</p>
                    <p>{units.name}</p>

                    <p class="font-bold">Contact Number:</p>
                    <p>{units.contact_number}</p>

                    <p class="font-bold">Condition:</p>
                    <p>{units.condition}</p>
                </div>
            </div>
        {/each}

        
    </div>
</div>
