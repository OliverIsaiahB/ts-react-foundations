import { Robot, RobotState } from './robot';

// A Record maps every RobotState key to a human label — exhaustively.
const STATE_LABEL: Record<RobotState, string> = {
  idle: 'Idle',
  moving: 'Moving',
  charging: 'Charging',
  error: 'Error',
};

// Look up the friendly label for a state.
export function stateLabel(state: RobotState): string {
  return STATE_LABEL[state];
}

// Format battery as a percentage string, with an optional precision.
export function batteryText(battery: number, digits = 0): string {
  return `${battery.toFixed(digits)}%`;
}

// A one-line summary of a robot for logs or tooltips.
export function describe(robot: Robot): string {
  return `${robot.name} — ${stateLabel(robot.state)} (${batteryText(robot.battery)})`;
}
