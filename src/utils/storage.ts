export function getUuid() {
  return crypto.randomUUID();
}

export function setItem(key: string, val: string) {
  return window.localStorage.setItem(key, val);
}

export function getItem(id: string) {
  return window.localStorage.getItem(id);
}
