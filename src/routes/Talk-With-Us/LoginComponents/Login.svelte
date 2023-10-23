<script lang="ts">
    import Btn from "$lib/Components/Btn.svelte";
	import { scale } from "svelte/transition";
	import { loginLogics } from "./loginStore";

    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
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
        email: "",
        password: "",
    }

    const loginHandler = async () =>
    {
        dsComp.loader = true;

        if(dsComp.email.includes("@") && dsComp.email.includes(".com") && dsComp.email.trim().length > 1){
            const login = await $loginLogics.signIn(dsComp.email, dsComp.password);
            if(login?.error){
                createToast(login.error.message, "bg-red-500");
                dsComp.loader = false;
            }else if(login?.data.user){
                createToast(`You are now logged in welcome ${login.data.user.user_metadata.displayName}`, "bg-green-500");
                dsComp.loader = false;
            }
        }else{
            createToast("Email not valid", "bg-red-500");
            dsComp.loader = false;
        }
        
    }

    


</script>

<div class="flex flex-col gap-2" in:scale>
    <h3 class="h3 font-sans font-bold text-center py-4">Login</h3>


    <label>
        <b>Email:</b>
        <input type="email" class="input rounded-none" bind:value={dsComp.email}/>
    </label>

    <label>
        <b>Password:</b>
        <input type="password" class="input rounded-none" bind:value={dsComp.password}/>
    </label>

    <div class="flex">
        <!--BUTTON HERE-->
        <div class="w-full"></div>
        <Btn round="rounded-xl" name="Login" loader={dsComp.loader} loader_name="Logging." on:click={loginHandler}/>
        <div class="w-full"></div>
    </div>
    
    <div class="text-center mt-5">
        <button class="transition-all active:scale-95 hover:text-red-500 text-blue-500 underline"
        on:click={() => $loginLogics.showForgotPassword = true}
        >Forgot Password?</button>
    </div>

    <div class="text-center mt-5">
        <p>You must have an account in-order to talk with admins</p>
        <button class="transition-all active:scale-95 hover:text-red-500 text-blue-500 underline"
        on:click={() => $loginLogics.showRegister = true}
        >Create Account</button>
    </div>
</div>