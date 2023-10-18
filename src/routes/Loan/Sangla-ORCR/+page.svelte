<script lang="ts">
    import motorBanner from "$lib/Images/Loan/SanglaORCR/motorBanner.webp";
    import tricycleBanner from "$lib/Images/Loan/SanglaORCR/tricycleBanner.webp";
    import banner1 from "$lib/Images/Loan/SanglaORCR/banner1.webp";
    import banner2 from "$lib/Images/Loan/SanglaORCR/banner2.webp";
    import banner3 from "$lib/Images/Loan/SanglaORCR/banner3.webp";

    import { onMount } from "svelte";
    import { statics } from "$lib";
    onMount(() => {$statics.navActiveItem = "/Loan/Sangla-ORCR"})
</script>

<div class="flex flex-col gap-4">
    <div class="sm:max-w-xl mx-auto text-center pt-10">
        <h2 class="h2">Sangla ORCR</h2>
        <p>ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles.</p>
    </div>

    <div class="flex flex-col md:flex-row gap-2 mt-2">
        <div class="card flex flex-col gap-2 p-4 w-full">
            <div class="">
                <img loading="eager" src={motorBanner} alt="" class="w-full h-[50vh]" />
            </div>

            <div class="">
                <h4 class="h4">Motorcycle (Sangla OR/CR)</h4>
                <p>No Hassle Cash Loan! Magpasa ka lang ng complete requirements sa Facebook Messenger pwede na mag apply!</p>

                <div class="p-2">
                    <p>✔ 2015 and up to latest model are accepted</p>
                    <p>✔ Original OR CR</p>
                    <p>✔ 2 valid ID's</p>
                    <p>✔ Latest Electricity or Water billing</p>
                    <p>✔ Latest 2months Proof of income</p>
                </div>
            </div>
        </div>

        <div class="card flex flex-col gap-2 p-4 w-full">
            <div class="">
                <img loading="eager" src={tricycleBanner} alt="" class="w-full h-[50vh]" />
            </div>

            <div class="">
                <h4 class="h4">Motorcycle (Sangla OR/CR)</h4>
                <p>Malapit na ang Due date ng bills? You can borrow money to meet your financial needs! SANGLA OR CR ng Motor Hindi kukunin ang unit!</p>

                <div class="p-2">
                    <p>✔ Pwede Online Application</p>
                    <p>✔ Pwede mag walk in sa branch</p>
                    <p>✔ Mababang interes</p>
                    <p>✔ Approve agad basta kumpleto ang requirements!</p>
                    <p>✔ 1-3 days process</p>
                </div>
            </div>
        </div>
        
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center gap-2">
        <div class="">
            <img loading="eager" src={banner1} alt="" class="w-[300px] h-[30vh]" />
        </div>

        <div class="">
            <img loading="eager" src={banner2} alt="" class="w-[300px] h-[30vh]" />
        </div>

        <div class="">
            <img loading="eager" src={banner3} alt="" class="w-[300px] h-[30vh]" />
        </div>
    </div>
</div>