<script>
	import { base } from "$app/paths";
	export let showModal;
	export let picture;
	export let handlePictureClick;
</script>

<div
	class={`${showModal ? '' : 'hidden'} relative z-10`}
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true">
	<div class="fixed inset-0 bg-darkGray backdrop-blur-sm bg-opacity-75 transition-opacity" />

	<div on:click={handlePictureClick} aria-hidden="true" class="fixed inset-0 z-10 overflow-y-auto">
		<div class="flex min-h-full items-center justify-center px-2 sm:items-center sm:p-0">
			<div
				class="relative w-[700px] transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all sm:my-8 mx-4 lg:mx-0">
				<img
					class="w-full h-full rounded-t-lg object-cover"
					src={base + picture.path}
					alt={picture.description} />
				<div class="bg-offWhite p-6">
					<h1 class="font-black">{picture.title}</h1>
					{picture.description}
				</div>
			</div>
		</div>
	</div>
</div>
