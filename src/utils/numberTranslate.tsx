const number1 = `
   
  |
  |`.replace(/\n/g, '');

const number2 = `
 _ 
 _|
|_ `.replace(/\n/g, '');


const number3 = `
 _ 
 _|
 _|`.replace(/\n/g, '');


const number4 = `
   
|_|
  |`.replace(/\n/g, '');


const number5 = `
 _ 
|_ 
 _|`.replace(/\n/g, '');


const number6 = `
 _ 
|_ 
|_|`.replace(/\n/g, '');


const number7 = `
 _ 
  |
  |`.replace(/\n/g, '');

const number8 = `
 _ 
|_|
|_|`.replace(/\n/g, '');


const number9 = `
 _ 
|_|
 _|`.replace(/\n/g, '');


const number0 = `
 _ 
| |
|_|`.replace(/\n/g, '');

const MAP = new Map();
MAP.set(number0, 0);
MAP.set(number1, 1);
MAP.set(number2, 2);
MAP.set(number3, 3);
MAP.set(number4, 4);
MAP.set(number5, 5);
MAP.set(number6, 6);
MAP.set(number7, 7);
MAP.set(number8, 8);
MAP.set(number9, 9);

const translate = (map: Map<string, number>) => (text: string): number | '?' => {
  const t = MAP.get(text)
  return t !== undefined ? t : '?'
}

export default translate(MAP);