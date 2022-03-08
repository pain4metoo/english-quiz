export const getLocalLevel = localStorage.getItem("level") || null;
export const getLocalName = localStorage.getItem("user") || null;
export const getLocalAuthName: any = localStorage.getItem("authName") || null;
export const getLocalAuthLevel: any = localStorage.getItem("authLevel") || null;
export const getLocalAuthCategory: any =
  localStorage.getItem("authCategory") || null;

export const addLocalUser = (user: string) => {
  localStorage.setItem("user", user);
};

export const addLocalLevel = (level: string) => {
  localStorage.setItem("level", level);
};

export const isAuthName = (authName: any) => {
  localStorage.setItem("authName", JSON.stringify(authName));
};

export const isAuthLevel = (authLevel: any) => {
  localStorage.setItem("authLevel", JSON.stringify(authLevel));
};

export const isAuthCategory = (authCategory: any) => {
  localStorage.setItem("authCategory", JSON.stringify(authCategory));
};
