<script>
	import { Card } from '.';
	import { Team } from '$lib/data';
</script>

<div class="pb-8 px-0 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
	<div class="grid gap-8 mb-6 grid-cols-2 lg:mb-16 lg:grid-cols-3 md:grid-cols-2">
		{#each Team as member}
			<Card name={member?.name} photo={member?.photo} lattes={member?.lattes} />
		{/each}
	</div>
</div>
