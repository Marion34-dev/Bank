class Account {
    #balance;
    #transactions = [];

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    withdraw(date = "", amount = 0) {
        this.#balance -= amount;
        this.#transactions.push(`${date} ||         || ${amount.toFixed(2)} || ${this.#balance.toFixed(2)}`);
        //     return `${date} ||         || ${amount.toFixed(2)} || ${this.#balance.toFixed(2)}`;

    }

    deposit(date = "", amount = 0) {
        this.#balance += amount;
        this.#transactions.push(`${date} || ${amount.toFixed(2)} ||        || ${this.#balance.toFixed(2)}`);
        //     return `${date} || ${amount.toFixed(2)} ||        || ${this.#balance.toFixed(2)}`;
    }

    printStatement() {
        console.log(`date       || credit  || debit  || balance`)
        this.#transactions.reverse().forEach(transaction => {
            console.log(transaction);
        });
    }
}

export default Account;