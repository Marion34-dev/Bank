# Welcome to the Bank Challenge!
 
This Javascript program aims at mirroring the functionalities of a bank account. <br>
It is built with an object-oriented design and was developed in a test driven development fashion. Please note this program runs entirely on the terminal, the data is stored in memory and there is no need for any user input at this stage. 

The program enables deposit and withdrawal operations, therefore allowing the addion and subtraction of funds from the account.
An account statement can be printed, which includes the date of the transactions, the amounts credited or debited, and the updated account balance.

                                  ___________________________________
                                  |#######====================#######|
                                  |#(1)*UNITED STATES OF AMERICA*(1)#|
                                  |#**          /===\   ********  **#|
                                  |*# {G}      | (") |             #*|
                                  |#*  ******  | /v\ |    O N E    *#|
                                  |#(1)         \===/            (1)#|
                                  |##=========ONE DOLLAR===========##|
                                  ------------------------------------

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see:

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

### How to use
In order to run this program, please clone the repository to your local machine. <br>
Make sure you have Jasmine installed (or insert `npm install --save-dev jasmine` in the terminal), select the package.json file, click right to open the integrated terminal and type `npm test` in the terminal to run the spec files, which will test the production code.<br>
To run the code, please use the index.js file. 

### User stories and domain models

* First user story: <br>
As a user<br>
I want to deposit a certain amount of money<br>
So that I store it safely in my bank account

```
Objects		  Properties		       Messages		         Output
Account	      balance@number	            deposit()    		@Void
              transactions@array
Transaction   date@String
              creditAmount@Integer
              debitAmount@Integer
```

Test 1: Testing that the user can add money into their bank account using deposit() in the Account class <br>
Expecting balance to have increased by 300.

Test 5: Testing that the getCreditAmount() method is triggered when called in the Transaction class <br>
Expecting it to have been called once.

Test 7: Testing that the getCreditAmount() method returns the right amount <br>
Expecting it to return 200.

Test 8: Testing that the date getter returns a string <br>
Expecting it to the case.

Test 9: Testing that the date getter returns the right value <br>
Expecting it to return "04/07"2023".

* Second user story: <br>
As a user<br>
I want to withdraw money<br>
So that I can pay for things

```
Objects		  Properties		       Messages		         Output
Account	      balance@number	            withdraw()    		@Void
              transactions@array
Transaction   date@String
              creditAmount@Integer
              debitAmount@Integer
```

Test 2: Testing that the user can take money out of their bank account using withdraw() in the Account class <br>
Expecting balance to have decreased by 50.

Test 3: Testing that the transactions are being stored in the transactions array using both deposit() withdraw() in Account class <br>
Expecting the length of the array to have increased by two.

Test 4: Testing that the getDebitAmount() method is triggered when called in the Transaction class <br>
Expecting it to have been called once.

Test 6: Testing that the getDebitAmount() method returns the right amount <br>
Expecting it to return 20.

* Third user story:<br>
As a user<br>
I want to be able to view my bank statement<br>
So that I can check the dates and amounts of my transactions as well as the remaining balance

```
Objects		    Properties		    Messages		         Output
Statement           transactions           printStatement()             @String
```

Test 10: Testing that the printStatement() static method is being called <br>
Expecting it to have been called once.

Test 11: Testing that the printStatement() static method should print the statement <br>
Expecting the header to have been logged on the console.

Test 12: Testing that the printStatement() static method should log the details of the deposit <br>
Expecting the details of the deposit to have been logged on the console.

Test 13: Testing that the printStatement() static method should log the details of the withdrawal <br>
Expecting the details of the withdrawal to have been logged on the console.
