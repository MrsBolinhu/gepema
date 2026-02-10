<script>
    import { base } from "$app/paths";
    import { GepemaLogo } from "./Icons";
    import { AppBar, Menu } from "@skeletonlabs/skeleton-svelte";

    const links = [
        { label: "Início", href: `${base}/#` },
        { label: "Produções", href: `${base}/productions` },
        { label: "Galeria", href: `${base}/gallery` },
    ];

    let mobileOpen = false;
    const toggleMobile = () => (mobileOpen = !mobileOpen);
    const closeMobile = () => (mobileOpen = false);
	const openMobile = () => (mobileOpen = true);
</script>

<AppBar class="mx-auto px-12 pt-12 md:px-24 md:max-w-[900px] flex items-center justify-between">
    <div class="flex items-center gap-5">
        <a class="flex items-center gap-5" href="/#" title="View Homepage" aria-label="View Homepage" on:click={closeMobile}>
            <GepemaLogo size="34px" color="blue" />
            <h1 class="font-nunito font-black text-lg">GEPEMA</h1>
        </a>
    </div>

    <nav class="hidden md:flex md:items-center md:gap-2" aria-label="Primary">
        {#each links as link (link)}
            <a
                href={link.href}
                class="text-gray-300 hover:bg-blue hover:text-offWhite rounded-md px-3 py-2"
            >
                {link.label}
            </a>
        {/each}
    </nav>

    <div class="md:hidden relative">
        <Menu open={mobileOpen} on:open={openMobile} on:close={closeMobile}>
            <Menu.Trigger>
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-blue hover:text-offWhite w-10 h-10"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    on:click={toggleMobile}
                >
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </Menu.Trigger>

            <Menu.Content class="absolute right-0 mt-2 min-w-[180px] z-50 bg-gray rounded-md shadow-lg">
                {#each links as link (link)}
                    <Menu.Item>
                        <a
                            href={link.href}
                            class="block w-full text-gray-300 hover:bg-blue hover:text-offWhite rounded-md px-3 py-2"
                            on:click={closeMobile}
                        >
                            {link.label}
                        </a>
                    </Menu.Item>
                {/each}
            </Menu.Content>
        </Menu>
    </div>
</AppBar>