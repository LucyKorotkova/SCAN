export function formatDateForApi(date) {
  // Преобразует yyyy-mm-dd в yyyy-mm-ddT00:00:00+03:00
  return date ? `${date}T00:00:00+03:00` : '';
}
