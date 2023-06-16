class Account {
    #Accountbalance

    constructor(balanceLikeObject) {
        this.#Accountbalance = balanceLikeObject;
    }

    getBalance() {
        return this.#Accountbalance.getBalance();
    }

    withdraw(amountToWithdraw) {
        return this.#Accountbalance.withdraw(amountToWithdraw);
    }
}

export default Account;