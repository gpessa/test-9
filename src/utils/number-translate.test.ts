import numberTranslate, { translate } from "./number-translate";

describe("numberTranslate", () => {

  describe("translate", () => {
    it("should, given a map and a input, translate correclty", () => {
      const map = new Map()
      map.set("abc", 1)
      map.set("def", 2);

      expect(translate(map)("abc")).toBe(1)
      expect(translate(map)("def")).toBe(2);
    });
  });

  it("shoult return the right number given a string rappresenting it", () => {
    expect(numberTranslate(" _ | ||_|")).toBe(0);
    expect(numberTranslate("     |  |")).toBe(1);
    expect(numberTranslate(" _  _||_ ")).toBe(2);
    expect(numberTranslate(" _  _| _|")).toBe(3);

    // TODO: add all the others
    expect(numberTranslate(" _ |_| _|")).toBe(9);
  })

  it("shoult return ? if it can't map a string to a number", () => {
    expect(numberTranslate("|||||||||")).toBe('?');
  })
});
