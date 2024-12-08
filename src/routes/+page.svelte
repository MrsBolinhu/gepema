<script>
	import SectionWraper from '$components/common/section-wrapper/sectionWrapper.svelte';
	import { onMount } from 'svelte';
	import BooksCard from '../components/pages/home/booksCard.svelte';
	import Team from '../components/team.svelte';

	let visible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<div class="overflow-hidden">
	<section
		class="fade {visible
			? 'show'
			: ''} px-[20px] my-[60px] h-[600px] md:h-full md:py-[200px] justify-items-center content-center bg-center bg-no-repeat w-full bg-[url('images/Logo.png')] bg-contain">
		<h1 class="font-nunito font-black text-[60px] lg:text-[80px] text-gray-500">GEPEMA</h1>
		<h2 class="text-lg md:text-[40px] text-center text-gray-500 h-auto">
			Grupo de Estudos e Pesquisa <br /> em Educação Matemática
		</h2>
		<img
			src="images/ufvjm-logo.png"
			alt="ufvjm logo"
			class="w-[145px] lg:w-[200px] mt-8 slide-fade {visible ? 'show' : ''}" />
	</section>

	<section
		class="h-full justify-items-center p-7 w-full bg-no-repeat bg-[url('images/river.png')] bg-cover">
		<SectionWraper title="O que fazemos">
			<p
				class="text-lg md:text-[24px] md:max-w-[900px] text-justify md:text-center text-gray-500 leading-loose">
				Buscamos, na abertura de espaços que permitam a realização, divulgação e o compartilhamento
				de experiências, um caminho para o estabelecimento do diálogo entre teoria e prática e,
				assim, contribuir para a melhoria do ensino e da aprendizagem da Matemática, sobretudo, no
				Vale do Mucuri.
			</p>
		</SectionWraper>

		<SectionWraper title="Nossos livros">
			<div class="flex flex-wrap content-center justify-center gap-10 w-full lg:max-w-[1600px]">
				<BooksCard
					picture={'/images/gepema-livro-1.jpg'}
					description="Esta coletânea resulta dos cinco eventos promovidos pelo Grupo de estudos e
					Pesquisas em Educação Matemática – GEPEMA/UFVJM, em parceria com o Curso de Licenciatura
					em Matemática e colaboradores. A fim de manter viva a memória do evento, foram convidados
					os professores colaboradores que participaram dessa história, para contribuir com seus
					trabalhos de pesquisa."
					link="https://play.google.com/store/books/details?id=LRj-DwAAQBAJ&rdid=book-LRj-DwAAQBAJ&rdot=1&source=gbs_atb&pcampaignid=books_booksearch_atb" />

				<BooksCard
					picture={'/images/gepema-livro-2.jpg'}
					description="A presente coletânea traz, aos leitores, um conjunto de textos produzidos por
					estudantes no âmbito do curso de Licenciatura em Matemática da Universidade Federal
					dos Vales do Jequitinhonha e Mucuri - UFVJM, Campus do Mucuri. Trata-se de sínteses de
					pesquisas desenvolvidas para fins dos Trabalhos de Conclusão de Curso (TCC), sob a
					orientação dos coautores."
					link="https://pt.scribd.com/document/658419769/Pesquisar-e-Escrever-Producoes-Da-Licenciatura-Em-Matematica-Da-UFVJM-Campus-Mucuri#" />
				<BooksCard
					picture={'/images/gepema-livro-3.jpg'}
					description="O conjunto dos textos que compõem este livro contemplam conteúdos como geometria,
					trigonometria, probabilidade, juros, empréstimos e amortização. Trata-se de experiências
					desenvolvidas pelos autores e autoras em suas respectivas salas de aula, por meio do uso de
					metodologias interativas e lúdicas."
					link="https://loja.editoradialetica.com/humanidades/matematica-e-docencia-dialogos-com-a-educacao-basica" />
			</div>
		</SectionWraper>

		<SectionWraper title="Equipe">
			<Team />
		</SectionWraper>
	</section>
</div>

<style>
	.fade {
		transition: opacity 3s ease-in-out;
		opacity: 0;
	}
	.fade.show {
		opacity: 1;
	}

	.slide-fade {
		transition:
			opacity 1s ease-in-out,
			transform 2s ease-in-out;
		opacity: 0;
		transform: translateY(60px);
	}

	.slide-fade.show {
		opacity: 1;
		transform: translateY(0);
	}
</style>
