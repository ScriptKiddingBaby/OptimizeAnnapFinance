<script lang="ts">
	import { statics } from "$lib";
	import Btn from "$lib/Components/Btn.svelte";
   
    import { onMount } from "svelte";
    import trashicon from "$lib/Images/InquireNow/trash.svg";
    import { scale } from "svelte/transition";

    import { v4 as uuidv4 } from 'uuid';
    import { supabase } from "$lib/DB/supabaseConfig";

    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    import { FileDropzone } from '@skeletonlabs/skeleton';
    const toastStore = getToastStore();

    const createToast = (msg: string, hasErr: boolean) =>
    {
        const t: ToastSettings = {
            message: `<p class="text-white "> ${msg} </p>`,
            background: `${hasErr ? "bg-red-500": "bg-green-500"}`
        };

        return toastStore.trigger(t);
    }

    onMount(() => $statics.navActiveItem = "/Career");

    const dsComp = {
        loader: false,
        domMsg: "",
        
    }

    let files: any;
    const uploadHandler = async () =>
    {
        
    }

    const step1Href = "https://docs.google.com/forms/d/14wj2Y8WtFOJrrGV5mVus5xFJsIDXAtHUagcRjwMemy0/viewform?edit_requested=true&pli=1#settings";
    const step2Href = "https://www.mediafire.com/file/bof1v0jwu7rx0mm/NEW-APP-FORM-2023.xlsx/file";
</script>

<div class="font-sans">

    <div class="pt-5 mx-5 max-w-fit">
        <a href="/Career" class="underline hover:text-red-500"><p class="font-semibold">Back to <b class="text-slate-500 font-normal">Career</b></p>  </a>
    </div>

    <h2 class="h2 text-center pt-10 font-serif font-bold">Loan Agent Career</h2>

    <div class="flex flex-col gap-2 lg:flex-row justify-center mt-5">
  
        <div class="card p-2 lg:p-10 flex flex-col gap-2 shadow-sm shadow-black">
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-bold">Step 1</h4>
                <div class="p-2">
                    <p class="pb-5">Fill up this Agent Accreditation Form</p>

                    <div class="flex flex-col lg:flex-row lg:gap-2">
                        <label>
                            <p class="font-bold">First Name:</p>
                            <input type="text" class="input rounded-none" />
                        </label>

                        <label>
                            <p class="font-bold">Middle Name:</p>
                            <input type="text" class="input rounded-none" />
                        </label>

                        <label>
                            <p class="font-bold">Last Name:</p>
                            <input type="text" class="input rounded-none" />
                        </label>
                    </div>

                    <label>
                        <p class="font-bold">Present Address:</p>
                        <input type="text" class="input rounded-none" />
                    </label>

                    <div class="flex flex-col lg:flex-row gap-2">
                        <label class="w-full">
                            <p class="font-bold">Date of Birth:</p>
                            <input type="date" class="input rounded-none" />
                        </label>

                        <label class="w-full">
                            <p class="font-bold">Civil Status:</p>
                            <select class="select rounded-none">
                                <option>Single</option>
                                <option>Married</option>
                                <option>Widowed</option>
                                <option>Divorced</option>
                                <option>Separated</option>
                            </select>
                        </label>

                        <label class="w-full">
                            <p class="font-bold">Gender:</p>
                            <select class="select rounded-none">
                                <option>Male</option>
                                <option>Female</option>
                                <option>LGBTQIA+</option>
                            </select>
                        </label>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:gap-2">

                        <label class="w-full">
                            <p class="font-bold">Contact Number:</p>
                            <input type="text" class="input rounded-none" />
                        </label>
                        
                        <label class="w-full">
                            <p class="font-bold">Email:</p>
                            <input type="email" class="input rounded-none" />
                        </label>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:gap-2">
                        

                        <label class="w-full">
                            <p class="font-bold">Facebook Account Link:</p>
                            <input type="email" class="input rounded-none" />
                        </label>
                        
                        <label class="w-full">
                            <p class="font-bold">G-Cash Number:</p>
                            <input type="email" class="input rounded-none" placeholder="Fully verified" />
                        </label>
                    </div>

                    <label class="w-full">
                        <p class="font-bold">Bank Name:</p>
                        <input type="email" class="input rounded-none" placeholder="Put N/A if not applicable" />
                    </label>

                    <label class="w-full">
                        <p class="font-bold">Bank Account:</p>
                        <input type="email" class="input rounded-none" placeholder="Put N/A if not applicable" />
                    </label>

                    <label class="w-full">
                        <p class="font-bold">Company Name:</p>
                        <input type="email" class="input rounded-none" placeholder="" />
                    </label>

                    <div class="flex flex-col lg:flex-row lg:gap-2">

                        <label class="w-full">
                            <p class="font-bold">Employment Status:</p>
                            <select class="select rounded-none">
                                <option>Employed</option>
                                <option>Self-Employed</option>
                                <option>Retired</option>
                                <option>Student</option>
                            </select>
                        </label>
                        
                        <label class="w-full">
                            <p class="font-bold">Position:</p>
                            <input type="text" class="input rounded-none" />
                        </label>
                    </div>

                    

                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-bold">Step 2</h4>
                <div class="p-2">
                    <p>Download the Application form and fill up the form.</p>
                    <a href={step2Href} target="_blank" class="text-blue-500 underline hover:text-red-500">Download Form</a>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-bold">Step 3</h4>
                <div class="p-2 flex flex-col gap-4">
                    <div class="flex flex-col gap-1 w-full">
                        <FileDropzone accept="image/png, image/jpeg, application/pdf" name="loan-agent-career" width="px-2 py-0" bind:files />

                        {#if files}
                            <div class="flex gap-1 mx-auto" transition:scale>
                                
                                <p class="font-semibold underline text-red-900">{files[0].name}</p>
                                <button class="text-red-500  transition-all active:scale-95" 
                                on:click={() => files = ""}
                                ><img loading="eager" src={trashicon} alt="" class="w-6 " title="Delete this file ?"/></button>
                            </div>
                        {/if}
                    </div>
                    
                    <p class=text-center>Upload the Agent Accreditation Form (accepted file format pdf, jpg, png, <i class="font-semibold">max size 70KB</i>).</p>
                    
                    <div class="flex flex-col gap-2 w-full">
                        <div class="flex items-center gap-4">
                            <input type="checkbox" class="checkbox" bind:checked={dsComp.tac}/>
                            <p>I agree with the <a target="_blank" href="http://localhost:5173/Home/Terms-And-Conditions" class="text-blue-500 underline hover:text-red-500">Terms and Conditions</a> of Annapolis Finance Incorporation</p>
                        </div>

                        <div class="flex items-center gap-4">
                            <input type="checkbox" class="checkbox" bind:checked={dsComp.pp}/>
                            <p>I accept the <a target="_blank" href="http://localhost:5173/Home/Privacy-Policy" class="text-blue-500 underline hover:text-red-500">Privacy Policy</a> of Annapolis Finance Incorporation</p>
                        </div>
                    </div>
                </div>

                <div class="max-w-fit mx-auto">
                    <Btn bg="bg-[#01009F]" pad="px-10 py-2" round="rounded-xl" name="Submit" loader={dsComp.loader} loader_name="Submitting" />
                </div>
            </div>
        </div>
        
    </div>


    <div class="flex flex-col lg:flex-row justify-evenly mt-10 border-t-[0.1rem] border-slate-500">
        <div class="p-4">
            <h4 class="h4 font-bold">Description</h4>
            <div class="p-2">
                <p>✔ Work Anytime Anywhere</p>
                <p>✔ No Qualifications</p>
                <p>✔ With free orientation</p>
                <p>✔ With additional incetive</p>
            </div>
        </div>

        <div class="p-4">
            <h4 class="h4 font-bold">Contacts</h4>
            <div class="p-2">
                <p class="font-semibold">Email:</p>
                <p class="underline text-blue-500 hover:text-red-500"><a href="mailto: mainannapolisfinance@gmail.com">mainannapolisfinance@gmail.com</a></p>
                <p class="font-semibold">Contact No:</p>
                <p class="">09159592858 / 09564280526</p>
            </div>
        </div>

        <div class="p-4">
            <h4 class="h4 font-bold">Job Locations</h4>
            <div class="p-2">
                <p>Unit 1508, 15th Floor, Jollibee Plaza Condominium, Junior Rd., Ortigas, Pasig City</p>
            </div>
        </div>
    </div>

    
</div>