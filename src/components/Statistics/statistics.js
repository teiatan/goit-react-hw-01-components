import PropTypes from 'prop-types';

export function Statistics({
    title = "Upload stats",
    stats,
}) {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => {
            return (
                <li className="item" key={id}>
                    <StatisticItems label={label} percentage={percentage} />
                </li>
            );
          })}
            </ul>
        </section>
    );

}; 

function StatisticItems({label, percentage = 0}) {
    return (
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </>
    );
};

Statistics.propTypes = {
 title: PropTypes.string,
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