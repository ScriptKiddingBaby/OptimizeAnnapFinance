<script lang="ts">
    import sendIcon from "$lib/Images/ChatSystem/sendIcon.svg";
    import addIcon from "$lib/Images/ChatSystem/addIcon.svg";
	import Btn from "$lib/Components/Btn.svelte";

    import { loginLogics } from "../LoginComponents/loginStore";
    import { authenticated } from "$lib";
	import { supabase } from "$lib/DB/supabaseConfig";

    console.log($authenticated.uid)
    const chatSystem = supabase.channel('custom-all-channel')
    .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chat_system' },
        async (payload) => 
        {
            const {data, error:err} = await supabase.from("chat_system").select("*").eq("owner_uid", "")
        }
    )
    .subscribe();


    

    

    
</script>

<div class="">
    <div class="">
        <p>Welcome sample name!</p>
        <button class="transition-all bg-red-500 text-white px-2 rounded-lg font-bold font-sans active:scale-95"
        on:click={ async () => await $loginLogics.logout()}
        >Logout</button>
    </div>

    <h3 class="h3 font-bold text-center p-4 w-full">Talk with Admins</h3>
    <div class="max-h-[60vh] overflow-auto">
        
        <div class="mt-5 card font-sans p-4">
            <div class="flex gap-2 items-center">
                <p class="font-bold w-full">John Cena</p> 
                <small class="opacity-50 w-full text-right"> 10:44 AM</small>
            </div>

            <div class="p-4">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro expedita, assumenda, animi tenetur molestiae facilis quasi reiciendis quis molestias aliquid fugiat reprehenderit blanditiis placeat. Repudiandae rerum sapiente dolore dolorum eius.</p>
            </div>
        </div>

        <div class="mt-5 card font-sans p-4 bg-[#C0D9E1]">
            <div class="flex gap-2 items-center e">
                <p class="font-bold w-full">Francis M Legit Father</p> 
                <small class="opacity-50 w-full text-right"> 02:28 PM</small>
            </div>

            <div class="p-4">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro expedita, assumenda, animi tenetur molestiae facilis quasi reiciendis quis molestias aliquid fugiat reprehenderit blanditiis placeat. Repudiandae rerum sapiente dolore dolorum eius.</p>
            </div>
        </div>

        
					
    </div>

    
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token mt-2">
	<button class="input-group-shim">+</button>
	<textarea
		
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
	/>
	<button class="input-group-shim">
        <img src={sendIcon} alt="" class="w-4" />
    </button>
</div>
					
</div>