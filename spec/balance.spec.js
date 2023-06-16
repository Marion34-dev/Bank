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
        balance.deposit(10);

        // Assert
        expect(balance.getBalance()).toBe(expected);
    });

    it('should add 2 to the length of transactions array when withdraw and deposit are called', () => {
        // Arrange
        let expected = 2;
        let initialBalance = 50;
        let balance = new Balance(initialBalance);

        // Act
        balance.deposit(1);
        balance.withdraw(4);

        // Assert
        expect(balance.getTransactions()).toHaveSize(expected);
    });
});