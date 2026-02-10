<script>
	let { children, title } = $props();
</script>

<section
	class="
  h-full w-full
  justify-items-center content-center
  px-7 mb-[220px]
">
	{#if title}
		<h2 class="font-nunito font-black text-3xl lg:text-[60px] text-gray-500 mb-8">
			{title}
		</h2>
	{/if}
	{@render children()}
</section>
