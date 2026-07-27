// A union type: a value that is exactly ONE of these string literals.
export type RobotState = 'idle' | 'moving' | 'charging' | 'error';

// An interface describes the SHAPE of an object — its fields and their types.
export interface Robot {
  id: string;
  name: string;
  state: RobotState;
  battery: number; // 0..100
}

// A function with a typed parameter and a typed return value.
export function isHealthy(robot: Robot): boolean {
  return robot.state !== 'error' && robot.battery > 10;
}
