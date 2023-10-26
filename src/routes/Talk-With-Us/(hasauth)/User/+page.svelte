<script lang="ts">
    import NormalUser from "./NormalUser.svelte";
    import AdminUser from "./AdminUser.svelte";
    import { statics } from "$lib";
	import type { PageData } from "./$types";
	import type { AuthTypes } from "$lib/types";
	import type { User } from "@supabase/supabase-js";

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

