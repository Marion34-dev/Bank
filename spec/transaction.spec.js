describe('Testing the transaction class', () => {

    it('Test 1: testing that the getDebitAmount method is triggered when using it', () => {
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

    it('Test 2: testing that the date getter returns a string date', () => {
        // Arrange
        const date = "04/07/2023";
        const debit = 400;
        const credit = 0;
        const transaction2 = new Transaction(date, debit, credit);

        // Act
        actual = transaction2.date;

        // Assert
        expect(actual).toEqual(String);

    });

});