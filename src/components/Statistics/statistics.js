import React from 'react';

export const StatisticsList = ({
    title = "Upload stats",
    data,
}) => (
    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
        {data.map(({ id, label, percentage }) => {
        return (
          <StatisticItems id={id} label={label} percentage={percentage} />
        );
      })}
        </ul>
    </section>

);

function StatisticItems({id, label, percentage}) {
    return (
        <li className="item" id={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
}