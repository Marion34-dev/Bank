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

    deposit(transactions) {
        const date = transactions.getDate();
        const credit = transactions.getCreditAmount();
        const debit = transactions.getDebitAmount();
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

const MockTransaction1 = new MockTransaction("04/07/1990", 300, 0);
const account1 = new MockAccount();

describe('Testing the Statement class:', () => {

    it('Test 10: the printStatement static method should have been called once', () => {
        // Arrange
        const printingSpy = spyOn(Statement, `printStatement`);

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledTimes(1);
    });


    it('Test 11: the printStatement static method should log the statement (testing the header) to the console', () => {
        // Arrange
        const printingSpy = spyOn(global.console, `log`);

        // Act
        Statement.printStatement();

        // Assert
        expect(printingSpy).toHaveBeenCalledWith('date       || credit  || debit  || balance');
    });

    it('Test 12: the printStatement static method should log the deposit details', () => {
        // Arrange
        const printingSpy = spyOn(Statement, `printStatement`);

        // Act
        account1.deposit(MockTransaction1);
        Statement.printStatement(account1.getTransactions());

        // Assert
        expect(printingSpy).toHaveBeenCalledWith([['04/07/1990', 300, 0, 300]]);
    });
});