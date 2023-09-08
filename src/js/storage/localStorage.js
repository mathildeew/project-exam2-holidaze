/**
 * Stores item in localStorage
 * @param {*} key Name of itmen
 * @param {*} value The items content
 * ```
 * // Stores the name in localStorage
 * localStorage.set("name", response.name)
 */
export function set(key, value) {
  localStorage.setItem(key, value);
}

/**
 * Stores item in localStorage
 * @param {*} key Name of itmen
 * @param {*} value The items content
 * ```
 * // Gets item from localstorage
 * localStorage.get("name", response.name)
 */
export function get(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
