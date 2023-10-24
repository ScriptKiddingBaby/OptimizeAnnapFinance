<script lang="ts">
	import Btn from "$lib/Components/Btn.svelte";
	import { fly } from "svelte/transition";


    import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { supabase } from "$lib/DB/supabaseConfig";
	import { goto } from "$app/navigation";
	import { statics } from "$lib";

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
        email: "",
        password: "",
     
    }   

    const loginHandler = async () =>
    {   
        dsComp.loader = true;
        const {data, error:err} = await supabase.auth.signInWithPassword({
            email: dsComp.email,
            password: dsComp.password
        });

        if(data.user){

            $statics.userObject = data.user;
            
            const res = await fetch("/Talk-With-Us/Login", {
                method: "POST",
                headers: {
                    "authorization": `Bearer ${data.session.access_token}`
                },
                body: JSON.stringify({
                    authToken: data.session.access_token
                })
            })

            if(await res.json() === "success"){
                goto("/Talk-With-Us/User");
                dsComp.loader = false;
            }

        }else if(err){
            createToast(err.message, "bg-red-500");
            dsComp.loader = false;
        }
    }


</script>

<div class="mx-auto sm:max-w-xs flex flex-col gap-4" in:fly={{x:-100, duration: 500}}>
    <h3 class="h3 font-sans text-center font-bold">Login</h3>
    <div class="flex flex-col gap-2">
        <label>
            <pre class="font-bold font-sans">Email:</pre>
            <input type="email" class="input rounded-lg" bind:value={dsComp.email}/>
        </label>
    
        <label>
            <pre class="font-bold font-sans">Password:</pre>
            <input type="password" class="input rounded-lg" bind:value={dsComp.password}/>
        </label>
    
        <Btn round="rounded-lg" name="Login" loader={dsComp.loader} loader_name="Logging." on:click={loginHandler} />
    </div>
    <div class="">
        <a href="/Talk-With-Us/Forgot-Password"><p class="font-sans underline text-blue-500 text-center transition-all hover:text-red-500 active:scale-95">Forgot Password?</p></a>
    </div>

    <div class="">
        <a href="/Talk-With-Us/Create-Account"><p class="font-sans underline text-blue-500 text-center transition-all hover:text-red-500 active:scale-95">Create Account</p></a>
    </div>
</div>