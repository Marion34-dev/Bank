import Balance from '../src/Balance.js';

const account = new Balance();

account.deposit("10/01/2012", 1000.00);
account.deposit("13/01/2012", 2000.00);
account.withdraw("14/01/2012", 500.00);
account.printStatement();