import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './transactions.module.css';


export function TransactionHistory({items}) {
    return (
        <table className={css["transaction-history"]}>
            <thead className={css["transaction-history__head"]}>
                <tr className={css["transaction-history__head-items"]}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
                
            <tbody className={css["transaction-history__body"]}>
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
        <tr className={css["transaction-history__item"]}>
            <td className={css["transaction-history__type"]}>{type}</td>
            <td className={css["transaction-history__amount"]}>{amount}</td>
            <td className={css["transaction-history__currency"]}>{currency}</td>
        </tr>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
            ]),
        }),
    ),
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    currency: PropTypes.string.isRequired,
}