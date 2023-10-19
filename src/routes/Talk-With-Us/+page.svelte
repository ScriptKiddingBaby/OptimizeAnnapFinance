<script lang="ts">
	import { statics } from "$lib";
	import Btn from "$lib/Components/Btn.svelte";
	import { onMount } from "svelte";

    onMount(() => {
        $statics.navActiveItem = "/Talk-With-Us"
    })
</script>

<div class="md:max-w-xl mx-auto">
    <div class=" card p-4 mt-10">
        <h2 class="h2 text-center">Talk With Admins</h2>
        <div class="flex flex-col gap-2">
            <label>
                <b>Email:</b>
                <input type="text" class="input" />
            </label>

            <label>
                <b>Password:</b>
                <input type="password" class="input" />
            </label>

            <div class="max-w-fit mx-auto">
                <Btn round="rounded-lg" name="Login"/>
            </div>
        </div>
    </div>

    <div class="text-center mt-5">
        <p>You must have an account in order to make chat with admins</p>
        <a href="/Talk-With-Us/Create-Account" class="text-blue-500 underline hover:text-red-500">Create Account</a>
    </div>

    <div class="text-center mt-5">
        <p>If you lost your password you can recover it here</p>
        <a href="/Talk-With-Us/Forgot-Password" class="text-blue-500 underline hover:text-red-500">Forgot Password?</a>
    </div>
    
        
    
</div>