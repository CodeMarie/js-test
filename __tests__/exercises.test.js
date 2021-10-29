const { divvyUp } = require("../src/exercises.js");

describe("divvyUp", () => {
  it("returns a correct string if name has not been provided", () => {
    expect(divvyUp()).toBe("One for you, one for me.");
  });

  it("returns a correct string containing the name if name has been provided", () => {
    expect(divvyUp("Linda")).toBe("One for Linda, one for me.");
    expect(divvyUp("Martin")).toBe("One for Martin, one for me.");
    expect(divvyUp("Robert")).toBe("One for Robert, one for me.");
  });
});
