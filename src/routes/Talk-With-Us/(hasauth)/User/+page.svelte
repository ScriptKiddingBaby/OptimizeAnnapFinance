<script lang="ts">
	import { goto } from "$app/navigation";
	import Btn from "$lib/Components/Btn.svelte";
    import { statics } from "$lib";
    import { convertDate } from "./generator";

	import { supabase } from "$lib/DB/supabaseConfig";
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";
	import type { User } from "@supabase/supabase-js";
	import { fly } from "svelte/transition";

    const handleFetch = async () =>
    {
        const {data, error:err} = await supabase.from("chat_system_tb").select("*").eq("owner_uid", $statics.userObject.id);

        $statics.chatArray = data as any[];
    }

    onMount( async () => {
        const getUser = await supabase.auth.getUser();
        $statics.userObject = getUser.data.user as User;
        handleFetch();
    })

    const toastStore = getToastStore();

    const createToast = (msg: string, bg: string) =>
    {
        const t: ToastSettings = {
            message: `<p class="text-white font-sans font-bold">${msg}</p>`,
            background: bg
        };

        toastStore.trigger(t);
    }

    const dsComp = {
        loader: false,
        sendLoader: false,
        chatValue: "",
    }


    
    const chatSystemTb = supabase.channel('custom-all-channel')
    .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_system_tb' },
        (payload) => {
            handleFetch();
        }
    )
    .subscribe()

    const logoutHandler = async () => 
    {
        dsComp.loader = true;
        const {error} = await supabase.auth.signOut();
        
        const res = await fetch("/Talk-With-Us/User", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                authToken: "authToken"
            })
        })

        if(await res.json() === "success"){
            goto("/Talk-With-Us/Login");
            dsComp.loader = false;
        }
    }

    const handleChat = async () => 
    {
        dsComp.sendLoader = true;
        const {error:err} = await supabase.from("chat_system_tb").insert({
            owner_uid: $statics.userObject.id,
            display_name: $statics.userObject.user_metadata.display_name,
            messages: dsComp.chatValue
        })
        if(err){
            dsComp.sendLoader = false;
            createToast(`Error at db location handle chat`, "bg-red-500");
        }else{
            dsComp.sendLoader = false;
            dsComp.chatValue = "";
        }
    }

    let disabled = true;

    const checkText = () => dsComp.chatValue.trim().length > 1 ? disabled = false : disabled = true;
        
    
</script>

<div class="mx-auto sm:max-w-4xl">
    <div class="">
        <div class="max-w-fit">
            <Btn pad="px-2 py-1" bg="bg-red-500" round="rounded-lg" name="Logout" loader={dsComp.loader} loader_name="drinking beer." on:click={logoutHandler}/>
        </div>
        <h4 class="h4 font-sans text-center">Hello {$statics.userObject.email}</h4>

        <div class="max-h-[60vh] border-[0.1rem] card p-2 flex flex-col gap-2 overflow-y-scroll ">
            {#if $statics.chatArray.length}
                {#each $statics.chatArray as chats}
                    <div class="card variant-outline-secondary p-2" >
                        <div class="flex">
                            <h6 class="h6 font-bold w-full font-sans">{chats.display_name}</h6>
                            <small class="font-sans w-full font-bold text-right opacity-50">{convertDate(chats.created_at)}</small>
                        </div>

                        <div class="p-2">
                            <p>{chats.messages}</p>
                        </div>
                    </div>
                {/each}
            {:else}
                <p class="font-sans text-center text-green-800 p-4">No chat history.</p>

                <div class="flex gap-1 flex-wrap justify-center">
                    <div class="card variant-outline-secondary p-2 font-sans card-hover cursor-pointer" >
                    
                        <div class="p-2">
                            <p>What is Annapolis Finance?</p>
                        </div>
                    </div>

                    <div class="card variant-outline-secondary p-2 font-sans card-hover cursor-pointer" >
                    
                        <div class="p-2">
                            <p>Who founded Annapolis Finance?</p>
                        </div>
                    </div>

                    <div class="card variant-outline-secondary p-2 font-sans card-hover cursor-pointer" >
                    
                        <div class="p-2">
                            <p>Who founded Annapolis Finance?</p>
                        </div>
                    </div>

                    <div class="card variant-outline-secondary p-2 font-sans card-hover cursor-pointer" >
                    
                        <div class="p-2">
                            <p>Generated Text comming soon!</p>
                        </div>
                    </div>

                    <div class="card variant-outline-secondary p-2 font-sans card-hover cursor-pointer" >
                    
                        <div class="p-2">
                            <p>Common issue!</p>
                        </div>
                    </div>
                </div>
            {/if}
            
        </div>

        
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-2">
            <button class="input-group-shim">+</button>
            <textarea
                bind:value={dsComp.chatValue}
                on:keyup={checkText}
                class="bg-transparent border-0 ring-0"
                name="prompt"
                id="prompt"
                placeholder="Write a message..."
                rows="1"
            />
            <button class="{disabled ? "bg-red-500" : "bg-green-500"} font-sans text-white "
            {disabled}
            on:click={handleChat}
            >
                {#if dsComp.sendLoader}
                    <p>Sending</p>
                {:else}
                    <p>Send</p>
                {/if}
            </button>
        </div>
					
    </div>
</div>