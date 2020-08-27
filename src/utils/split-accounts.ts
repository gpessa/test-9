export const splitString = (length: number) => (text: string) => {
  return text.match(new RegExp(".{1," + length + "}", "g"));
}

export default function splitAccounts(accounts: string): string[] | null {
  const singleLine = accounts.replace(/\n/g, "")
  return splitString(81)(singleLine);
}
