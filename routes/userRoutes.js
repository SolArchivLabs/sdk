import express from "express";
import { createUser, getUser, updateUser } from "../models/userModel.js";
import { generateDailyPlan } from "../agents/plannerAgent.js";
import { runAccountabilityCheck } from "../agents/accountabilityAgent.js";
import { evaluateProgress } from "../agents/rewardAgent.js";

const router = express.Router();

router.post("/", (req, res) => {
  const user = createUser(req.body);
  res.json(user);
});

router.get("/:id/plan", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  const plan = generateDailyPlan(user);
  res.json(plan);
});

router.post("/:id/checkin", async (req, res) => {
  const user = getUser(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await runAccountabilityCheck(user);
  res.json({ message: "Call initiated" });
});

router.post("/:id/progress", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  const reward = evaluateProgress(user, req.body);
  updateUser(user.id, req.body);

  res.json({ rewardEarned: reward, totalPoints: user.points });
});

export default router;
