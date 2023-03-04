import PropTypes from 'prop-types';

export const StatisticsList = ({
    title = "Upload stats",
    data,
}) => (
    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
        {data.map(({ id, label, percentage }) => {
        return (
          <StatisticItems key={id} label={label} percentage={percentage} />
        );
      })}
        </ul>
    </section>

);

function StatisticItems({label, percentage = 0}) {
    return (
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
};

StatisticsList.propTypes = {
 title: PropTypes.string,
 data: PropTypes.array,
};

StatisticItems.propTypes = {
 label: PropTypes.string.isRequired,
 percentage: PropTypes.number,
};