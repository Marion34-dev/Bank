class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    withdraw(amountToWithdraw) {
        this.#balance -= amountToWithdraw;
    }
}

export default BankAccount;