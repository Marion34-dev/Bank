import Transaction from '../src/Transaction.js';

describe('Testing the transaction class', () => {

    it('Test 4: testing that the getDebitAmount method is triggered when called in the Transaction class', () => {
        // Arrange
        const date = "04/07/2023";
        const debit = 400;
        const credit = 0;
        const transaction1 = new Transaction(date, credit, debit);
        const debitSpy = spyOn(transaction1, `getDebitAmount`);

        // Act
        transaction1.getDebitAmount();

        // Assert
        expect(debitSpy).toHaveBeenCalled();
    });


    it('Test 5: testing that the getCreditAmount method is triggered when called in the Transaction class', () => {
        // Arrange
        const date = "04/07/2023";
        const debit = 0;
        const credit = 200;
        const transaction1 = new Transaction(date, credit, debit);
        const debitSpy = spyOn(transaction1, `getCreditAmount`);

        // Act
        transaction1.getCreditAmount();

        // Assert
        expect(debitSpy).toHaveBeenCalledTimes(1);
    });


    it('Test 6: testing that the getDebitAmount method returns the right amount: 20', () => {
        // Arrange
        const date = "04/07/2023";
        const credit = 400;
        const debit = 20;
        const transaction1 = new Transaction(date, credit, debit);
        const expected = 20;

        // Act
        const actual = transaction1.getDebitAmount();

        // Assert
        expect(actual).toEqual(expected);
    });


    it('Test 7: testing that the getCreditAmount method returns the right amount: 200', () => {
        // Arrange
        const date = "04/07/2023";
        const credit = 200;
        const debit = 0;
        const transaction1 = new Transaction(date, credit, debit);
        const expected = 200;

        // Act
        const actual = transaction1.getCreditAmount();

        // Assert
        expect(actual).toEqual(expected);
    });


    it('Test 8: testing that the date getter returns a string date', () => {
        // Arrange
        const date = "04/07/2023";
        const debit = 400;
        const credit = 0;
        const transaction2 = new Transaction(date, debit, credit);

        // Act & Assert
        expect(transaction2.getDate()).toBeInstanceOf(String);
    });


    it('Test 9: testing that the date getter returns the right value: "04/07"2023"', () => {
        // Arrange
        const date = "04/07/2023";
        const credit = 200;
        const debit = 0;
        const transaction1 = new Transaction(date, credit, debit);
        const expected = "04/07/2023";

        // Act
        const actual = transaction1.getDate();

        // Assert
        expect(actual).toEqual(expected);
    });
});