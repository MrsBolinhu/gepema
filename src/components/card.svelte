<script>
	export let name, lattes, photo;
</script>

<a
	href={lattes}
	target="_blank"
	class="items-center bg-lightGray rounded-lg shadow-xl sm:flex hover:bg-offWhite">
	<div class="lg:max-w-[105px]">
		<img
			class="w-full aspect-square rounded-lg md:rounded-lg sm:rounded-none sm:rounded-l-lg"
			src={photo}
			alt={name} />
	</div>
	<div class="p-5">
		<h3 class="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
			<a href={lattes} target="_blank">{name}</a>
		</h3>
	</div>
</a>
