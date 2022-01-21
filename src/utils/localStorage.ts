export const getLocalStorage = (key: string) => {
  const b = localStorage.getItem(key);
  if (b) {
    try {
      return JSON.parse(b);
    } catch {
      return null;
    }
  }
  return null;
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
