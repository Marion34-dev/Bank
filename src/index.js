import Account from './Account.js';

const account = new Account();

account.deposit("10/01/2012", 1000.00);
account.deposit("13/01/2012", 2000.00);
account.withdraw("14/01/2012", 500.00);
account.printStatement();