import getStringNumbers from "./get-string-numbers";

describe("getStringNumbers", () => {
  var text =
    "ABCDEFGHIKLMNOPQRSTVXYZ0123" +
    "ABCDEFGHIKLMNOPQRSTVXYZ0123" +
    "ABCDEFGHIKLMNOPQRSTVXYZ0123";
  
  
  it("should split an account number rappresented by a string in chun of string rappresented number", () => {
    const a = getStringNumbers(text)

    expect(a).toEqual([
      "ABCABCABC",
      "DEFDEFDEF",
      "GHIGHIGHI",
      "KLMKLMKLM",
      "NOPNOPNOP",
      "QRSQRSQRS",
      "TVXTVXTVX",
      "YZ0YZ0YZ0",
      "123123123",
    ]);
  })
});

