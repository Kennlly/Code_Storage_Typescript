const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// Control what needs passing in
interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

// Advanced
const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K,
): T[K][] => {
  return users.map((user) => user[key]);
};
