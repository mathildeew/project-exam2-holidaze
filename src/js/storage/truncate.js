export function truncate(string) {
  if (string.length > 15) {
    string = string.substring(0, 24) + "...";
  }
  return string;
}
