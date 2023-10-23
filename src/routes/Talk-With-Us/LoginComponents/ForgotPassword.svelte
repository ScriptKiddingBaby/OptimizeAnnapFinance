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
    }

    const recoverPwsHandler = async () =>
    {
        dsComp.loader = true;
        const sendResetPws = await $loginLogics.forgotPassword(dsComp.email);
        if(sendResetPws.error){
            createToast(sendResetPws.error.message, "bg-red-500");
            dsComp.loader = false;
        }else {
            createToast(`Password reset link has been sent to ${dsComp.email}`, "bg-green-500");
            dsComp.loader = false;
        }
        
    }
</script>

<div class="flex flex-col gap-2" in:scale>
    <h3 class="h3 font-sans font-bold text-center py-4">Forgot Password? We got you!</h3>
    <p class="text-center text-green-500">An email with password reset link will be send.</p>

    <label>
        <b>Email:</b>
        <input type="email" class="input rounded-none" placeholder="An email with password reset link will be send" bind:value={dsComp.email}/>
    </label>

    <div class="flex">
        <div class="w-full"></div>
        <Btn round="rounded-xl" name="Send Email" loader={dsComp.loader} loader_name="Sending." on:click={recoverPwsHandler}/>
        <div class="w-full"></div>
    </div>
    
    <div class="text-center mt-5">
        <button class="transition-all active:scale-95 hover:text-red-500 text-blue-500 underline"
        on:click={() => $loginLogics.showForgotPassword = false}
        >Login here</button>
    </div>

</div>