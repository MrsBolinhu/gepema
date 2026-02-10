<script>
	import { EmailIcon, GepemaLogo, LocationIcon, PhoneIcon } from './Icons';
	const currentYear = new Date().getFullYear();
</script>

<footer class="mx-8 pb-5">
	<hr class="pb-2 border-gray-200 sm:mx-auto lg:py-4 text-darkerGray" />
	<div class="flex flex-col flex-wrap items-center gap-16 justify-between">
		<div class="flex flex-wrap gap-12 pt-12">
			<div class="max-w-xs text-justify mx-auto">
				<div class="flex justify-center gap-3">
					<EmailIcon size="24px" />
					<h2>Email</h2>
				</div>
				<span class=" text-sm align-center text-gray-500 sm:text-center">
					gepema@ufvjm.edu.br
				</span>
			</div>

			<div class="max-w-xs text-justify mx-auto">
				<div class="flex justify-center gap-3">
					<LocationIcon size="24px" />
					<h2>Endereço</h2>
				</div>
				<span class=" text-sm align-center text-gray-500 sm:text-center">
					Universidade Federal dos Vales do Jequitinhonha e Mucuri - UFVJM / Campus do Mucuri. Rua
					do Cruzeiro, nº 01, Bairro Jardim São Paulo. Teófilo Otoni/MG
				</span>
			</div>

			<div class="max-w-xs text-justify mx-auto">
				<div class="flex justify-center gap-3">
					<PhoneIcon size="24px" />
					<h2>Telefone</h2>
				</div>
				<span class=" text-sm align-center text-gray-500 sm:text-center"> +55 (33) 3529-2700 </span>
			</div>
		</div>

		<div class="flex items-center gap-5">
			<GepemaLogo size="24px" />
			<span class="py-5 text-sm align-center text-gray-500 sm:text-center">
				© {currentYear} GEPEMA. All Rights Reserved.
			</span>
		</div>
	</div>
</footer>
