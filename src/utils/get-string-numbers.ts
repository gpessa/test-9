function getStringNumbers(text: string) {
  return text.split("").reduce((res, item, i) => {
    const key = parseInt((i / 3).toString()) % 9; 
    res[key] = (res[key] || "") + item;
    return res;
  }, [] as string[]);
}

export default getStringNumbers;