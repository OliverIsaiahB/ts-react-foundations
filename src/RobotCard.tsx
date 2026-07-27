import { Robot, isHealthy } from './robot';
import { stateLabel, batteryText } from './format';

// A component is a function that takes props and returns JSX (UI).
export function RobotCard({ robot }: { robot: Robot }) {
  return (
    <div className="card">
      <h3>{robot.name}</h3>
      <p>State: {stateLabel(robot.state)}</p>
      <p>Battery: {batteryText(robot.battery)}</p>
      <p>{isHealthy(robot) ? '✅ Healthy' : '⚠️ Attention'}</p>
    </div>
  );
}
