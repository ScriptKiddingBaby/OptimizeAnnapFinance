<script lang="ts">
	import { page } from "$app/stores";
	import { statics } from "$lib";
	import Btn from "$lib/Components/Btn.svelte";
    import inquireBanner from "$lib/Images/InquireNow/inquireBanner.webp";
    import trashicon from "$lib/Images/InquireNow/trash.svg";
	import { onMount } from "svelte";

    import { FileDropzone } from '@skeletonlabs/skeleton';
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

    import { v4 as uuidv4 } from 'uuid';
    import { supabase } from "$lib/DB/supabaseConfig";
	import { scale } from "svelte/transition";


    onMount(() => $statics.navActiveItem = $page.url.pathname);

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

    const step1Href = "https://www.mediafire.com/file/hjp3mcwsls6o89v/UPDATED-APPLICATION-FORM.pdf/file";

    const firstLoop = ["EMPLOYED (private corporation)", "BUSINESS (1 year existing business)", "REMITTANCE", "ALLOTMENT", "RIDER"];

    const secondLoop = ["Sangla ORCR Motorcycle", "Sangla ORCR TRICYCLE", "Sangla ORCR Bigbike", "Finance Appliances", "Finance Iphone/Samsung"];
</script>

<Toast position="br" transitions={true} />

<div class="p-2">
    <div class="flex flex-col lg:flex-row gap-4 lg:items-stretch">
        <div class="">
            <img loading="eager" src={inquireBanner} alt="" class="w-full h-full" />
        </div>
       
        <div class="w-full flex flex-col gap-4 font-sans">
            <h4 class="h4 font-serif font-bold">Step 1</h4>
            <div class="p-2">
                <p>Download the form and fill it up.</p>
                <a href={step1Href} target="_blank" class="hover:text-red-500 text-blue-500 underline">Updated Application Form</a>
            </div>

            <h4 class="h4 font-serif font-bold">Step 2</h4>
            <div class="p-2 flex flex-col gap-2">

                <label>
                    <b>Job status:</b>
                    <select class="select" bind:value={dsComp.jobStatus}>
                        {#each firstLoop as selection }
                            <option>{selection}</option>
                        {/each}
                    </select>
                </label>

                <div class="flex flex-col gap-2 lg:flex-row">
                    <label>
                        <b>First Name:</b>
                        <input type="text" class="input" bind:value={dsComp.firstname}/>
                    </label>

                    <label>
                        <b>Middle Name:</b>
                        <input type="text" class="input" bind:value={dsComp.middlename}/>
                    </label>

                    <label>
                        <b>Last Name:</b>
                        <input type="text" class="input" bind:value={dsComp.lastname}/>
                    </label>
                </div>
                
                <label>
                    <b>Address:</b>
                    <input type="text" class="input" bind:value={dsComp.address}/>
                </label>

                <label>
                    <b>Mobile Number:</b>
                    <input type="text" class="input" bind:value={dsComp.mobileNumber}/>
                </label>

                <label>
                    <b>Email:</b>
                    <input type="text" class="input" bind:value={dsComp.email}/>
                </label>

                <label>
                    <b>Motive:</b>
                    <select class="select" bind:value={dsComp.motive}>
                        {#each secondLoop as selection }
                            <option>{selection}</option>
                        {/each}
                    </select>
                </label>

            </div>

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
                
                <p class=text-center>Upload the Application form (accepted file format pdf, jpg, png, <i class="font-semibold">max size 70KB</i>).</p>
                
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
                <Btn pad="px-10 py-2" round="rounded-xl" name="Submit" loader={dsComp.loader} loader_name="Submitting" on:click={uploadHandler}/>
            </div>
        </div>
        
    </div>
</div>