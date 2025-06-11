
export function validateINN(inn) {
  return /^\d{10}$|^\d{12}$/.test(inn);
}
