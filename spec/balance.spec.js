describe('Balance class tests', () => {

    it('should remove 10 from the balance when withdraw is called', () => {
        // Arrange
        let initialBalance = 15;
        let expected = 5;
        let balance = new Balance(initialBalance);

        // Act
        balance.withdraw(10);

        // Assert
        expected(balance.getBalance()).toBe(expected);
    });
});