export default class Storage {
  static savelocalStorage(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  static removeLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

  static getLocalStorage(name: string) {
    return localStorage.getItem(name);
  }
}
