function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

/**
 * Converts date into mm/dd
 * @param date Date obj
 * @returns mm/dd string
 */
export function formatDate(date: Date): string {
  return [padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join(
    "/"
  );
}
