import splitAccounts, { splitString } from "./split-accounts";

describe("splitAccounts", () => {

  describe("splitString", () => {
    it("should split a string in chunk of n length", () => {
      expect(splitString(4)("12345678")).toEqual(["1234", "5678"]);
      expect(splitString(3)("abcde")).toEqual(["abc", "de"]);
    });
  });

  it("should split a string containing account in single entry", () => {
    const input = "    _  _     _  _  _  _  _ " +
                  "  | _| _||_||_ |_   ||_||_|" +
                  "  ||_  _|  | _||_|  ||_| _|" +
                  " _  _  _  _  _  _  _  _  _ " +
                  " _| _| _| _| _| _| _| _| _|" +
                  "|_ |_ |_ |_ |_ |_ |_ |_ |_|";
    
    const accounts = splitAccounts(input);
    expect(accounts).toEqual([
      "    _  _     _  _  _  _  _   | _| _||_||_ |_   ||_||_|  ||_  _|  | _||_|  ||_| _|",
      " _  _  _  _  _  _  _  _  _  _| _| _| _| _| _| _| _| _||_ |_ |_ |_ |_ |_ |_ |_ |_|",
    ]);
  })

});
