<script lang="ts">
	import { goto } from "$app/navigation";
	import Btn from "$lib/Components/Btn.svelte";
	import { supabase } from "$lib/DB/supabaseConfig";
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";

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
    }

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

<div class="mx-auto sm:max-w-xl">
    <div class="">
        <div class="max-w-fit">
            <Btn pad="px-2 py-1" bg="bg-red-500" round="rounded-lg" name="Logout" loader={dsComp.loader} loader_name="drinking beer." on:click={logoutHandler}/>
        </div>
        <h4 class="h4 font-sans text-center">Hello sample name</h4>

        <div class="min-h-[60vh] border-[0.1rem] border-[#EA861A] p-2">
            <div class="card p-2">
                <div class="flex">
                    <h6 class="h6 font-bold w-full font-sans">Peter</h6>
                    <p class="font-sans w-full font-semibold text-right opacity-50">09:42 PM</p>
                </div>

                <div class="p-2">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iste nostrum vero eligendi provident unde et modi architecto eius facere.
                    </p>
                </div>
            </div>
        </div>

        
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-2">
            <button class="input-group-shim">+</button>
            <textarea
                
                class="bg-transparent border-0 ring-0"
                name="prompt"
                id="prompt"
                placeholder="Write a message..."
                rows="1"
            />
            <button class="variant-filled-primary">Send</button>
        </div>
					
    </div>
</div>