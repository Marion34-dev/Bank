import Statement from "../src/Statement.js";

describe('Testing the Statement class:', () => {

    it('Test 1: the printStatement static method should have been called once ', () => {
        // Arrange
        const printingSpy = spyOn(Statement, `printStatement`);

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledTimes(1);
    });
});