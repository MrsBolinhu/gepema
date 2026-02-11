<script>
	let { picture, description, link, buttonText } = $props();
	let isHovered = $state(false);
	const handleClick = () => {
		window.open(link, '_blank');
	};
</script>

<div
	class="relative w-[340px] h-[510px] bg-slate-600 rounded-2xl overflow-hidden shadow-xl"
	role="region"
	aria-labelledby="card-description"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}>
	<div
		class="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-300 ease-in-out"
		style="background-image: url({picture})"
		class:blur-sm={isHovered}>
	</div>

	<div
		id="card-description"
		class={`absolute justify-items-center bottom-0 left-0 w-full bg-slate-700 text-white p-5 transform transition-transform duration-300 ease-in-out ${
			isHovered ? 'translate-y-0 bg-opacity-80' : 'translate-y-full bg-opacity-0'
		}`}>
		<p class="text-justify">
			{description}
		</p>
		<button
			onclick={handleClick}
			class="mt-6 bg-white px-5 py-2 rounded-lg text-black
					 font-semibold border-2 border-transparent
					 transition-all duration-300 ease-in-out
					 hover:bg-blue hover:text-white hover:border-gray-800
					 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2
					 active:scale-95">
			{buttonText}
		</button>
	</div>
</div>
