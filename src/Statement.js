class Statement {
    static printStatement(transactions = []) {
        console.log("date       || credit  || debit  || balance");

        transactions.reverse().forEach(([date, credit, debit, balance]) => {
            const formattedCredit = credit !== 0 ? '\x1b[32m' + credit.toFixed(2) + '\x1b[0m' : '       ';
            const formattedDebit = debit !== 0 ? '\x1b[31m' + debit.toFixed(2) + '\x1b[0m' : '      ';
            const formattedBalance = balance >= 0 ? '\x1b[32m' + balance.toFixed(2) + '\x1b[0m' : '\x1b[31m' + balance.toFixed(2) + '\x1b[0m';

            console.log(`${date} || ${formattedCredit} || ${formattedDebit} || ${formattedBalance}`);
        });
    };
};

export default Statement;