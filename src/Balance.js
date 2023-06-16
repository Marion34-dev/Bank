class Balance {
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

    deposit(amountToDeposit) {
        this.#balance += amountToDeposit;
    }
}

export default Balance;