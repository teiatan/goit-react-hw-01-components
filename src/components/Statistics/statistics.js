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
              <StatisticItems key={id} label={label} percentage={percentage} />
            );
          })}
            </ul>
        </section>
    );

}; 

function StatisticItems({label, percentage = 0}) {
    return (
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
};

Statistics.propTypes = {
 title: PropTypes.string,
 stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

StatisticItems.propTypes = {
 label: PropTypes.string.isRequired,
 percentage: PropTypes.number,
};