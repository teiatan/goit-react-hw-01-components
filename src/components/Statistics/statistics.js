import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export function Statistics({
    stats,
}) {
    return (
            <ul className={css.stats}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticItems key={id} label={label} percentage={percentage} />
                    );
                })}
            </ul>
    );

}; 

function StatisticItems({label, percentage = 0}) {
    return (
        <li className={css.stats__item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.stats__label}>{label}</span>
            <span className={css.stats__percentage}>{percentage}%</span>
        </li>
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