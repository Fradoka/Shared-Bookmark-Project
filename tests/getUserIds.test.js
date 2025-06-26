import { getUserIds } from "../storage.js";

describe("getUserIds", () => {
  test('returns correct user Ids', () => {
    expect(getUserIds()).toEqual(["Alice", "Bob", "Charlie", "David", "Eve"]);
  })
});