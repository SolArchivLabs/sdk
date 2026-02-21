import { v4 as uuidv4 } from "uuid";

const users = [];

export const createUser = (data) => {
  const user = {
    id: uuidv4(),
    name: data.name,
    weight: data.weight,
    bloodPressure: data.bloodPressure,
    goals: data.goals,
    points: 0
  };

  users.push(user);
  return user;
};

export const getUser = (id) => users.find(u => u.id === id);

export const updateUser = (id, updates) => {
  const user = getUser(id);
  if (!user) return null;

  Object.assign(user, updates);
  return user;
};
