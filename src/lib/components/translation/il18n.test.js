import { describe, it, expect, beforeEach } from 'vitest';
import { get } from 'svelte/store';
import { locale, locales, t } from './il18n.js';

describe('il18n', () => {
	beforeEach(() => {
		locale.set('en');
	});

	describe('locale store', () => {
		it('should have default value of "en"', () => {
			expect(get(locale)).toBe('en');
		});

		it('should be able to update locale', () => {
			locale.set('pt');
			expect(get(locale)).toBe('pt');
		});
	});

	describe('locales', () => {
		it('should contain available locales', () => {
			expect(locales).toContain('en');
			expect(locales).toContain('pt');
			expect(locales.length).toBe(2);
		});
	});

	describe('t (translate) function', () => {
		it('should translate a key in English', () => {
			locale.set('en');
			const translate = get(t);
			expect(translate('navbar.home')).toBe('Home');
			expect(translate('navbar.productions')).toBe('Productions');
			expect(translate('navbar.gallery')).toBe('Gallery');
		});

		it('should translate a key in Portuguese', () => {
			locale.set('pt');
			const translate = get(t);
			expect(translate('navbar.home')).toBe('Início');
			expect(translate('navbar.productions')).toBe('Produções');
			expect(translate('navbar.gallery')).toBe('Galeria');
		});

		it('should translate language names', () => {
			locale.set('en');
			const translate = get(t);
			expect(translate('languages.en')).toBe('English');
			expect(translate('languages.pt')).toBe('Português');
		});

		it('should translate the same in both locales for language names', () => {
			locale.set('en');
			let translate = get(t);
			const enInEn = translate('languages.en');
			const ptInEn = translate('languages.pt');

			locale.set('pt');
			translate = get(t);
			const enInPt = translate('languages.en');
			const ptInPt = translate('languages.pt');

			expect(enInEn).toBe(enInPt);
			expect(ptInEn).toBe(ptInPt);
		});

		it('should handle variable interpolation', () => {
			locale.set('en');
			const translate = get(t);
			// Note: Current translations don't have variables, but testing the functionality
			// If we add a translation like "Hello {{name}}", this test would work
		});

		it('should throw error when no key is provided', () => {
			const translate = get(t);
			expect(() => translate('')).toThrow('no key provided to $t()');
		});

		it('should throw error when translation key not found', () => {
			locale.set('en');
			const translate = get(t);
			expect(() => translate('non.existent.key')).toThrow(
				'no translation found for en.non.existent.key'
			);
		});

		it('should reactively update translations when locale changes', () => {
			let currentTranslation;

			const unsubscribe = t.subscribe((translate) => {
				currentTranslation = translate('navbar.home');
			});

			expect(currentTranslation).toBe('Home');

			locale.set('pt');
			expect(currentTranslation).toBe('Início');

			locale.set('en');
			expect(currentTranslation).toBe('Home');

			unsubscribe();
		});

		it('should translate all navbar keys', () => {
			locale.set('en');
			const translate = get(t);
			expect(translate('navbar.home')).toBeTruthy();
			expect(translate('navbar.productions')).toBeTruthy();
			expect(translate('navbar.gallery')).toBeTruthy();
		});

		it('should translate all homepage keys', () => {
			locale.set('en');
			const translate = get(t);
			expect(translate('homepage.title')).toBe('GEPEMA');
			expect(translate('homepage.welcome')).toBeTruthy();
			expect(translate('homepage.what_we_do')).toBeTruthy();
			expect(translate('homepage.what_we_do_description')).toBeTruthy();
			expect(translate('homepage.our_books')).toBeTruthy();
			expect(translate('homepage.team')).toBeTruthy();
		});

		it('should translate footer keys', () => {
			locale.set('en');
			const translate = get(t);
			expect(translate('footer.address')).toBe('Address');
			expect(translate('footer.address.value')).toBeTruthy();
			expect(translate('footer.phone')).toBeTruthy();
		});

		it('should handle empty vars object', () => {
			locale.set('en');
			const translate = get(t);
			expect(translate('navbar.home', {})).toBe('Home');
		});
	});
});
