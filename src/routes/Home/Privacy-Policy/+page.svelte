<script lang="ts">
	import { onMount } from "svelte";
    import { statics } from "$lib";

    onMount(() => {
        $statics.navActiveItem = "/";
    })
</script>

<div class="">
    <div class="pt-5 mx-5 max-w-fit mt-5">
        <a href="/" class="underline hover:text-red-500"><p class="font-semibold">Back to <b class="text-slate-500 font-normal">Home</b></p>  </a>
    </div>

    <div class="mt-5">
        <h2 class="h2 text-center">Privacy Policy</h2>
    </div>

    <div class="card md:max-w-xl p-4 flex flex-col gap-4 shadow-sm shadow-black mt-5 mx-auto">
        <p>
            Annapolis Finance Inc respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and disclose information about you when you visit our website or use our services.
        </p>

        <div class="flex flex-col gap-2">
            <h5 class="h5 ">Information We Collect</h5>
            <div class="px-2">
                <p>
                    We may collect the following types of information from you, such as 
                    personal information, this includes your name, email address, phone number, and other information you provide to us when you use our services or contact us.
                </p>

                <h6 class="h6 text-slate-900">Payment Information:</h6>
                <p>This includes information related to payments made to us, such as credit card information or bank account details.</p>

                <h6 class="h6 text-slate-900">Usage Information:</h6>
                <p>This includes information about how you use our website or services, such as the pages you visit or the actions you take.</p>

                <h6 class="h6 text-slate-900">Device Information:</h6>
                <p>This includes information about the device you use to access our website or services, such as your IP address, browser type, and operating system.</p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h5 class="h5">How We Use Your Information</h5>
            <div class="px-2">
                <h6 class="h6 text-slate-900">We use the information we collect for the following purposes:</h6>
                <p>To provide and improve our services to you.
                    To communicate with you about your account or our services.
                    To process payments and prevent fraud.
                    To personalize your experience on our website.
                    To comply with legal obligations.</p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h5 class="h5">How We Share Your Information</h5>
            <div class="px-2">
                <h6 class="h6 text-slate-900">We may share your information with third parties in the following circumstances:</h6>
                <p>
                    With service providers who perform services on our behalf, such as payment processing or data analytics.
                    With business partners or affiliates with whom we collaborate to provide services to you.
                    With government authorities or law enforcement officials in response to a legal request or to comply with a legal obligation.
                    In connection with a merger, acquisition, or sale of all or a portion of our business.
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h5 class="h5">Your Choices</h5>
            <div class="px-2">
                <p>
                    You can choose not to provide us with certain information, but this may limit your ability to use certain features of our website or services. You can also opt out of receiving promotional emails from us by following the instructions in those emails.
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h5 class="h5">Security</h5>
            <div class="px-2">
                <p>
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h5 class="h5">Children’s Privacy</h5>
            <div class="px-2">
                <p>
                    Our website and services are not directed at children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2">
            <h5 class="h5">Contact Us</h5>
            <div class="px-2">
                <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us click here 
                </p>
            </div>
        </div>

        <p>
            Changes to this Privacy Policy We may update this Privacy Policy from time to time. The latest version of this Privacy Policy will be posted on our website.  
        </p>

        
        
        
    </div>
</div>