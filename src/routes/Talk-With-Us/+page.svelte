<script lang="ts">
    import Login from "./LoginComponents/Login.svelte";
    import Register from "./LoginComponents/Register.svelte";
    import ForgotPassword from "./LoginComponents/ForgotPassword.svelte";
    import { onMount } from "svelte";

    import { loginLogics } from "./LoginComponents/loginStore";
	import { statics } from "$lib";
    import { supabase } from "$lib/DB/supabaseConfig";
	import ChatSystem from "./HasUser/ChatSystem.svelte";

    supabase.auth.onAuthStateChange( (event, session) => {
        if(event === "SIGNED_IN"){
            $loginLogics.hasUser = true;
        }else if(event === "SIGNED_OUT"){
            $loginLogics.hasUser = false;
        }
    })

    onMount(() => {
        $statics.navActiveItem = "/Talk-With-Us";

    })

</script>

<div class="mx-auto sm:max-w-xl mt-20 bg-white rounded-xl p-4 sm:p-10">
    {#if $loginLogics.hasUser}
        <ChatSystem />
    {:else}
        {#if $loginLogics.showRegister}
            <Register />
        {:else if $loginLogics.showForgotPassword}
            <ForgotPassword />
        {:else}
            <Login />
        {/if}
    {/if}

    
</div>