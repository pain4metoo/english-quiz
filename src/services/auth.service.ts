export const getLocalLevel = localStorage.getItem("level") || null;
export const getLocalName = localStorage.getItem("user") || null;

export const addLocalUser = (user: string) => {
  localStorage.setItem("user", user);
};

export const addLocalLevel = (level: string) => {
  localStorage.setItem("level", level);
};
