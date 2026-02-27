import React from 'react';
import { stats } from '../../data/portfolio';
import { useCounter } from '../../hooks/useCounter';

export default function Stats() {
    return (
        <section id="stats" aria-labelledby="stats-heading">
            <div className="container" style={{ maxWidth: '1100px' }}>
                <span className="eyebrow" style={{ display: 'block', margin: '0 auto 3rem', width: 'fit-content' }}>06 / IMPACTO</span>

                <div className="stats-impact-grid">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="stat-impact-item">
                            <StatCard stat={stat} />
                            {index < stats.length - 1 && <div className="stat-divider" aria-hidden="true" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat }) {
    const { ref, val } = useCounter(stat.number);

    // Split label for better layout (e.g. "Automations Built" -> "Automations", "Built")
    const labelParts = stat.label.split(' ');
    const part1 = labelParts[0];
    const part2 = labelParts.slice(1).join(' ');

    return (
        <div className="stat-impact-card" role="listitem">
            <div className="stat-impact-value" ref={ref}>
                {val}{stat.suffix}
            </div>
            <div className="stat-impact-label">
                <span className="stat-part1">{part1}</span>
                <span className="stat-part2">{part2}</span>
            </div>
        </div>
    );
}
