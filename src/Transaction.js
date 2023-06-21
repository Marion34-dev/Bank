class Transaction {
    #date;
    #credit;
    #debit;

    constructor(date = "", credit = 0, debit = 0) {
        this.#date = date;
        this.#credit = credit;
        this.#debit = debit;
    };

    getDate() {
        return this.#date;
    };

    getDebitAmount() {
        return this.#debit;
    };

    getCreditAmount() {
        return this.#credit;
    };
};

export default Transaction;