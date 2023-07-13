describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays one user's info by default", () => {
    cy.get('[data-cy="user-info"]').should("have.length", 1);
  });
  it("value of isim input is 'hello'", () => {
    cy.get('[name="isim"]').should("have.value", "hello");
  });
});
