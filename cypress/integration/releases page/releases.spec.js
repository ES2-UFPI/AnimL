describe("Verify if trending animes are loading", () => {

    it("Load at least 1 trend anime", () => {
        cy.visit("http://localhost:3000/releases");
        cy.get(".calendar__box").should("be.visible")
    });

});