<script>
	import { base } from "$app/paths";
	import GepemaLogo from './Icons/gepemaLogo.svelte';
	let showMobileMenu = false;
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
</script>

<nav class="bg-gray-800">
	<div class="mx-auto px-12 pt-12 md:px-24 md:max-w-[900px] items-center">
		<div class="flex h-16 items-center justify-between">
			<div class="flex w-full items-center justify-between">
				<a href="{base}/" class="flex items-center gap-5">
					<GepemaLogo size="34px" color="blue" />
					<h1 class="font-nunito font-black text-lg">GEPEMA</h1>
				</a>

				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4 text-lg font-medium">
						<a
							href="{base}/productions"
							class="text-gray-300 hover:bg-blue hover:text-offWhite rounded-md px-3 py-2"
							>Produções</a>
						<a
							href="{base}/gallery"
							class="text-gray-300 hover:bg-blue hover:text-offWhite rounded-md px-3 py-2"
							>Galeria</a>
						<a
							href="{base}/contact"
							class="text-gray-300 hover:bg-blue hover:text-offWhite rounded-md px-3 py-2"
							>Contato</a>
					</div>
				</div>
			</div>

			<div class="-mr-2 flex md:hidden">
				<!-- Mobile menu button -->
				<button
					on:click={handleMobileIconClick}
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					aria-controls="mobile-menu"
					aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<!-- Menu open: "hidden", Menu closed: "block" -->
					<svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
					<!-- Menu open: "block", Menu closed: "hidden" -->
					<svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class={`${showMobileMenu ? '' : 'hidden'} shadow-lg pb-5 rounded-b-md`}>
		<div class="space-y-1 px-10 pb-3 pt-2">
			<a
				href="{base}/"
				class="bg-gray-900 text-white hover:bg-gray hover:shadow-lg block rounded-md px-3 py-2 text-base font-medium"
				aria-current="page">Início</a>
			<a
				href="{base}/productions"
				class="text-gray-300 hover:bg-gray hover:shadow-lg hover:text-white block rounded-md px-3 py-2 text-base font-medium"
				>Produções</a>
			<a
				href="{base}/gallery"
				class="text-gray-300 hover:bg-gray hover:shadow-lg hover:text-white block rounded-md px-3 py-2 text-base font-medium"
				>Galeria</a>
			<a
				href="{base}/contact"
				class="text-gray-300 hover:bg-gray hover:shadow-lg hover:text-white block rounded-md px-3 py-2 text-base font-medium"
				>Contato</a>
		</div>
	</div>
</nav>
