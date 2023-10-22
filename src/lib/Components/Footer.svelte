<script lang="ts">
	import Btn from "./Btn.svelte";
    import fb from "$lib/Images/Footer/footfb.svg";
    import ig from "$lib/Images/Footer/insta.svg";
    import tiktok from "$lib/Images/Footer/tiktok.svg";
    import twit from "$lib/Images/Footer/twitter.svg";
    import email from "$lib/Images/Footer/emails.svg";
    import rss from "$lib/Images/Footer/rss.svg";

    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    const toastStore = getToastStore();

    const createToast = (msg: string, hasErr: boolean) =>
    {
        const t: ToastSettings = {
            message: `<p class="text-white "> ${msg} </p>`,
            background: `${hasErr ? "bg-red-500": "bg-green-500"}`
        };

        return toastStore.trigger(t);
    }

    import { supabase } from "$lib/DB/supabaseConfig";

    const dsComp = {
        loader: false,
        email: "",
    }

    const handleSubscribe = async () =>
    {   
        if(dsComp.email.length > 5){
            if(dsComp.email.includes("@")){
                if(dsComp.email.includes(".com")){
                    dsComp.loader = true;
                    const {error} = await supabase.from("subscribed_tb").insert({email: dsComp.email});
                    if(error){
                        createToast("There is an error in database. Contact mikey dev for this sht!", true);
                        dsComp.loader = false;
                    }else{
                        createToast("Subscribed, you will be notified for the latest news!", false);
                        dsComp.loader = false;
                        dsComp.email = "";
                    }
                }else{
                    createToast("I think an email must have a pattern of .com isn't?", true);
                }
            }else{
                createToast("I think an email must have a pattern of @ isn't?", true);
            }
        }else{
            createToast("Enter a valid email", true);
        }
    }

</script>

<Toast position="br" transitions={true} />

<footer class="flex flex-col lg:flex-row justify-evenly border-[0.1rem] border-slate-500 text-black bg-slate-300 font-sans">
    <div class="flex flex-col gap-2 p-5">
        <h3 class="h3 font-bold">USEFUL LINKS</h3>
        <a href="/Home/Terms-And-Conditions" class="underline transition-all hover:text-red-500 max-w-fit">Terms and Conditions</a>
        <a href="/Home/Privacy-Policy" class="underline transition-all hover:text-red-500 max-w-fit">Privacy Policy</a>
        <a href="/Home/Payment-Options" class="underline transition-all hover:text-red-500 max-w-fit">Payment Options</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Contacts</a>
    </div>

    <div class="flex flex-col gap-2 p-5">
        <h3 class="h3 font-bold">RESOURCES</h3>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">News and updates</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Looking for a job?</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Download Forms</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Our Campaigns</a>
    </div>

    <div class="p-5">
        <div class="card p-5 flex flex-col gap-2 bg-slate-400 shadow-lg shadow-black">
            <h3 class="h3 font-bold text-black text-center">SIGNUP AND GET THE LATEST NEWS</h3>
            <input type="email" class="input" placeholder="Add your email address to subscribe" bind:value={dsComp.email}/>
            <div class="max-w-fit mx-auto">
                <Btn textColor="text-black" round="rounded-lg" bg="bg-[#0CFD0C]" name="Subscribe" loader={dsComp.loader} loader_name="Subscribing" on:click={handleSubscribe}/>
            </div>

            <div class="flex justify-center gap-4">
                <a href="/"><img src={fb} alt="" class="w-8 rounded-full" /></a>
                <a href="/"><img src={ig} alt="" class="w-8 rounded-full" /></a>
                <a href="/"><img src={tiktok} alt="" class="w-8 rounded-full" /></a>
                <a href="/"><img src={twit} alt="" class="w-8 rounded-full" /></a>
                <a href="/"><img src={email} alt="" class="w-8 rounded-full" /></a>
                <a href="/"><img src={rss} alt="" class="w-8 rounded-full" /></a>
            </div>

        </div>
    </div>

</footer>

<div class="p-2 text-center bg-black text-white">
    <pre class="text-sm font-sans">All rights reserve 2023 Annapolis Finance Inc.</pre>
</div>