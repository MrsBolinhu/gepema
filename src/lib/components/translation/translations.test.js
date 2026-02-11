import { describe, it, expect } from 'vitest';
import translations from './translations.js';

describe('translations', () => {
	describe('structure', () => {
		it('should have en and pt locales', () => {
			expect(translations).toHaveProperty('en');
			expect(translations).toHaveProperty('pt');
		});

		it('should have the same keys in both locales', () => {
			const enKeys = Object.keys(translations.en).sort();
			const ptKeys = Object.keys(translations.pt).sort();
			expect(enKeys).toEqual(ptKeys);
		});

		it('should not have empty translation values', () => {
			Object.keys(translations).forEach((locale) => {
				Object.entries(translations[locale]).forEach(([key, value]) => {
					expect(value).toBeTruthy();
					expect(value.length).toBeGreaterThan(0);
				});
			});
		});
	});

	describe('language keys', () => {
		it('should have language.en translation', () => {
			expect(translations.en['languages.en']).toBe('English');
			expect(translations.pt['languages.en']).toBe('English');
		});

		it('should have language.pt translation', () => {
			expect(translations.en['languages.pt']).toBe('Português');
			expect(translations.pt['languages.pt']).toBe('Português');
		});
	});

	describe('navbar keys', () => {
		const navbarKeys = ['navbar.home', 'navbar.productions', 'navbar.gallery'];

		it('should have all navbar keys in English', () => {
			navbarKeys.forEach((key) => {
				expect(translations.en).toHaveProperty(key);
			});
		});

		it('should have all navbar keys in Portuguese', () => {
			navbarKeys.forEach((key) => {
				expect(translations.pt).toHaveProperty(key);
			});
		});

		it('should have correct English navbar translations', () => {
			expect(translations.en['navbar.home']).toBe('Home');
			expect(translations.en['navbar.productions']).toBe('Productions');
			expect(translations.en['navbar.gallery']).toBe('Gallery');
		});

		it('should have correct Portuguese navbar translations', () => {
			expect(translations.pt['navbar.home']).toBe('Início');
			expect(translations.pt['navbar.productions']).toBe('Produções');
			expect(translations.pt['navbar.gallery']).toBe('Galeria');
		});
	});

	describe('homepage keys', () => {
		const homepageKeys = [
			'homepage.title',
			'homepage.welcome',
			'homepage.what_we_do',
			'homepage.what_we_do_description',
			'homepage.our_books',
			'homepage.team'
		];

		it('should have all homepage keys in both locales', () => {
			homepageKeys.forEach((key) => {
				expect(translations.en).toHaveProperty(key);
				expect(translations.pt).toHaveProperty(key);
			});
		});

		it('should have same title in both languages', () => {
			expect(translations.en['homepage.title']).toBe('GEPEMA');
			expect(translations.pt['homepage.title']).toBe('GEPEMA');
		});
	});

	describe('booksCard keys', () => {
		it('should have button text in both locales', () => {
			expect(translations.en).toHaveProperty('booksCard.buttonText');
			expect(translations.pt).toHaveProperty('booksCard.buttonText');
		});

		it('should have correct button text translations', () => {
			expect(translations.en['booksCard.buttonText']).toBe('ACCESS FULL BOOK');
			expect(translations.pt['booksCard.buttonText']).toBe('ACESSAR LIVRO COMPLETO');
		});
	});

	describe('productions keys', () => {
		const productionsKeys = [
			'productions.search.label',
			'productions.search.placeholder',
			'productions.search.button'
		];

		it('should have all productions search keys in both locales', () => {
			productionsKeys.forEach((key) => {
				expect(translations.en).toHaveProperty(key);
				expect(translations.pt).toHaveProperty(key);
			});
		});

		it('should have correct English productions translations', () => {
			expect(translations.en['productions.search.label']).toBe('Search');
			expect(translations.en['productions.search.placeholder']).toBe('Enter the title...');
			expect(translations.en['productions.search.button']).toBe('Search');
		});

		it('should have correct Portuguese productions translations', () => {
			expect(translations.pt['productions.search.label']).toBe('Pesquisar');
			expect(translations.pt['productions.search.placeholder']).toBe('Digite o título...');
			expect(translations.pt['productions.search.button']).toBe('Pesquisar');
		});
	});

	describe('footer keys', () => {
		const footerKeys = ['footer.address', 'footer.address.value', 'footer.phone'];

		it('should have all footer keys in both locales', () => {
			footerKeys.forEach((key) => {
				expect(translations.en).toHaveProperty(key);
				expect(translations.pt).toHaveProperty(key);
			});
		});

		it('should have correct footer translations', () => {
			expect(translations.en['footer.address']).toBe('Address');
			expect(translations.pt['footer.address']).toBe('Endereço');
			expect(translations.en['footer.phone']).toBe('Phone');
			expect(translations.pt['footer.phone']).toBe('Telefone');
		});

		it('should have UFVJM address in both languages', () => {
			expect(translations.en['footer.address.value']).toContain('UFVJM');
			expect(translations.pt['footer.address.value']).toContain('UFVJM');
			expect(translations.en['footer.address.value']).toContain('Teófilo Otoni/MG');
			expect(translations.pt['footer.address.value']).toContain('Teófilo Otoni/MG');
		});
	});

	describe('translation completeness', () => {
		it('should have at least 15 translation keys per locale', () => {
			const enKeysCount = Object.keys(translations.en).length;
			const ptKeysCount = Object.keys(translations.pt).length;
			expect(enKeysCount).toBeGreaterThanOrEqual(15);
			expect(ptKeysCount).toBeGreaterThanOrEqual(15);
		});

		it('should have exactly matching number of keys', () => {
			const enKeysCount = Object.keys(translations.en).length;
			const ptKeysCount = Object.keys(translations.pt).length;
			expect(enKeysCount).toBe(ptKeysCount);
		});
	});
});
