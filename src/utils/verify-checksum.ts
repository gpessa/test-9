export default function verifyChecksum(list: number[]) {
  return (
    [...list]
      .reverse()
      .reduce((total, number, index) => total + (index + 1) * number, 0) % 11 === 0
    );
}
