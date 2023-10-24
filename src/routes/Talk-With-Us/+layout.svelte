<script lang="ts">
    import { onMount } from "svelte";
    import { statics } from "$lib";

    onMount( () => $statics.navActiveItem = "/Talk-With-Us");

</script>

<div class="mt-10">
    <slot />
</div>