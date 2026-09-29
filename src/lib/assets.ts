import fs from 'node:fs';
import path from 'node:path';

const accents: Record<string, string> = {
  clinica: 'clínica',
  recepcao: 'recepção',
  consultorio: 'consultório',
  odontologica: 'odontológica',
  avaliacao: 'avaliação',
  criancas: 'crianças',
  espaco: 'espaço',
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export function altFromFilename(file: string): string {
  const base = file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = base
    .split(' ')
    .filter(Boolean)
    .map((word) => accents[word.toLocaleLowerCase('pt-BR')] ?? word);
  const phrase = words.join(' ');
  if (!phrase) return 'Foto da clínica Zaya';
  return phrase.charAt(0).toLocaleUpperCase('pt-BR') + phrase.slice(1);
}

export function listClinicPhotos(): GalleryImage[] {
  const docsDir = path.resolve('docs');
  if (!fs.existsSync(docsDir)) return [];

  return fs
    .readdirSync(docsDir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file) && file.toLowerCase() !== 'logo.jpg')
    .sort((a, b) => a.localeCompare(b, 'pt-BR'))
    .map((file) => ({
      src: `/clinic/${file}`,
      alt: altFromFilename(file),
    }));
}

export function hasLogo(): boolean {
  return fs.existsSync(path.resolve('docs/logo.jpg'));
}
