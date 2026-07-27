import { useEffect, useState } from 'react';
import { Robot } from './robot';
import { RobotList } from './RobotList';

const SEED: Robot[] = [
  { id: 'r1', name: 'Rover-1', state: 'idle', battery: 80 },
  { id: 'r2', name: 'Rover-2', state: 'moving', battery: 55 },
  { id: 'r3', name: 'Rover-3', state: 'charging', battery: 20 },
];

export function Fleet() {
  // The fleet is the single source of truth for ALL robots.
  const [robots, setRobots] = useState<Robot[]>(SEED);

  // Simulate telemetry: every second, every robot loses 1% battery.
  useEffect(() => {
    const id = setInterval(() => {
      setRobots((list) =>
        list.map((r) => ({ ...r, battery: Math.max(0, r.battery - 1) })),
      );
    }, 1000);
    // Cleanup: stop the timer when the component unmounts.
    return () => clearInterval(id);
  }, []);

  // Drain one robot by id — immutably map the array to a new array.
  function drainOne(id: string) {
    setRobots((list) =>
      list.map((r) => (r.id === id ? { ...r, battery: r.battery - 10 } : r)),
    );
  }

  return (
    <div>
      <h2>Fleet ({robots.length})</h2>
      <RobotList robots={robots} onDrain={drainOne} />
    </div>
  );
}
