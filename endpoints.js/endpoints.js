export default function apiEndpoints(id) {
  const holidaze = `https://api.noroff.dev/api/v1/holidaze`;
  const endpoints = {
    register: `${holidaze}/auth/register`,
    login: `${holidaze}/auth/login`,
    venues: `${holidaze}/venues`,
    singleVenue: `${holidaze}/venues/${id}`,
  };
  return endpoints;
}
