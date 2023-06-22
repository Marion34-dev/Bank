import chalk from 'chalk';

class Statement {

    static printStatement(transactions = []) {
        console.log("date       || credit  || debit  || balance");

        transactions.reverse().forEach(trans => {
            let date = trans[0];
            let credit = trans[1];
            let debit = trans[2];
            let balance = trans[3];

            if (credit != 0) {
                const formattedCredit = chalk.green(credit.toFixed(2));
                const formattedBalance = balance >= 0 ? chalk.green(balance.toFixed(2)) : chalk.red(balance.toFixed(2));
                console.log(`${date} || ${formattedCredit} ||        || ${formattedBalance}`);
            } else if (debit != 0) {
                const formattedDebit = chalk.red(debit.toFixed(2));
                const formattedBalance = balance >= 0 ? chalk.green(balance.toFixed(2)) : chalk.red(balance.toFixed(2));
                console.log(`${date} ||         || ${formattedDebit} || ${formattedBalance}`);
            }
        });
    }
}

export default Statement;