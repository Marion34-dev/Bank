class MockBalance {
    withdraw = amount => { };
    getBalance = () => 30;
}


describe('Account class tests', () => {

    it('should remove 15 to the balance object when withdraw is called on the Account', () => {
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
});