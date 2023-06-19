import Account from '../src/Account.js';

describe('All account class tests', () => {

    it('should remove 10 from the balance variable when withdraw() is called', () => {
        // Arrange
        let initialBalance = 15;
        let expected = 5;
        let account = new Account(initialBalance);

        // Act
        account.withdraw("10/01/2012", 10);

        // Assert
        expect(account.getBalance()).toBe(expected);
    });

    it('should add 10 to the balance variable when deposit() is called', () => {
        // Arrange
        let initialBalance = 0;
        let expected = 10;
        let account = new Account(initialBalance);

        // Act
        account.deposit("10/01/2012", 10);

        // Assert
        expect(account.getBalance()).toBe(expected);
    });

    it('should return all the details (date, amount, remaining balance) when a deposit is made', () => {
        // Arrange
        let transaction;
        transaction = new Account();
        const expected = JSON.stringify(`10/01/2012 || 1000.00 ||        || 1000.00`)

        //Act
        const actual = JSON.stringify(transaction.deposit("10/01/2012", 1000.00));

        // Assert
        expect(actual).toMatch(expected);

    });

    it('should return all the details (date, amount, remaining balance) when a withdrawal is made', () => {
        // Arrange
        let transaction;
        transaction = new Account();
        const expected = JSON.stringify(`14/01/2012 ||        || 500.00 || 500.00`)

        //Act
        const actual = JSON.stringify(transaction.withdraw("14/01/2012", 500.00));

        // Assert
        expect(actual).toMatch(expected);

    });

    it('should return all the details (date, amount, remaining balance) of the transactions (1 withdrawal and 2 deposits) when printStatement() is called', () => {
        // Arrange
        let transaction;
        transaction = new Account();
        const expected = JSON.stringify(`14/01/2012 ||         || 500.00 || 2500.00
        13/01/2012 || 2000.00 ||        || 3000.00
        10/01/2012 || 1000.00 ||        || 1000.00`)

        //Act
        transaction.deposit("10/01/2012", 1000.00);
        transaction.deposit("13/01/2012", 2000.00);
        transaction.withdraw("14/01/2012", 500.00);
        const actual = transaction.printStatement();

        // Assert
        expect(actual).toMatch(expected);
    });
});