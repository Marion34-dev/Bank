import Balance from '../src/Balance.js';

describe('Balance class tests', () => {

    it('should remove 10 from the balance when withdraw is called', () => {
        // Arrange
        let initialBalance = 15;
        let expected = 5;
        let balance = new Balance(initialBalance);

        // Act
        balance.withdraw(10);

        // Assert
        expect(balance.getBalance()).toBe(expected);
    });

    it('should add 10 to the balance when deposit is called', () => {
        // Arrange
        let initialBalance = 0;
        let expected = 10;
        let balance = new Balance(initialBalance);

        // Act
        balance.deposit("10/01/2012", 10);

        // Assert
        expect(balance.getBalance()).toBe(expected);
    });

    it('should return all the details of the deposit', () => {
        // Arrange
        let transaction;
        transaction = new Balance();
        const expected = JSON.stringify(`10/01/2012 || 1000.00 ||        || 1000.00`)

        //Act
        const actual = JSON.stringify(transaction.deposit("10/01/2012", 1000.00));

        // Assert
        expect(actual).toMatch(expected);

    });

    it('should return all the details of the withdrawal', () => {
        // Arrange
        let transaction;
        transaction = new Balance();
        const expected = JSON.stringify(`14/01/2012 ||        || 500.00 || 500.00`)

        //Act
        const actual = JSON.stringify(transaction.withdraw("14/01/2012", 500.00));

        // Assert
        expect(actual).toMatch(expected);

    });
});