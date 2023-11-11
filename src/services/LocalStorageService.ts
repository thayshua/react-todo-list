export const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key: string) => localStorage.getItem(key);

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
