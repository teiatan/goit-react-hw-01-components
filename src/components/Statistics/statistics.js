import PropTypes from 'prop-types';
import css from './statistics.module.css';

export function Statistics({
    stats,
}) {
    return (
        <>
            <ul className={css.stats}>
            {stats.map(({ id, label, percentage }) => {
            return (
                <li className={css.stats__item} key={id}>
                    <StatisticItems label={label} percentage={percentage} />
                </li>
            );
          })}
            </ul>
        </>
    );

}; 

function StatisticItems({label, percentage = 0}) {
    return (
        <>
            <span className={css.stats__label}>{label}</span>
            <span className={css.stats__percentage}>{percentage}%</span>
        </>
    );
};

Statistics.propTypes = {
 stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        ]),
    }),
),
};

StatisticItems.propTypes = {
 label: PropTypes.string.isRequired,
 percentage: PropTypes.number,
};