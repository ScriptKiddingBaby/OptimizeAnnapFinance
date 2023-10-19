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
        <h2 class="h2 text-center">Terms and Conditions</h2>
    </div>

    <div class="card md:max-w-xl p-4 flex flex-col gap-4 shadow-sm shadow-black mt-5 mx-auto">
        <p>
            These Terms and Conditions govern your use of the Annapolis Finance Inc. website (annapolisfinance.com.ph) and any services provided by Annapolis Finance Inc. By accessing or using our website, you agree to be bound by these Terms and Conditions.
        </p>

        <p>
            <b>Use of Website</b><br>
            You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of our website by any third party. You are responsible for ensuring that your use of our website complies with all applicable laws and regulations.
        </p>

        <p>
            <b>Intellectual Property</b><br>
            All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Annapolis Finance Inc. or its licensors and is protected by intellectual property laws. You may not use, reproduce, modify, distribute, or display any part of our website without our prior written consent.
        </p>

        <p>
            <b>Disclaimer of Warranties</b><br>
            Our website and services are provided “as is” and without warranties of any kind, whether express or implied. We make no representations or warranties about the accuracy, completeness, or reliability of any content on our website or any services provided by Annapolis Finance Inc.
        </p>

        <p>
            <b>Limitation of Liability</b><br>
            In no event shall Annapolis Finance Inc. be liable for any damages arising out of or in connection with your use of our website or any services provided by Annapolis Finance Inc., including but not limited to direct, indirect, incidental, special, or consequential damages.

        </p>

        <p>
            <b>Third Party Links</b><br>
            Our website may contain links to third-party websites or services that are not owned or controlled by Annapolis Finance Inc. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Annapolis Finance Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such third-party websites or services.
        </p>
        
        <p>
            <b>Modification of Terms and Conditions</b><br>
            We may modify these Terms and Conditions at any time by posting the modified terms on our website. Your continued use of our website after any such modifications shall constitute your acceptance of the modified terms.
        </p>

        <p>
            <b>Governing Law and Jurisdiction</b><br>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the Philippines. Any dispute arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of the Philippines. Contact Us If you have any questions about these Terms and Conditions or our website, please contact us at info@192.168.254.108.
        </p>
    </div>
</div>