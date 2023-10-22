<script lang="ts">
    import { statics } from "$lib";
    import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import MountCurrentLoc from "./MountCurrentLoc.svelte";
	import Btn from "$lib/Components/Btn.svelte";

	import email from "$lib/Images/Location/Slug/email.svg";
	import facebook from "$lib/Images/Location/Slug/facebook.svg";
	import gps from "$lib/Images/Location/Slug/gps.svg";
	import mobile from "$lib/Images/Location/Slug/mobile-phone.svg";

	const slugArray = ["Sangla ORCR", "Appliances Loan", "Gatgets Loan", "Repossesss Units"];

    $: {
		$statics.navActiveItem = `/Location/${$page.params.slug}`;
		if($page.url.pathname === "/Location/Head-Office"){
			$statics.locComparison = 0;
		}else if($page.url.pathname === "/Location/Antipolo-Marketing-Office"){	
			$statics.locComparison = 1;
		}else if($page.url.pathname === "/Location/Bulacan-Marketing-Office"){
			$statics.locComparison = 2;
		}else if($page.url.pathname === "/Location/Cavite-Marketing-Office"){
			$statics.locComparison = 3;
		}else if($page.url.pathname === "/Location/Paranaque-Marketing-Office"){
			$statics.locComparison = 4;
		}else if($page.url.pathname === "/Location/Pasig-Marketing-Office"){
			$statics.locComparison = 5;
		}else{
			onMount(() => goto("/"));
		}
	}

</script>



{#each $statics.locationRoutes as route, index}
	{#if $statics.locComparison === index}
		<div class="flex flex-col gap-4 sm:max-w-7xl mx-auto">

			<h2 class="h2 font-sans font-bold">{$page.url.pathname.slice(10)}</h2>

			<div class="flex flex-col gap-2 md:flex-row">
				<div class="w-full">
					<img loading="eager" src={route.rowOne.image} alt="" class="h-[50vh] w-full" />
				</div>
				<div class="w-full">
					<MountCurrentLoc latitude={route.rowOne.mapPosition.latitude} longitude={route.rowOne.mapPosition.longitutde}/>
				</div>
			</div>

			<div class="flex flex-col gap-2 md:flex-row">
				
				<div class="card flex flex-col gap-4 p-4 w-full font-sans">

					<h4 class="h4 font-bold font-sans py-4">{route.rowTwo.innerRowOne.header}</h4>

					<div class="flex items-center gap-2">
						<div class="">
							<img loading="eager" src={gps} alt="" class="w-8 rounded-full p-1" />
						</div>
						<a href={route.rowTwo.innerRowOne.address.link} target="_blank" class="hover:text-red-500 text-blue-500 underline ">{route.rowTwo.innerRowOne.address.name}</a>
					</div>
					
					<div class="flex items-center gap-2">
						<div class="">
							<img loading="eager" src={mobile} alt="" class="w-8 rounded-full p-1" />
						</div>

						<p class="">{route.rowTwo.innerRowOne.mobileNum}</p>
					</div>


					<div class="flex items-center gap-2">
						<div class="">
							<img loading="eager" src={facebook} alt="" class="w-8 rounded-full" />
						</div>
						<a href={route.rowTwo.innerRowOne.facebook.link} target="_blank" class="hover:text-red-500 text-blue-500 underline ">{route.rowTwo.innerRowOne.facebook.name}</a>
					</div>

					<div class="flex items-center gap-2 ">
						<div class="">
							<img loading="eager" src={email} alt="" class="w-8 rounded-full p-1" />
						</div>
						
						<a href="mailto: {route.rowTwo.innerRowOne.gmail}" target="_blank" class="hover:text-red-500 text-blue-500 underline ">{route.rowTwo.innerRowOne.gmail}</a>
					</div>

					
					<div class="card p-2 flex flex-col gap-2 shadow-sm shadow-black mt-6">
						<h4 class="h4 text-center font-sans font-bold">WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!</h4>
						<input type="email" class="input px-2 py-0 md:py-2" placeholder="Enter your email to get latest news!"/>
						<div class="max-w-fit mx-auto">
							<Btn bg="bg-green-500" pad="px-10 py-1 md:py-2" round="rounded-lg" name="Send"/>
						</div>
					</div>
					
					
				</div>
				
				<div class="card flex flex-col gap-4 p-4 w-full font-sans">
					<h4 class="h4 font-bold font-sans py-4">{route.rowTwo.innerRowTwo.header}</h4>
					<label>
						<b>Choose one:</b>
						<select class="select">
							{#each slugArray as selection }
								<option>{selection}</option>
							{/each}
						</select>
					</label>

					<div class="flex flex-col md:flex-row md:gap-2">
						<div class="w-full">
							<label>
								<b>Name:</b>
								<input type="text" class="input" />
							</label>
						</div>

						<div class="w-full">
							<label>
								<b>Mobile Number:</b>
								<input type="text" class="input" />
							</label>
						</div>
					</div>

					<label>
						<b>Email:</b>
						<input type="text" class="input" />
					</label>

					<label>
						<b>Message:</b>
						<textarea class="textarea" placeholder="Leave your message here."/>
					</label>

					<div class="max-w-fit mx-auto">
						<Btn bg="bg-green-500" pad="px-10 py-1 md:py-2" round="rounded-lg" name="Send"/>
					</div>
					
				</div>




			</div>

		</div>
	{/if}
{/each}




