import { initiateCall } from "../services/callService.js";

export const runAccountabilityCheck = async (user) => {
  const message = `Hi ${user.name}, this is your SolArchiv check-in. Stay on track with your goals today.`;
  await initiateCall(user, message);
};
