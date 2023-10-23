<script lang="ts">
    import Btn from "$lib/Components/Btn.svelte";
	import { scale } from "svelte/transition";
	import { loginLogics } from "./loginStore";

    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { supabase } from "$lib/DB/supabaseConfig";
    const toastStore = getToastStore();
	
    const createToast = (msg: string, bg: string) =>
    {
        const t: ToastSettings = {
            message: `<p class="text-white font-bold"> ${msg} </p>`,
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
        if(dsComp.displayName.trim().length > 4){
            if(dsComp.email.includes("@") && dsComp.email.includes(".com") && dsComp.email.trim().length > 1){
                if(dsComp.confirmPassword === dsComp.password){
                    dsComp.loader = true;
                    const signUp = await $loginLogics.signUp(dsComp.email, dsComp.password, dsComp.displayName);
                    if(signUp?.error){
                        createToast(signUp.error.message, "bg-red-500");
                        dsComp.loader = false;
                    }else if(signUp?.data.user){
                        createToast("Successfully Created an Account", "bg-green-500");
                        dsComp.loader = false;
                    }
                }else{
                    createToast("Password not same", "bg-red-500");
                }
            }else{
                createToast("Invalid Email", "bg-red-500");
            }
        }else{
            createToast("Invalid Display Name", "bg-red-500");
        }
    }


</script>

<div class="flex flex-col gap-2" in:scale>
    <h3 class="h3 font-sans font-bold text-center py-4">Create Account. It's free!</h3>

    <label>
        <b>Display Name:</b>
        <input type="text" class="input rounded-none"  bind:value={dsComp.displayName}/>
    </label>

    <label>
        <b>Email:</b>
        <input type="email" class="input rounded-none"  bind:value={dsComp.email}/>
    </label>

    <label>
        <b>Choose Password:</b>
        <input type="password" class="input rounded-none"  bind:value={dsComp.password}/>
    </label>

    <label>
        <b>Confirm Password:</b>
        <input type="password" class="input rounded-none"  bind:value={dsComp.confirmPassword}/>
    </label>

    <div class="flex">
        <div class="w-full"></div>
        <Btn round="rounded-xl" name="Register" loader={dsComp.loader} loader_name="Registering." on:click={registerHandler}/>
        <div class="w-full"></div>
    </div>
    
    <div class="text-center mt-5">
        <p>Already have an account?</p>
        <button class="transition-all active:scale-95 hover:text-red-500 text-blue-500 underline"
        on:click={() => $loginLogics.showRegister = false}
        >Login here</button>
    </div>
</div>