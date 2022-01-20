export const getStorageSession = (key: string) => {
  return sessionStorage.getItem(JSON.parse(key));
};

export const setStorageSession = (key: string, value: any) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};
