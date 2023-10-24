<script lang="ts">
	import Btn from "$lib/Components/Btn.svelte";   
    import { fly } from "svelte/transition";

    import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { supabase } from "$lib/DB/supabaseConfig";

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
    }

    const handleResetPws = async () =>
    {
        dsComp.loader = true;
        const {error:err} = await supabase.auth.resetPasswordForEmail(dsComp.email);
        if(err){
            createToast(err.message, "bg-red-500");
            dsComp.loader = false;
        }else{
            createToast(`An email have been sent to ${dsComp.email}`, "bg-green-500");
            dsComp.loader = false;
        }
    }

</script>

<div class="mx-auto sm:max-w-xs flex flex-col gap-4" in:fly={{x:-100, duration: 500}}>
    <h3 class="h3 font-sans text-center font-bold">Forgot Password</h3>
    <div class="flex flex-col gap-2">
        <label>
            <pre class="font-bold font-sans">Email:</pre>
            <input type="email" class="input rounded-lg" />
        </label>

        <Btn round="rounded-lg" name="Send" loader={dsComp.loader} loader_name="Sending." on:click={handleResetPws} />
    </div>
    <div class="">
        <a href="/Talk-With-Us/Login"><p class="font-sans underline text-blue-500 text-center transition-all hover:text-red-500 active:scale-95">Login here</p></a>
    </div>

</div>