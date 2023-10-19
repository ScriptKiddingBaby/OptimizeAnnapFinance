<script lang="ts">
	import Btn from "./Btn.svelte";
    import fb from "$lib/Images/Footer/footfb.svg";
    import ig from "$lib/Images/Footer/insta.svg";
    import tiktok from "$lib/Images/Footer/tiktok.svg";
    import twit from "$lib/Images/Footer/twitter.svg";
    import email from "$lib/Images/Footer/emails.svg";
    import rss from "$lib/Images/Footer/rss.svg";

</script>

<footer class="flex flex-col lg:flex-row justify-evenly border-[0.1rem] border-slate-500 text-black bg-slate-300">
    <div class="flex flex-col gap-2 p-5">
        <h3 class="h3">USEFUL LINKS</h3>
        <a href="/Home/Terms-And-Conditions" class="underline transition-all hover:text-red-500 max-w-fit">Terms and Conditions</a>
        <a href="/Home/Privacy-Policy" class="underline transition-all hover:text-red-500 max-w-fit">Privacy Policy</a>
        <a href="/Home/Payment-Options" class="underline transition-all hover:text-red-500 max-w-fit">Payment Options</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Contacts</a>
    </div>

    <div class="flex flex-col gap-2 p-5">
        <h3 class="h3">RESOURCES</h3>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">News and updates</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Looking for a job?</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Download Forms</a>
        <a href="/" class="underline transition-all hover:text-red-500 max-w-fit">Our Campaigns</a>
    </div>

    <div class="p-5">
        <div class="card p-5 flex flex-col gap-2 bg-slate-400 shadow-lg shadow-black">
            <h2 class="h2 text-white text-center">SIGNUP AND GET THE LATEST NEWS</h2>
            <input type="email" class="input" placeholder="Add your email address to subscribe" />
            <div class="max-w-fit mx-auto">
                <Btn round="rounded-lg" bg="bg-green-500" name="Subscribe"/>
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
    <p class="text-sm">Copyright 2023 Annapolis Finance Inc.</p>
</div>