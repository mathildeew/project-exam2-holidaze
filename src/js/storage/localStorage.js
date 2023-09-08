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
