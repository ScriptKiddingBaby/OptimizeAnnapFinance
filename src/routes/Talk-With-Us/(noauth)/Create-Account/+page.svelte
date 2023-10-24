<script lang="ts">
	import Btn from "$lib/Components/Btn.svelte";
    import { fly } from "svelte/transition";
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { supabase } from "$lib/DB/supabaseConfig";
	import { goto } from "$app/navigation";

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
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }   

    const registerHandler = async () =>
    {
        if(dsComp.displayName.trim().length > 3){
            if(dsComp.password === dsComp.confirmPassword){
                dsComp.loader = true;
                const {data, error} = await supabase.auth.signUp({email: dsComp.email, password: dsComp.password, options:{
                    data: {
                        display_name: dsComp.displayName,
                        admin: false
                    }
                }})
                if(data.user){
                    const insert = await supabase.from("normal_users_tb").insert({
                        owner_uid: data.user.id,
                        owner_email: data.user.email,
                        owner_display_name: data.user.user_metadata.displayName,
                    });

                    if(insert.error){
                        createToast(`${insert.error.message}`, "bg-red-500");
                        dsComp.loader = false;
                    }else {

                        const parse = JSON.parse(localStorage.getItem("sb-aritmjndldlhjuevgtiv-auth-token") as string)
                        const res = await fetch("/Talk-With-Us/Create-Account", {
                            method: "POST",
                            headers: {
                                "Authorization": `Bearer ${parse.access_token}`
                            },
                            body: JSON.stringify({
                                authToken: parse.access_token
                            })
                        })

                        if(await res.json() === "success"){
                            createToast("Account Created", "bg-green-500");
                            goto("/Talk-With-Us/User");
                            dsComp.loader = false;
                        }

                    }
                }else if(error){
                    createToast(`${error.message}`, "bg-red-500");
                    dsComp.loader = false;
                }
            }else{
                createToast("Password not same", "bg-red-500");
            }
        }else{
            createToast("Not valid Display Name", "bg-red-500");
        }
    }

</script>

<div class="mx-auto sm:max-w-xs flex flex-col gap-4" in:fly={{x:-100, duration: 500}}>
    <h3 class="h3 font-sans text-center font-bold">Create Account, It's Free!</h3>
    <div class="flex flex-col gap-2">
        <label>
            <pre class="font-bold font-sans">Display Name:</pre>
            <input type="text" class="input rounded-lg" bind:value={dsComp.displayName}/>
        </label>

        <label>
            <pre class="font-bold font-sans">Email:</pre>
            <input type="email" class="input rounded-lg" bind:value={dsComp.email}/>
        </label>
    
        <label>
            <pre class="font-bold font-sans">Choose Password:</pre>
            <input type="password" class="input rounded-lg" bind:value={dsComp.password}/>
        </label>
        
        <label>
            <pre class="font-bold font-sans">Confirm Password:</pre>
            <input type="password" class="input rounded-lg" bind:value={dsComp.confirmPassword}/>
        </label>

        <Btn round="rounded-lg" name="Register" loader={dsComp.loader} loader_name="Registering" on:click={registerHandler} />
    </div>

    <div class="">
        <a href="/Talk-With-Us/Login"><p class="font-sans underline text-blue-500 text-center transition-all hover:text-red-500 active:scale-95">Login here</p></a>
    </div>
</div>