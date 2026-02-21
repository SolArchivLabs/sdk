export const generateDailyPlan = (user) => {
  return {
    caloriesTarget: 1800,
    stepsTarget: 8000,
    waterIntakeLiters: 2.5,
    focus: user.goals
  };
};
