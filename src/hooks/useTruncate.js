export function truncate(string, maxLenghth) {
  if (string.length > maxLenghth) {
    string = string.substring(0, maxLenghth) + "...";
  }
  return string;
}
