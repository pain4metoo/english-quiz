export const store = require("store");

export const getLocalLevel = store.get("level") || null;
export const getLocalName = store.get("user") || "";
export const getLocalAuthName: any = store.get("authName") || null;
export const getLocalAuthLevel: any = store.get("authLevel") || null;
export const getLocalAuthCategory: any = store.get("authCategory") || null;
export const getLocalPreviusAnswer: any = store.get("answers") || {
  noun: [],
  adjective: [],
  verb: [],
  other: [],
};

export const addLocalUser = (user: string) => {
  store.set("user", user);
};

export const addLocalLevel = (level: string) => {
  store.set("level", level);
};

export const isAuthName = (authName: any) => {
  store.set("authName", authName);
};

export const isAuthLevel = (authLevel: any) => {
  store.set("authLevel", authLevel);
};

export const isAuthCategory = (authCategory: any) => {
  store.set("authCategory", authCategory);
};
