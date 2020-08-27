export default function verifyChecksum(list: number[]) {
  if (list.length !== 9) return false
  
  return (
    [...list]
      .reverse()
      .reduce((total, number, index) => total + (index + 1) * number, 0) % 11 === 0
    );
}
