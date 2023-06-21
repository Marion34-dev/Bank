import Account from './Account.js';
import Transaction from './Transaction.js';

const account = new Account();

const transaction1 = ["10/01/2012", 1000.00, 0];
const transaction2 = ["13/01/2012", 2000.00, 0];
const transaction3 = ["14/01/2012", 500.00, 0];
account.deposit(transaction1);
account.deposit(transaction2);
account.withdraw(transaction3);
account.printStatement();