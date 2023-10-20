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
        jobStatus: "",
        firstname: "",
        middlename: "",
        lastname: "",
        address: "",
        mobileNumber: "",
        email: "",
        motive: "",
        tac: false,
        pp: false,
    }

    let files: any;
    const uploadHandler = async () =>
    {
        const uid = uuidv4();
        const fullname = `${dsComp.lastname} ${dsComp.firstname} ${dsComp.middlename}`;

        if(dsComp.jobStatus.length > 4){
            if(dsComp.firstname.length > 2){
                if(dsComp.middlename.length > 1){
                    if(dsComp.lastname.length > 2){
                        if(dsComp.mobileNumber.length > 8){
                            if(dsComp.email.length > 4){
                                if(dsComp.motive.length > 17){
                                    if(files){
                                        if(dsComp.tac){
                                            if(dsComp.pp){
                                                dsComp.loader = true;
                                                const uploadFile = await supabase.storage.from("annap_bucket").upload(`inquire/${uid}`, files[0]);
                                                if(uploadFile.data){
                                                    const getLink = supabase.storage.from("annap_bucket").getPublicUrl(uploadFile.data.path);
                                                    if(getLink.data.publicUrl){
                                                        const insertInquire = await supabase.from("inquire_now_tb").insert({
                                                            uid: uid,
                                                            motive: dsComp.motive,
                                                            fullname: fullname,
                                                            address: dsComp.address,
                                                            mobile_number: dsComp.mobileNumber,
                                                            email: dsComp.email,
                                                            job_status: dsComp.jobStatus,
                                                            file_link: getLink.data.publicUrl,
                                                        })

                                                        dsComp.loader = false;
                                                        createToast("Your Information Uploaded!", false);
                                                    }
                                                }else if(uploadFile.error){
                                                    createToast(uploadFile.error.message, true);
                                                    dsComp.loader = false;
                                                }
                                            }else{
                                                createToast("You must agree Privacy Policy!", true)
                                            }
                                        }else{
                                            createToast("You must agree Terms and Conditions!", true);
                                        }
                                    }else{
                                        createToast("You must upload the annapolis file!", true)
                                    }
                                }else{
                                    createToast("Invalid Motive", true);
                                }
                            }else{
                                createToast("Invalid Email", true);
                            }
                        }else{
                            createToast("Invalid Mobile Number", true);
                        }
                    }else{
                        createToast("Invalid Last Name", true);
                    }
                }else{
                    createToast("Invalid Middle Name", true);
                }
            }else{
                createToast("Invalid First Name", true);
            }
        }else{
            createToast("Invalid Job Status", true);
        }
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
        <div class="card p-10 flex flex-col gap-2 shadow-sm shadow-black">
            <div class="flex flex-col gap-2"> 
                <h4 class="h4 font-serif font-semibold">Description</h4>
                <div class="p-2 ">
                    <p>✔ Work Anytime Anywhere</p>
                    <p>✔ No Qualifications</p>
                    <p>✔ With free orientation</p>
                    <p>✔ With additional incetive</p>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-semibold">Contacts</h4>
                <div class="p-2">
                    <p class="font-semibold">Email:</p>
                    <p class="underline text-blue-500 hover:text-red-500"><a href="mailto: mainannapolisfinance@gmail.com">mainannapolisfinance@gmail.com</a></p>
                    <p class="font-semibold">Contact No:</p>
                    <p class="">09159592858 / 09564280526</p>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-semibold">Job Locations</h4>
                <div class="p-2">
                    <p>Unit 1508, 15th Floor, Jollibee Plaza Condominium, Junior Rd., Ortigas, Pasig City</p>
                </div>
            </div>
        </div>
    
        <div class="card p-10 flex flex-col gap-2 shadow-sm shadow-black">
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-semibold">Step 1</h4>
                <div class="p-2">
                    <p>Fill up this Agent Accreditation Form using Google Form.</p>
                    <a href={step1Href} target="_blank" class="text-blue-500 underline hover:text-red-500">Agent Accreditation Form</a>
                </div>
            </div>
    
            <div class="flex flex-col gap-2">
                <h4 class="h4 font-serif font-semibold">Step 2</h4>
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
</div>