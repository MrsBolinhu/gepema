<script>
	import { ProductionsCard } from '$lib/components';
	import { Productions } from '$lib/data';
	import { t } from '$lib/components/translation/il18n.js';

	let searchTerm = '';
	let results = Productions.sort(function (a, b) {
		return b.year - a.year;
	});

	const search = () => {
		if (searchTerm !== '') {
			results = Productions.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else results = Productions;
	};
</script>

<div class="px-2 pb-[180px]">
	<div class="flex flex-wrap items-center p-5 mt-12 gap-4 justify-center">
		<form class="">
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>{$t('productions.search.label')}</label>
			<div class="relative max-w-[700px] min-w-[350px] px-4 sm:px-0">
				<input
					on:change={search}
					bind:value={searchTerm}
					type="text"
					id="default-search"
					class="block w-full p-4 text-sm text-gray-900 shadow-xl rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
					placeholder={$t('productions.search.placeholder')} />
				<button
					on:click={search}
					type="submit"
					class="text-white absolute right-6 sm:right-2.5 bottom-2.5 bg-blue hover:bg-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
					>{$t('productions.search.button')}</button>
			</div>
		</form>
	</div>

	<div class="bg-white p-4 py-8 mt-2">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 mt-4">
			{#each results as production}
				<ProductionsCard {production} />
			{/each}
		</div>
	</div>
</div>
