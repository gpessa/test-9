export default function splitAccounts(accounts: string): string[] | null {
  return accounts
    .replace(/\n/g, '')
    .match(/.{1,81}/g);
}
