import Account from '../src/Account.js';

class MockBalance {
    withdraw = amount => { };
    getBalance = () => 30;
    deposit = amount => { };
}


describe('Account class tests', () => {

    it('should remove to the balance object when withdraw is called on the Account', () => {
        // Arrange
        const balance = new MockBalance();
        const balanceSpy = spyOn(balance, `withdraw`);
        const account = new Account(balance);
        const amountToWithdraw = 15;

        // Act
        account.withdraw(amountToWithdraw);

        // Assert
        expect(balanceSpy).toHaveBeenCalledOnceWith(amountToWithdraw);
    });

    it('should add to the balance object when deposit is called on the Account', () => {
        // Arrange
        const balance = new MockBalance();
        const balanceSpy = spyOn(balance, `deposit`);
        const account = new Account(balance);
        const amountToAdd = 50;

        // Act
        account.deposit(amountToAdd);

        // Assert
        expect(balanceSpy).toHaveBeenCalledOnceWith(amountToAdd);
    });

    it('should return the balance when getBalance is called on the Account', () => {
        // Arrange
        const balance = new MockBalance();
        const balanceSpy = spyOn(balance, `getBalance`);
        const account = new Account(balance);

        // Act
        account.getBalance();

        // Assert
        expect(balanceSpy).toHaveBeenCalledTimes(1);
    })
});