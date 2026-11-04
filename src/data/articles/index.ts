import type { Article, ArticleCategory, IconName } from '../types';

import { articles as forstehjelpHelse } from './forstehjelp-helse';
import { articles as kommunikasjonTeknikkHjem } from './kommunikasjon-teknikk-hjem';
import { articles as lyNavigasjonVaer } from './ly-navigasjon-vaer';
import { articles as vannMatNatur } from './vann-mat-natur';

export const articles: Article[] = [...forstehjelpHelse, ...vannMatNatur, ...lyNavigasjonVaer, ...kommunikasjonTeknikkHjem];

export const articleById: Record<string, Article> = Object.fromEntries(articles.map((a) => [a.id, a]));

export const articleCategories: Record<ArticleCategory, { label: string; icon: IconName }> = {
  forstehjelp: { label: 'Førstehjelp', icon: 'medical-bag' },
  helse: { label: 'Helse', icon: 'heart-pulse' },
  vann: { label: 'Vann', icon: 'water' },
  mat: { label: 'Mat & sanking', icon: 'food-apple' },
  natur: { label: 'Natur', icon: 'pine-tree' },
  'ly-varme': { label: 'Ly & varme', icon: 'campfire' },
  navigasjon: { label: 'Navigasjon', icon: 'compass-outline' },
  vaer: { label: 'Vær', icon: 'weather-partly-snowy-rainy' },
  kommunikasjon: { label: 'Kommunikasjon', icon: 'radio-handheld' },
  teknikk: { label: 'Teknikk & verktøy', icon: 'tools' },
  hjem: { label: 'Hjemmet', icon: 'home-variant' },
  samfunn: { label: 'Samfunn', icon: 'account-group' },
};

export const articleCategoryOrder: ArticleCategory[] = [
  'forstehjelp',
  'helse',
  'vann',
  'mat',
  'ly-varme',
  'navigasjon',
  'vaer',
  'natur',
  'kommunikasjon',
  'teknikk',
  'hjem',
  'samfunn',
];
