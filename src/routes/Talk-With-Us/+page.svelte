<script lang="ts">
	import { statics } from "$lib";
	import Btn from "$lib/Components/Btn.svelte";
	import { onMount } from "svelte";

    import fbIcon from "$lib/Images/TalkWithAdmins/facebook.svg";
    import googleIcon from "$lib/Images/TalkWithAdmins/google.svg";
    import twitterIcon from "$lib/Images/TalkWithAdmins/twitter.svg";

    onMount(() => {
        $statics.navActiveItem = "/Talk-With-Us"
    })
</script>

<div class="md:max-w-lg mx-auto ">
    <div class=" mt-10">
        <h3 class="h3 text-center font-serif font-bold p-2">Talk With Admins</h3>
        <div class="flex flex-col gap-2">
            <label>
                <b>Email:</b>
                <input type="text" class="input rounded-lg" />
            </label>

            <label>
                <b>Password:</b>
                <input type="password" class="input rounded-lg" />
            </label>

            
            <Btn round="rounded-lg" name="Login"/>
            
        </div>
    </div>
    
    
    <div class="text-right mt-2">
        <a href="/Talk-With-Us/Forgot-Password" class="text-blue-500 underline hover:text-red-500"><p>Forgot Password?</p></a>
    </div>
    
    <div class="flex flex-col gap-2 mt-5">
        <p class="font-bold text-center">or log in with</p>
        
       
            
            <button class="p-2 input rounded-2xl hover:shadow-lg shadow-black flex items-start gap-2 justify-center">
                <img loading="eager" src={googleIcon} alt="" class="w-5" />
                <p class="font-bold">Google</p>
            </button>

            <button class="p-2 input rounded-2xl hover:shadow-lg shadow-black flex items-start gap-2 justify-center">
                <img loading="eager" src={twitterIcon} alt="" class="w-5" />
                <p class="font-bold">Twitter</p>
            </button>

            <button class="p-2 input rounded-2xl hover:shadow-lg shadow-black flex items-start gap-2 justify-center">
                <img loading="eager" src={fbIcon} alt="" class="w-5" />
                <p class="font-bold">Facebook</p>
            </button>

            <div class="mt-5">
                <p class="text-center">You must have an acccount or able to login via social platforms listed above. Or <a href="/Talk-With-Us/Create-Account" class="text-blue-500 underline hover:text-red-500">Create Account</a></p>
            </div>
    
    </div>

    
   

    
    
        
    
</div>