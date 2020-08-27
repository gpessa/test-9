import verifyChecksum from "./verify-checksum";

describe("verifyChecksum", () => {

  it("It should return true in case of valid account number", () => {
    const test1 = [4,5,7,5,0,8,0,0,0]
    expect(verifyChecksum(test1)).toBe(true);

    const test2 = [0,0,0,0,0,0,0,5,1];
    expect(verifyChecksum(test2)).toBe(true);
  });

  it("It should return false in case of invalid account number", () => {
    const test2 = [1, 0, 0, 0, 2, 0, 0, 5, 1];
    expect(verifyChecksum(test2)).toBe(false);
  });
  
});

 