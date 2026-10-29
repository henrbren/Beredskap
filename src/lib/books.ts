export function bookProgress(read: Record<string, number>, bookId: string, chapterIds: string[]) {
  if (!chapterIds.length) return 0;
  return chapterIds.filter((c) => read[`${bookId}/${c}`]).length / chapterIds.length;
}
