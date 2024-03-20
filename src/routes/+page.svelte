<script>
	import { base } from "$app/paths";
	import { BooksCard, Team } from '../components';
	import { Productions } from '../data';
</script>

<div>
	<div class="flex w-full h-full lg:min-h-[460px]">
		<div class="px-8 md:mx-0 py-16 md:p-[100px]">
			<a href="https://portal.ufvjm.edu.br/" target="_blank">
				<img src="{base}/images/ufvjm-logo.png" alt="Logo da UFVJM" width="140px" />
			</a>
			<h1 class="font-black text-[35px] md:text-[45px] mt-6">
				Somos o Grupo de Estudos e Pesquisa em Educação Matemática
			</h1>
		</div>

		<div class="hidden lg:flex self-end max-w-2xl">
			<img src="{base}/images/main-img.png" alt="math illustration" />
		</div>
	</div>

	<div class="grid mx-auto h-auto px-8 md:px-[100px] py-[50px] bg-gray">
		<h2 class="font-extrabold pt-[25px] text-[35px]">Objetivos</h2>
		<div
			class="grid grid-cols-1 md:grid-cols-2 w-full mx-auto md:divide-x text-center items-center py-[35px]">
			<div class="flex gap-4 md:pr-[60px]">
				<p class="text-justify">
					Registrado no Diretório CNPq desde 2007, o grupo objetiva desenvolver pesquisas em
					interface com a extensão e o ensino e a realização de eventos científicos com foco na
					melhoria da formação inicial e continuada de docentes e dos processos de ensino e
					aprendizagem da Matemática.
				</p>
			</div>

			<div class="flex gap-2 pt-5 md:pt-0 md:pl-[60px]">
				<p class="text-justify text-md">
					Buscamos, na abertura de espaços que permitam a realização, divulgação e o
					compartilhamento de experiências, um caminho para o estabelecimento do diálogo entre
					teoria e prática e, assim, contribuir para a melhoria do ensino e da aprendizagem da
					Matemática, sobretudo, no Vale do Mucuri.
				</p>
			</div>
		</div>
	</div>

	<div class="grid mx-auto h-auto px-8 md:px-[100px] py-[50px]">
		<h2 class="font-extrabold text-[35px] mx-auto">Nossos livros</h2>
		<div class="grid grid-cols-1 md:grid-cols-8 w-full mx-auto text-center items-center py-[35px]">
			<img src="{base}/images/books.png" alt="books" class="md:max-w-md md:pr-[20px] col-span-3" />
			<div class="col-span-5">
				<BooksCard production={Productions[0]} />
				<BooksCard production={Productions[1]} />
			</div>
		</div>
	</div>

	<div class="grid mx-auto h-auto px-8 md:px-[140px] pb-[50px] bg-gradient-to-t from-gray to-offWhite">
		<Team />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.offWhite);
	}
</style>
