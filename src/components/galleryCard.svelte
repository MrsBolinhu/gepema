<script>
	import { base } from "$app/paths";
	import Modal from './modal.svelte';

	export let picture;
	let showModal = false;
	const handlePictureClick = () => (showModal = !showModal);
</script>

<button on:click={handlePictureClick} class="w-full h-full">
	<img class="w-full h-full rounded-lg object-cover" src={base + picture.path} alt={picture.description} />
</button>

<Modal {showModal} {picture} {handlePictureClick} />
