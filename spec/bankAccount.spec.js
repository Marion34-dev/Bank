import BankAccount from '../src/BankAccount.js';

describe('Bank account class tests', () => {

    it('should remove 10 from the balance when withdraw is called', () => {
        // Arrange
        let initialBalance = 15;
        let expected = 5;
        let balance = new BankAccount(initialBalance);

        // Act
        balance.withdraw(10);

        // Assert
        expect(balance.getBalance()).toBe(expected);
    });
});