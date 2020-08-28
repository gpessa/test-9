function getStringNumbers(text: string) {
  return text.split("").reduce((res, item, i) => {
    const key = Math.floor(i / 3) % 9; 
    res[key] = (res[key] || "") + item;
    return res;
  }, [] as string[]);
}

export default getStringNumbers;