class Account {
    #balance;
    #transactions;

    constructor(initialBalance = 0, transaction = []) {
        this.#balance = initialBalance;
        this.#transactions = transaction;
    };

    getBalance() {
        return this.#balance;
    };

    getTransactions() {
        return this.#transactions;
    };

    withdraw(transactions) {
        const date = getTheDate();
        const credit = getCreditAmount();
        const debit = getDebitAmount();
        const currentTrans = [date, credit, debit, this.#balance];
        this.#balance -= debit;
        return this.#transactions.push(currentTrans);
    };

    deposit(transactions) {
        const date = getTheDate();
        const credit = getCreditAmount();
        const debit = getDebitAmount();
        const currentTrans = [date, credit, debit, this.#balance];
        this.#balance += credit;
        return this.#transactions.push(currentTrans);
    };

}

export default Account;