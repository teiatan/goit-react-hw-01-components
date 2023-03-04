import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    currency: PropTypes.string,
}