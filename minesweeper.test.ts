import Minesweeper from "./minesweeper";

describe("Minesweeper()", () => {
  let minesweeper: Minesweeper;

  beforeEach(() => {
    minesweeper = new Minesweeper();
  });

  it("handles no rows", () => {
    expect(minesweeper.annotate([])).toEqual([]);
  });

  xit("handles no columns", () => {
    expect(minesweeper.annotate([""])).toEqual([""]);
  });

  xit("handles no mines", () => {
    const input = ["   ", "   ", "   "];
    const expected = ["   ", "   ", "   "];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit("handles minefield with only mines", () => {
    const input = ["***", "***", "***"];
    const expected = ["***", "***", "***"];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit("handles single row with mine surrounded by spaces", () => {
    const input = [" * "];
    const expected = ["1*1"];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit("handles mine surrounded by spaces", () => {
    const input = ["   ", " * ", "   "];
    const expected = ["111", "1*1", "111"];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });
});
