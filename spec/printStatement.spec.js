import Statement from "../src/Statement.js";

class MockAccount {
    #balance;
    #transactions;

    constructor(initialBalance = 0, transaction = []) {
        this.#balance = initialBalance;
        this.#transactions = transaction;
    };

    getTransactions() {
        return this.#transactions;
    }

    withdraw(transactions) {
        const { date = transactions.getDate(), credit = transactions.getCreditAmount(), debit = transactions.getDebitAmount() } = transactions;
        this.#balance -= debit;
        const currentTrans = [date, credit, debit, this.#balance];
        return this.#transactions.push(currentTrans);
    };

    deposit(transactions) {
        const { date = transactions.getDate(), credit = transactions.getCreditAmount(), debit = transactions.getDebitAmount() } = transactions;
        this.#balance += credit;
        const currentTrans = [date, credit, debit, this.#balance];
        return this.#transactions.push(currentTrans);
    };
};

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

describe('Testing the Statement class:', () => {

    let expected;
    let printingSpy;
    let account1;
    let MockTransaction1;
    let MockTransaction2;

    beforeEach(() => {
        MockTransaction1 = new MockTransaction("04/07/1990", 300, 0);
        MockTransaction2 = new MockTransaction("04/07/2023", 0, 50);
        account1 = new MockAccount();
    });

    afterEach(() => {
        expected = undefined;
        printingSpy = undefined;
        account1 = undefined;
        MockTransaction1 = undefined;
        MockTransaction2 = undefined;
    });


    it('Test 10: the printStatement static method should have been called once', () => {
        // Arrange
        printingSpy = spyOn(Statement, `printStatement`);
        expected = 1;

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledTimes(expected);
    });


    it('Test 11: the printStatement static method should log the statement (testing the header) to the console', () => {
        // Arrange
        printingSpy = spyOn(global.console, `log`);
        expected = 'date       || credit  || debit  || balance';

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledWith(expected);
    });


    it('Test 12: the printStatement static method should log the details of the deposit', () => {
        // Arrange
        printingSpy = spyOn(Statement, `printStatement`);
        expected = ['04/07/1990', 300, 0, 300];

        // Act
        account1.deposit(MockTransaction1);
        Statement.printStatement(account1.getTransactions());

        // Assert
        expect(printingSpy).toHaveBeenCalledWith([expected]);
    });


    it('Test 13: the printStatement static method should log the details of the withdrawal', () => {
        // Arrange
        printingSpy = spyOn(Statement, `printStatement`);
        expected = ['04/07/2023', 0, 50, -50];

        // Act
        account1.withdraw(MockTransaction2);
        Statement.printStatement(account1.getTransactions());

        // Assert
        expect(printingSpy).toHaveBeenCalledWith([expected]);
    });
});