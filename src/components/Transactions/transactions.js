

export function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
            
        <tbody>
            {items.map(({
                    id,
                    type,
                    amount,
                    currency,
                }) => {
                    return (
                        <TransactionItem
                            key = {id}
                            type = {type}
                            amount = {amount}
                            currency = {currency}
                        />
                    );
                })}
        </tbody>
        </table>
    );

};

function TransactionItem({
    type,
    amount,
    currency,
}) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};