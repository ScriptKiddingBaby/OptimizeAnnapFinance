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

</script>

<div class="mx-auto sm:max-w-4xl">
    <div class="flex flex-col gap-2">
        <div class="max-w-fit">
            <Btn pad="px-2 py-1" bg="bg-red-500" round="rounded-lg" name="Logout" loader={dsComp.loader} loader_name="drinking beer." on:click={logoutHandler}/>
        </div>
        <h4 class="h4 font-sans text-center">Hello {auth.userInfo.email}</h4>
        <div class="">
            <input type="text" class="input" placeholder="Search Users" />
        </div>
        <div class="card flex flex-col gap-2 overflow-y-scroll  p-2 h-[30vh]">
            
            <div class=" card p-5 border-[0.1rem] border-slate-400 ">
                <img src="https://www.svgrepo.com/show/527946/user-circle.svg" alt="" class="w-10 mx-auto" />
                <p class="text-center">Jason</p>
            </div>

            <div class=" card p-5 border-[0.1rem] border-slate-400 ">
                <img src="https://www.svgrepo.com/show/527946/user-circle.svg" alt="" class="w-10 mx-auto" />
                <p class="text-center">Jason</p>
            </div>

            <div class=" card p-5 border-[0.1rem] border-slate-400 ">
                <img src="https://www.svgrepo.com/show/527946/user-circle.svg" alt="" class="w-10 mx-auto" />
                <p class="text-center">Jason</p>
            </div>
            
            
            
            
        </div>
    </div>
</div>