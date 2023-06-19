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
In order to run this program, please clone the repository to your local machine. 
Make sure you have Jasmine installed (or insert `npm install --save-dev jasmine` in the terminal), and type `npm test` in the terminal to run the spec file, which will test the production code.

### User stories and domain models

* First user story: <br>
As a user<br>
I want to withdraw money<br>
So that I can pay for things

```
Objects		    Properties		    Messages		         Output
BankAccount	    balance@number	    withdraw()    		@Void
                    transactions@array
```

Test 1: Testing that the user can take money out of their bank account using withdraw()
Expecting balance to have reduced by 10

* Second user story: <br>
As a user<br>
I want to deposit a certain amount of money<br>
So that I store it safely in my bank account

```
Objects		    Properties		    Messages		         Output
BankAccount	    balance@number	    deposit()    		@Void
                    transactions@array
```

Test 2: Testing that the user can add money into their bank account using deposit()

* Third user story:<br>
As a user<br>
I want to be able to view my bank statement<br>
So that I can check the dates and amounts of my transactions as well as the remaining balance

```
Objects		    Properties		    Messages		          Output
BankAccount	    balance@number	    printStatement()    	  @String
                    transactions@array
```

Test 3: Testing that printStatement() is aligned with the following formatting and returns: 
```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
``` 
