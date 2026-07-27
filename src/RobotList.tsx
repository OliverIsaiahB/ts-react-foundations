import { Robot } from './robot';
import { RobotCard } from './RobotCard';

export function RobotList({
  robots,
  onDrain,
}: {
  robots: Robot[];
  onDrain: (id: string) => void;
}) {
  // Conditional rendering: show a message when there's nothing to list.
  if (robots.length === 0) {
    return <p className="empty">No robots online.</p>;
  }

  return (
    <div className="list">
      {robots.map((robot) => (
        // key: a stable identity so React can track each item across renders.
        <div key={robot.id}>
          <RobotCard robot={robot} />
          <button onClick={() => onDrain(robot.id)}>Drain</button>
        </div>
      ))}
    </div>
  );
}
