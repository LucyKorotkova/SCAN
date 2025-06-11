export function formatDateForApi(date) {
  return date ? `${date}T00:00:00+03:00` : '';
}
