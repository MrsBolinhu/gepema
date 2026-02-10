<script>
	import { CalendarIcon, ExternalLinkIcon } from '.';

	export let production;
	let groupMembers = production?.groupMembers;
</script>

<div class="flex flex-col p-6 bg-lightGray rounded-lg shadow-xl justify-between">
	<h1 class="mb-2 text-lg font-semibold tracking-tight text-gray-900">{production?.name}</h1>
	<p
		class="pt-2 mb-3 font-normal text-sm line-clamp-3 overflow-ellipsis text-justify text-gray-500">
		{production?.description}
	</p>

	<div class="flex items-center gap-5 divide-x">
		<div class="flex items-center gap-2">
			<CalendarIcon size="18px" />
			{production.year}
		</div>

		<a
			href={production?.downloadLink}
			target="_blank"
			class="inline-flex px-4 items-center text-blue-600 hover:underline">
			Abrir PDF
			<ExternalLinkIcon/>
		</a>
	</div>

	<div>
		<p class="pt-5 pb-2 text-bs">Membros colaboradores:</p>
		<div class="flex flex-wrap gap-2">
			{#each groupMembers as member}
				<div class="items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md bg-gray">
					<span class="px-5 py-2.5 bg-white rounded-md">
						{member}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>
