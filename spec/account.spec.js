import Account from '../src/Account.js';

class MockTransaction {
    date;
    credit;
    debit;

    constructor(date = "", credit = 0, debit = 0) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
    }

    getDate() {
        return this.date;
    };

    getDebitAmount() {
        return this.debit;
    };

    getCreditAmount() {
        return this.credit;
    };
}


describe('Testing the Account class', () => {

    it('Test 1: it should add 300 to the balance of the account', () => {
        // Arrange

        const MockTransaction1 = new MockTransaction("04/07/1990", 300, 0);
        const account1 = new Account();

        // Act
        account1.deposit(MockTransaction1);

        // Assert
        expect(account1.getBalance()).toEqual(300);
    });

    it('Test 2: it should add 1 to the length of the transactions array', () => {
        // Arrange
        const MockTransaction2 = new MockTransaction("04/07/1990", 0, 40)
        const account2 = new Account();

        // Act
        account2.withdraw(MockTransaction2);

        // Assert
        expect(account2.getTransactions().length).toBe(1);

    })
})
