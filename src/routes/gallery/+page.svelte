<script>
	import { GalleryCard } from '$lib/components';
	import { Pictures } from '$lib/data';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
	{#each Pictures as picture}
		<div>	
			<GalleryCard {picture} />
		</div>
	{/each}
</div>
