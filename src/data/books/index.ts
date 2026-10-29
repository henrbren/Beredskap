import type { Book } from '../types';

import { book as forstehjelp } from './forstehjelp';
import { book as friluft } from './friluft';
import { book as grunnkurs } from './grunnkurs';
import { book as kommunikasjon } from './kommunikasjon';
import { book as mat } from './mat';
import { book as psyke } from './psyke';
import { book as vann } from './vann';
import { book as varme } from './varme';

export const books: Book[] = [grunnkurs, vann, forstehjelp, mat, varme, kommunikasjon, friluft, psyke];

export const bookById: Record<string, Book> = Object.fromEntries(books.map((b) => [b.id, b]));
