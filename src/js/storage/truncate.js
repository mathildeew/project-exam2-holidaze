export function truncate(string) {
  if (string.length > 30) {
    string = string.substring(0, 35) + "...";
  }
  return string;
}
