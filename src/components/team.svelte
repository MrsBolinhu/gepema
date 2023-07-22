<script>
	import Team from '../data/team.json';
	import Card from './card.svelte';
</script>

<section class="bg-white">
	<div class="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
			<h2 class="font-extrabold text-[35px]">Equipe</h2>
			<!-- <p class="font-light text-gray-500 lg:mb-16 sm:text-xl pt-10">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p> -->
		</div>
		<div class="grid gap-8 mb-6 grid-cols-2 lg:mb-16 lg:grid-cols-3 md:grid-cols-2">
			{#each Team as member}
				<Card name={member?.name} photo={member?.photo} lattes={member?.lattes} />
			{/each}
		</div>
	</div>
</section>
