<script lang="ts">
	import { goto } from "$app/navigation";
	import Btn from "$lib/Components/Btn.svelte";
	import { supabase } from "$lib/DB/supabaseConfig";

    const logoutHandler = async () => 
    {
        const {error} = await supabase.auth.signOut();
        
        const res = await fetch("/Talk-With-Us/User", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                authToken: "authToken"
            })
        })

        if(await res.json() === "success"){
            goto("/Talk-With-Us/Login")
        }
    }

</script>

<div class="">
    <Btn name="Logout" on:click={logoutHandler}/>
</div>