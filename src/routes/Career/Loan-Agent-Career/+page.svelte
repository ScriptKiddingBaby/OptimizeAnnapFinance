<script lang="ts">
	import Btn from "$lib/Components/Btn.svelte";
import { FileButton } from "@skeletonlabs/skeleton";




    const step1Href = "https://docs.google.com/forms/d/14wj2Y8WtFOJrrGV5mVus5xFJsIDXAtHUagcRjwMemy0/viewform?edit_requested=true&pli=1#settings";
    const step2Href = "https://www.mediafire.com/file/bof1v0jwu7rx0mm/NEW-APP-FORM-2023.xlsx/file";
</script>

<div class="my-10">

    <div class="pt-5 mx-5 max-w-fit">
        <a href="/Career" class="underline hover:text-red-500"><p class="font-semibold">Back to <b class="text-slate-500 font-normal">Career</b></p>  </a>
    </div>

    <h2 class="h2 text-center pt-10">Loan Agent Career</h2>

    <div class="flex flex-col gap-2 lg:flex-row justify-center mt-5">
        <div class="card p-10 flex flex-col gap-2 shadow-sm shadow-black">
            <div class="flex flex-col gap-2"> 
                <h3 class="h3">Description</h3>
                <div class="p-2">
                    <p>✔ Work Anytime Anywhere</p>
                    <p>✔ No Qualifications</p>
                    <p>✔ With free orientation</p>
                    <p>✔ With additional incetive</p>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h3 class="h3">Contact</h3>
                <div class="p-2">
                    <p>Email:</p>
                    <p class="italic">mainannapolisfinance@gmail.com</p>
                    <p>Contact No:</p>
                    <p class="italic">09159592858 / 09564280526</p>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h3 class="h3">Job Locations</h3>
                <div class="p-2">
                    <p>Unit 1508, 15th Floor, Jollibee Plaza Condominium, Junior Rd., Ortigas, Pasig City</p>
                </div>
            </div>
        </div>
    
        <div class="card p-10 flex flex-col gap-2 shadow-sm shadow-black">
            <div class="flex flex-col gap-2">
                <h3 class="h3">Step 1</h3>
                <div class="p-2">
                    <p>Fill up this Agent Accreditation Form using Google Form.</p>
                    <a href={step1Href} target="_blank" class="text-blue-500 underline italic hover:text-red-500">Agent Accreditation Form</a>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h3 class="h3">Step 2</h3>
                <div class="p-2">
                    <p>Download the Application form and fill up the form.</p>
                    <a href={step2Href} target="_blank" class="text-blue-500 underline italic hover:text-red-500">Download Form</a>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h3 class="h3">Step 3</h3>
                <div class="p-2 flex flex-col gap-2">
                    <FileButton name="loan-agent-career" width="px-2 py-0" />
                    <p>Upload the Application form (accepted file format pdf, jpg, png).</p>
                    
                    <div class="p-2">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="checkbox" />
                            <p>I agree with the Terms and Conditions of Annapolis Finance Incorporation</p>
                        </div>
    
                        <div class="flex items-center gap-2">
                            <input type="checkbox" class="checkbox" />
                            <p>I accept the Privacy Policy of Annapolis Finance Incorporation</p>
                        </div>
                    </div>
                </div>

                <div class="max-w-fit mx-auto">
                    <Btn pad="px-10 py-2" round="rounded-xl" name="Submit"/>
                </div>
            </div>
        </div>
    </div>
</div>