<script>
	export let production;
</script>

<div class="flex flex-col p-6 mb-4 bg-lightGray rounded-lg shadow-xl justify-between">
	<h1 class="mb-2 text-lg font-semibold tracking-tight text-gray-900">{production?.name}</h1>
	<p
		class="pt-2 mb-3 font-normal text-sm line-clamp-3 overflow-ellipsis text-justify text-gray-500">
		{production?.description}
	</p>
	<a
		href={production?.downloadLink}
		target="_blank"
		class="inline-flex items-center text-offWhite bg-blue mx-auto py-1 px-3 rounded-md hover:underline">
		Download
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
