import { useState } from 'react';
import { Robot } from './robot';
import { RobotCard } from './RobotCard';

export function Dashboard() {
  // useState gives you a value and a setter. React re-renders on each set.
  const [robot, setRobot] = useState<Robot>({
    id: 'r1', name: 'Rover-1', state: 'idle', battery: 80,
  });

  function drain() {
    // Always produce a NEW object — never mutate state in place.
    setRobot((r) => ({ ...r, battery: r.battery - 10 }));
  }

  return (
    <div>
      <RobotCard robot={robot} />
      <button onClick={drain}>Simulate 10% drain</button>
    </div>
  );
}
