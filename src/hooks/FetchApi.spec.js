import { fetchSearchResults } from "./useFetchApi";

describe("Test fetchSearchResults function", () => {
  it("Returns a promise", () => {
    expect(fetchSearchResults()).toBeInstanceOf(Promise);
  });
});
