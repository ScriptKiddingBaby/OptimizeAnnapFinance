<script lang="ts">
    import NormalUser from "./NormalUser.svelte";
    import AdminUser from "./AdminUser.svelte";
    import { statics } from "$lib";
	import type { PageData } from "./$types";
	import type { AuthTypes, ChatTypes } from "$lib/types";
	import type { PostgrestSingleResponse, User } from "@supabase/supabase-js";
	import { supabase } from "$lib/DB/supabaseConfig";

    export let data: PageData

    let auth: AuthTypes = {
        userInfo: data.userInfo as User,
        isAdmin: data.isAdmin as boolean,
        uid: data.uid as string,
    }


</script>

{#if auth.isAdmin}
    <AdminUser {auth}/>
{:else}
    <NormalUser {auth}/>
{/if}

