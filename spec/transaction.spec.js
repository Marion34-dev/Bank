import Transaction from '../src/Transaction.js';

describe('Testing the transaction class', () => {

    it('Test 3: testing that the getDebitAmount method is triggered when using it', () => {
        // Arrange
        const date = "04/07/2023";
        const debit = 400;
        const credit = 0;
        const transaction1 = new Transaction(date, debit, credit);
        const debitSpy = spyOn(transaction1, `getDebitAmount`)

        // Act
        transaction1.getDebitAmount();

        // Assert
        expect(debitSpy).toHaveBeenCalled();
    });

    it('Test 4: testing that the date getter returns a string date', () => {
        // Arrange
        const date = "04/07/2023";
        const debit = 400;
        const credit = 0;
        const transaction2 = new Transaction(date, debit, credit);

        // Act & Assert
        expect(transaction2.getDate()).toBeInstanceOf(String);
    });
});