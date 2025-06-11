// Пример простой валидации ИНН (10 или 12 цифр)
export function validateINN(inn) {
  return /^\d{10}$|^\d{12}$/.test(inn);
}
