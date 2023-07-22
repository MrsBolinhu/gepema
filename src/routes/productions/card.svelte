<script>
	import CalendarIcon from '../../components/Icons/calendarIcon.svelte';

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
			<svg
				class="w-3 h-3 ml-2.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 18">
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
			</svg>
		</a>
	</div>

	<div>
		<p class="pt-5 pb-2 text-bs">Membros colaboradores:</p>
		<div class="flex flex-wrap gap-2">
			{#each groupMembers as member}
				<div
					class="items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md bg-gray">
					<span class="px-5 py-2.5 bg-white rounded-md">
						{member}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>
