const chalk = import("chalk");

class Statement {

    static printStatement(transactions) {
        console.log("date       || credit  || debit  || balance");

        transactions.forEach(trans => {
            let date = trans[0];
            let credit = trans[1];
            let debit = trans[2];
            let balance = trans[3];

            if (credit != 0) {
                console.log(`${date} || ${chalk.greenBright(credit.toFixed(2))} ||        || ${chalk.yellowBright(balance.toFixed(2))}`);
            } else if (debit != 0) {
                console.log(`${date} ||         || ${chalk.redBright(debit.toFixed(2))} || ${chalk.yellowBright(balance.toFixed(2))}`);
            }
        });
    }
}

export default Statement;