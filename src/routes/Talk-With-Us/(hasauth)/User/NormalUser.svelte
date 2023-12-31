<script lang="ts">
	import { goto } from "$app/navigation";
	import Btn from "$lib/Components/Btn.svelte";
    import { statics } from "$lib";
    import { convertDate } from "./generator";

	import { supabase } from "$lib/DB/supabaseConfig";
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import type { AuthTypes, ChatTypes } from "$lib/types";

    export let auth: AuthTypes;

    const dsComp = {
        loader: false,
        sendLoader: false,
        chatValue: "",
    }

    const handleFetch = async () =>
    {
        const {data, error:err} = await supabase.from("chat_system_tb").select("*").eq("host_uid", auth.uid).order("id", {ascending: true});

        $statics.chatArray = data as ChatTypes[];
    }

    onMount( async () => await handleFetch())

  
    const toastStore = getToastStore();

    const createToast = (msg: string, bg: string) =>
    {
        const t: ToastSettings = {
            message: `<p class="text-white font-sans font-bold">${msg}</p>`,
            background: bg
        };

        toastStore.trigger(t);
    }

    const chatSystemTb = supabase.channel('custom-all-channel')
    .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_system_tb' },
        async (payload) => {
            await handleFetch();
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

    let scrollBehav: HTMLDivElement | null = null;
    const scrollToBot = () =>
    {
        if(scrollBehav) scrollBehav.scrollTop = scrollBehav.scrollHeight;
           
    }
    
    let disabled = true;

    const checkText = () => dsComp.chatValue.trim().length > 1 ? disabled = false : disabled = true;

    const handleChat = async () => 
    {
        dsComp.sendLoader = true;
        const {error:err} = await supabase.from("chat_system_tb").insert({
            host_uid: auth.userInfo.id,
            display_name: auth.userInfo.user_metadata.display_name,
            messages: dsComp.chatValue,
            host_email: auth.userInfo.email,
        })
        
        if(err){
            dsComp.sendLoader = false;
            createToast(`Error at db location handle chat`, "bg-red-500");
        }else{
            dsComp.sendLoader = false;
            dsComp.chatValue = "";
            disabled = true;
            scrollToBot();
            setTimeout(()=> scrollToBot(), 1000);
            
        }
        
    }


    
</script>

<div class="mx-auto sm:max-w-4xl">
    <div class="">
        <div class="max-w-fit">
            <Btn pad="px-2 py-1" bg="bg-red-500" round="rounded-lg" name="Logout" loader={dsComp.loader} loader_name="drinking beer." on:click={logoutHandler}/>
        </div>
        <h4 class="h4 font-sans text-center">Hello {auth.userInfo.email}</h4>

        <div class="h-[60vh] border-[0.1rem] card p-4 flex flex-col gap-2 overflow-y-scroll font-sans " bind:this={scrollBehav}>
            {#if $statics.chatArray.length}
                {#each $statics.chatArray as chats}
                    
                    <div class="flex items-start {chats.host_email === auth.userInfo.email ? "flex" : "flex-row-reverse"}">

                        <img src="https://www.svgrepo.com/show/527946/user-circle.svg" alt="" class="w-14" />

                        <div class="w-full {chats.host_email === auth.userInfo.email ? "bg-[#C0DCDC]" : "bg-[#C9CEDE]"} flex  flex-col gap-2 card border-[0.1rem] border-blue-500 p-4 {chats.host_email === auth.userInfo.email ? " rounded-tr-3xl rounded-bl-3xl" : "rounded-tl-3xl rounded-br-3xl"} " in:fly={{x:-200, duration:1000}} >
                            <div class="flex">
                                <h6 class="h6 font-bold w-full font-sans">{chats.display_name}</h6>
                                <small class="font-sans w-full font-bold text-right opacity-50">{convertDate(chats.created_at)}</small>
                            </div>
            
                            <div class="p-2">
                                <p class="font-sans">{chats.messages}</p>
                            </div>
                        </div>
                    </div>
                    
                {/each}
            {:else}

                <p class="font-sans text-center text-green-800 p-4">No chat history.</p>

                <div class="h-[60vh] flex flex-col items-center justify-end">
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