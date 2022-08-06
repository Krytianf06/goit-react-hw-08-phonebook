export const LOCAL_STORAGE_KEY_CONTACTS = 'contacts';
export const LOCAL_STORAGE_KEY_FILTER = 'filter';

export const queryFromLocalStorage = (key, defaultValue) => {
  return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
};

export const saveToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
};
