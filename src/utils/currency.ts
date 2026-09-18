export const USD_TO_KGS = 87;

export function formatPrice(usdAmount: number): string {
  return `${Math.round(usdAmount * USD_TO_KGS).toLocaleString('ru-RU')} сом`;
}
