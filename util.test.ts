import { add } from "./util";

describe("util add", () => {
  test("add 2 numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
