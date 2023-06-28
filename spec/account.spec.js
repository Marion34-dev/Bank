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

    let MockTransaction1;
    let MockTransaction2;
    let MockTransaction3;
    let account1;
    let expected;

    beforeEach(() => {
        MockTransaction1 = new MockTransaction("04/07/1990", 300, 0);
        MockTransaction2 = new MockTransaction("04/07/2023", 0, 50);
        MockTransaction3 = new MockTransaction("04/07/1990", 0, 50);
        MockTransaction2 = new MockTransaction("04/07/1990", 0, 40);
        account1 = new Account();
    });

    afterEach(() => {
        expected = undefined;
        account1 = undefined;
        MockTransaction1 = undefined;
        MockTransaction2 = undefined;
        MockTransaction3 = undefined;
    });


    it('Test 1: it should add 300 to the balance of the account', () => {
        // Arrange
        expected = 300;

        // Act
        account1.deposit(MockTransaction1);

        // Assert
        expect(account1.getBalance()).toEqual(expected);
    });


    it('Test 2: it should remove 50 to the balance of the account', () => {
        // Arrange
        expected = 250;

        // Act
        account1.deposit(MockTransaction1);
        account1.withdraw(MockTransaction3);

        // Assert
        expect(account1.getBalance()).toEqual(expected);
    });


    it('Test 3: it should add 2 to the length of the transactions array (one credit, one debit)', () => {
        // Arrange
        expected = 2;

        // Act
        account1.deposit(MockTransaction1);
        account1.withdraw(MockTransaction2);

        // Assert
        expect(account1.getTransactions().length).toBe(expected);
    });
});
