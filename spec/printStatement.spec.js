import Statement from "../src/Statement.js";

describe('Testing the Statement class:', () => {

    it('Test 10: the printStatement static method should have been called once', () => {
        // Arrange
        const printingSpy = spyOn(Statement, `printStatement`);

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledTimes(1);
    });


    it('Test 11: the printStatement static method should log the statement (testing the header) to the console', () => {
        // Arrange
        const printingSpy = spyOn(global.console, `log`);

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledWith('date       || credit  || debit  || balance');
    });
});