import { getUserIds } from "../storage.js";

test('returns correct user Ids', () => {
    expect(getUserIds()).toEqual(["Alice", "Bob", "Charlie", "David", "Eve"]);
})