<script>
	import { Menu } from '@skeletonlabs/skeleton-svelte';
	import { locale, locales, t } from '$lib/components/translation/il18n.js';
	let { callback = () => {} } = $props();

	const flags = {
		pt: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e7-1f1f7.svg',
		en: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg'
	};

	const items = locales.map((l) => ({
		value: l,
		label: $t(`languages.${l}`),
		icon: flags[l]
	}));

	let open = $state(false);

	const selected = $derived.by(() => items.find((i) => i.value === $locale));

	const closeMenu = () => (open = false);
	const toggleMenu = () => (open = !open);
</script>

<div class="relative w-full py-2">
	<Menu bind:open>
		<Menu.Trigger class="w-full">
			<button
				type="button"
				class="inline-flex items-center justify-between gap-3 px-4 py-2 text-sm font-medium bg-inherit rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors min-w-[160px]"
				aria-expanded={open}
				onclick={toggleMenu}>
				<div class="flex items-center gap-2">
					{#if selected}
						<img src={selected.icon} alt={selected.label} class="w-5 h-5" />
					{/if}
					<span>{selected?.label}</span>
				</div>
				<svg
					class="w-4 h-4 transition-transform {open ? 'rotate-180' : ''}"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
				</svg>
			</button>
		</Menu.Trigger>

		<Menu.Content
			class="absolute mt-1 min-w-[160px] bg-white rounded-lg shadow-lg overflow-hidden z-50"
			side="bottom"
			align="start">
			{#each items as item}
				<Menu.Item>
					<button
						class="flex items-center gap-2 px-4 py-2.5 text-sm text-left hover:bg-gray-100 transition-colors {item.value ===
						$locale
							? 'bg-blue-50 text-blue-600'
							: 'text-gray-700'}"
						onclick={() => {
							$locale = item.value;
							closeMenu();
							callback();
						}}>
						<img src={item.icon} alt={item.label} class="w-5 h-5" />
						<span>{item.label}</span>
						{#if item.value === $locale}
							<svg
								class="w-4 h-4 ml-auto"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
						{/if}
					</button>
				</Menu.Item>
			{/each}
		</Menu.Content>
	</Menu>
</div>
