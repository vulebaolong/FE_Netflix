export const lcStorage = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),

    get: (key) => JSON.parse(localStorage.getItem(key)),

    remove: (key) => localStorage.removeItem(key),
};