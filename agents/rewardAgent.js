import { config } from "../config/config.js";

export const evaluateProgress = (user, newMetrics) => {
  let reward = 0;

  if (newMetrics.weight < user.weight) {
    reward += config.rewardPoints;
  }

  if (newMetrics.bloodPressure < user.bloodPressure) {
    reward += config.rewardPoints;
  }

  user.points += reward;

  return reward;
};
