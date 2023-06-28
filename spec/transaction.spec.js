import Transaction from '../src/Transaction.js';

describe('Testing the transaction class', () => {
    let expected;
    let transaction1;
    let transaction2;
    let transaction3;
    let transactionSpy;
    let actual;

    beforeEach(() => {
        transaction1 = new Transaction("04/07/2023", 0, 400);
        transaction2 = new Transaction("04/07/2023", 200, 0);
        transaction3 = new Transaction("04/07/2023", 400, 20);
    });

    afterEach(() => {
        expected = undefined;
        transaction1 = undefined;
        transaction2 = undefined;
        transaction3 = undefined;
        transactionSpy = undefined;
        actual = undefined;
        transactionSpy = undefined;
    });

    it('Test 4: testing that the getDebitAmount method is triggered when called in the Transaction class', () => {
        // Arrange
        transactionSpy = spyOn(transaction1, `getDebitAmount`);

        // Act
        transaction1.getDebitAmount();

        // Assert
        expect(transactionSpy).toHaveBeenCalled();
    });


    it('Test 5: testing that the getCreditAmount method is triggered when called in the Transaction class', () => {
        // Arrange
        transactionSpy = spyOn(transaction2, `getCreditAmount`);

        // Act
        transaction2.getCreditAmount();

        // Assert
        expect(transactionSpy).toHaveBeenCalledTimes(1);
    });


    it('Test 6: testing that the getDebitAmount method returns the right amount: 20', () => {
        // Arrange
        expected = 20;

        // Act
        actual = transaction3.getDebitAmount();

        // Assert
        expect(actual).toEqual(expected);
    });


    it('Test 7: testing that the getCreditAmount method returns the right amount: 200', () => {
        // Arrange
        expected = 200;

        // Act
        actual = transaction2.getCreditAmount();

        // Assert
        expect(actual).toEqual(expected);
    });


    it('Test 8: testing that the date getter returns a string date', () => {
        // Arrange, Act & Assert
        expect(transaction2.getDate()).toBeInstanceOf(String);
    });


    it('Test 9: testing that the date getter returns the right value: "04/07"2023"', () => {
        // Arrange
        expected = "04/07/2023";

        // Act
        actual = transaction2.getDate();

        // Assert
        expect(actual).toEqual(expected);
    });
});