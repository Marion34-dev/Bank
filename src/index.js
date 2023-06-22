import Account from './Account.js';
import Transaction from './Transaction.js';
import Statement from './Statement.js';

const account = new Account();

const transaction1 = new Transaction("10/01/2012", 1000.00, 0);
const transaction2 = new Transaction("13/01/2012", 2000.00, 0);
const transaction3 = new Transaction("14/01/2012", 0, 500);

account.deposit(transaction1);
account.deposit(transaction2);
account.withdraw(transaction3);
Statement.printStatement(account.getTransactions());