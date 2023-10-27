<script lang="ts">
	import { goto } from "$app/navigation";
	import Btn from "$lib/Components/Btn.svelte";
    import { statics } from "$lib";
    import { convertDate } from "./generator";

	import { supabase } from "$lib/DB/supabaseConfig";
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import type { AuthTypes, ChatTypes, UsersTB } from "$lib/types";
	import type { PostgrestSingleResponse } from "@supabase/supabase-js";

    export let auth: AuthTypes;

    let scrollBehav: HTMLDivElement | null = null;

    const scrollToBot = () =>
    {
        if(scrollBehav) scrollBehav.scrollTop = scrollBehav.scrollHeight;
           
    }


    const dsComp = {
        loader: false,
        sendLoader: false,
        chatValue: "",
    }

    const handleFetch = async (uid: string) =>
    {
        const chats:PostgrestSingleResponse<ChatTypes[]> = await supabase.from("chat_system_tb").select("*").eq("host_uid", uid).order("id", {ascending: true});

        if(chats.data){
            $statics.adminChatArray = chats.data;
        }else{
            //** error handling here*/
        }
    } 

    const getUsers = async () => 
    {
        const allUsersTb: PostgrestSingleResponse<UsersTB[]> = await supabase.from("users_tb").select("*");
        if(allUsersTb.data){

            let tobeFilter = allUsersTb.data;
            const filtered = tobeFilter.filter(item => item.is_admin === false);
            $statics.usersTbArray = filtered;

        }else if(allUsersTb.error){
            //** error handling here*/
        }
    }

    //admin firing mechanism for viewing chats
    const handleControlUsers = async (users_tb: UsersTB) =>
    {
        $statics.activeName = users_tb.display_name;
        $statics.activeItem = users_tb.id;
        $statics.userTbObj = users_tb;

        const getChats: PostgrestSingleResponse<ChatTypes[]> = await supabase.from("chat_system_tb").select("*").eq("host_uid", users_tb.uid);
        if(getChats.data){
            $statics.adminChatArray = getChats.data;
            
        }else{
            //** Error handling here*/
        }

    }

    onMount( async () => {
        await getUsers();
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

    const chatSystemTb = supabase.channel('custom-all-channel')
    .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_system_tb' },
        async (payload) => {
            const payloadInfo: any = payload.new;
            const uid: string = payloadInfo.host_uid
           await handleFetch(uid);
           scrollToBot();
        }
    )
    .subscribe();

    
    const usersTb = supabase.channel('custom-insert-channel')
    .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'users_tb' },
        async (payload) => {
            await getUsers();
        }
    )
    .subscribe();


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
    };
    
    let disabled = true;

    const checkText = () => dsComp.chatValue.trim().length > 1 ? disabled = false : disabled = true;

    const handleChat = async () => 
    {
        dsComp.sendLoader = true;
        const {error:err} = await supabase.from("chat_system_tb").insert({
            host_uid: $statics.userTbObj.uid,
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
            await handleFetch($statics.userTbObj.uid);
            
        }
        
    }

</script>

<div class="mx-auto sm:max-w-4xl ">
    <div class="max-w-fit">
        <Btn pad="px-2 py-1" bg="bg-red-500" round="rounded-lg" name="Logout" loader={dsComp.loader} loader_name="drinking beer." on:click={logoutHandler}/>
    </div>

    <h4 class="h4 font-sans text-center font-bold">Hello Admin!</h4>

    <div class="flex mt-5 ">
        <div class="border-[0.1rem] border-slate-500 rounded-l-2xl w-[25%]">      
            <div class="p-2 border-b-slate-500 border-b-[0.1rem]">
                <input type="text" class="input rounded-2xl w-full " placeholder="Search Contact..." />
            </div>

            <div class="p-2">
                <p class="font-sans font-bold opacity-50 p-2">Contacts</p>

                <div class="h-[50vh] overflow-auto flex flex-col gap-1">
                    {#each $statics.usersTbArray as users_tb}
                        <button class="flex items-center gap-2 rounded-2xl w-full px-2 py-1 transition-all hover:bg-slate-400 hover:text-white active:scale-95"
                        class:active={$statics.activeItem === users_tb.id}
                        on:click={() => handleControlUsers(users_tb)}

                        >
                            <img src="https://www.svgrepo.com/show/527946/user-circle.svg" alt="" class="w-10" />
                            <p class="font-sans font-semibold">{users_tb.display_name.slice(0,10)}</p>
                        </button>
                    {/each}
                </div>
            </div>
        </div>

        <div class="border-[0.1rem] w-[75%] border-r-slate-500 border-b-slate-500 border-t-slate-500 rounded-r-2xl p-2 break-words">
            <h4 class="h4 font-bold opacity-50">Chatting with {$statics.activeName}</h4>
            <div class="h-[60vh] overflow-auto flex flex-col gap-2 p-2" bind:this={scrollBehav}>
            
                {#if !$statics.adminChatArray.length}
                    <h3 class="h3 font-sans text-center p-2 opacity-50">No chat history</h3>
                {:else}
                    
                    {#each $statics.adminChatArray as chats }
                        <div class="flex items-start {chats.host_email === auth.userInfo.email ? "flex" : "flex-row-reverse"}">

                            <img src="https://www.svgrepo.com/show/527946/user-circle.svg" alt="" class="w-14" />
        
                            <div class="w-full overflow-x-hidden {chats.host_email === auth.userInfo.email ? "bg-[#C0DCDC]" : "bg-[#C9CEDE]"} flex  flex-col gap-2 card border-[0.1rem] border-blue-500 p-4 {chats.host_email === auth.userInfo.email ? " rounded-tr-3xl rounded-bl-3xl" : "rounded-tl-3xl rounded-br-3xl"} " in:fly={{x:-200, duration:1000}} >
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
</div>

<style>
    .active {
        background-color: #C0DCDC;
    }
</style>