<script>
	import { base } from "$app/paths";
	import { NoPhotoIcon } from "./Icons";
	export let name, lattes, photo;
</script>

<a
	href={lattes}
	target="_blank"
	class="items-center bg-lightGray rounded-lg shadow-xl sm:flex hover:bg-offWhite">
	<div class="lg:max-w-[105px]">
		{#if photo}
			<img
				class="w-full h-full aspect-square object-cover rounded-lg md:rounded-lg sm:rounded-none sm:rounded-l-lg"
				src={base + photo}
				alt={name}
			/>
		{:else}
			<div class="flex justify-center py-5 lg:px-5">
				<NoPhotoIcon size={100} color='#d3d3d3'/>
			</div>
		{/if}
	</div>
	<div class="p-5 break-words overflow-hidden">
		<h3 class="text-sm md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
			{name}
		</h3>
	</div>
</a>
