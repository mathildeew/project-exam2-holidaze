export default function apiEndpoints(id) {
  const holidaze = `https://api.noroff.dev/api/v1/holidaze`;
  const endpoints = {
    login: `${holidaze}/auth/login`,
    venues: `${holidaze}/venues`,
    singleVenue: `${holidaze}/venues/${id}`,
  };
  return endpoints;
}
